<?php

namespace App\Helpers;

/**
 * Input Data Validation Helper Engine for CampusPulse API
 */
class Validator
{
    private array $data;
    private array $rules;
    private array $errors = [];

    public function __construct(array $data, array $rules)
    {
        $this->data = $data;
        $this->rules = $rules;
    }

    /**
     * Factory Constructor
     */
    public static function make(array $data, array $rules): self
    {
        return new self($data, $rules);
    }

    /**
     * Run Validation Rules
     */
    public function validate(): bool
    {
        foreach ($this->rules as $field => $ruleString) {
            $value = $this->data[$field] ?? null;
            $ruleArray = is_array($ruleString) ? $ruleString : explode('|', $ruleString);

            foreach ($ruleArray as $rule) {
                $trimmedVal = is_string($value) ? trim($value) : $value;

                if ($rule === 'required' && ($value === null || (is_string($value) && trim($value) === ''))) {
                    $this->errors[$field][] = "The {$field} field is required.";
                }

                if ($rule === 'email' && $trimmedVal && !filter_var($trimmedVal, FILTER_VALIDATE_EMAIL)) {
                    $this->errors[$field][] = "The {$field} must be a valid email address.";
                }

                if (str_starts_with($rule, 'min:')) {
                    $min = (int)substr($rule, 4);
                    if ($value && strlen((string)$value) < $min) {
                        $this->errors[$field][] = "The {$field} must be at least {$min} characters.";
                    }
                }

                if (str_starts_with($rule, 'max:')) {
                    $max = (int)substr($rule, 4);
                    if ($value && strlen((string)$value) > $max) {
                        $this->errors[$field][] = "The {$field} must not exceed {$max} characters.";
                    }
                }

                if ($rule === 'numeric' && $value && !is_numeric($value)) {
                    $this->errors[$field][] = "The {$field} field must be a valid number.";
                }

                if (str_starts_with($rule, 'in:')) {
                    $allowed = explode(',', substr($rule, 3));
                    if ($value && !in_array($value, $allowed, true)) {
                        $this->errors[$field][] = "The {$field} must be one of: " . implode(', ', $allowed);
                    }
                }
            }
        }

        return empty($this->errors);
    }

    /**
     * Check if Validation Fails
     */
    public function fails(): bool
    {
        return !$this->validate();
    }

    /**
     * Get Validation Error Messages
     */
    public function errors(): array
    {
        return $this->errors;
    }
}
