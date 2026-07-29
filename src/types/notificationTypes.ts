// Notification System Types for CampusPulse (Firebase Cloud Messaging Ready)

export type NotificationRole = "Student" | "Organizer" | "Admin" | "All";

export type NotificationPriority = "low" | "medium" | "high" | "urgent";

export type NotificationCategory =
  | "Auth"
  | "Events"
  | "Registrations"
  | "Certificates"
  | "Archive"
  | "System";

export type NotificationType =
  // Auth
  | "Welcome"
  | "EmailVerified"
  | "PasswordChanged"
  | "ProfileUpdated"
  // Student
  | "RegistrationSuccessful"
  | "RegistrationApproved"
  | "RegistrationRejected"
  | "Waitlisted"
  | "ReminderTomorrow"
  | "ReminderOneHour"
  | "EventStarted"
  | "CertificateAvailable"
  | "FeedbackAvailable"
  | "EventArchived"
  // Organizer
  | "NewRegistration"
  | "RegistrationCancelled"
  | "EventApproved"
  | "EventRejected"
  | "ChangesRequested"
  | "EventPublished"
  | "AttendanceCompleted"
  | "ArchiveCompleted"
  // Admin
  | "NewEventSubmitted"
  | "NewOrganizerRegistered"
  | "SystemWarning"
  | "SecurityAlert"
  | "BackupComplete";

export interface FirestoreNotification {
  notificationId: string;
  userId: string;
  role: NotificationRole;
  category: NotificationCategory;
  title: string;
  message: string;
  type: NotificationType;
  priority: NotificationPriority;
  relatedEventId?: string;
  relatedRegistrationId?: string;
  isRead: boolean;
  createdAt: string;
  expiresAt?: string;
  actionUrl?: string;
  icon?: string;
}
