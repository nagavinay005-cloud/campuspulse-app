FROM php:8.2-apache

# Install PDO MySQL extension required for the database
RUN docker-php-ext-install pdo pdo_mysql

# Enable Apache mod_rewrite for .htaccess URL rewriting
RUN a2enmod rewrite

# Copy custom Apache vhost config (AllowOverride All for .htaccess support)
COPY 000-default.conf /etc/apache2/sites-available/000-default.conf

# Copy backend application files into Apache document root
COPY . /var/www/html/

# Create required directories with proper permissions
RUN mkdir -p /var/www/html/logs /var/www/html/uploads \
    && chown -R www-data:www-data /var/www/html

# Use PORT env variable injected by Railway/Render (default 80)
RUN sed -i 's/80/${PORT}/g' /etc/apache2/ports.conf

# Expose the dynamic port
EXPOSE ${PORT}

# Start Apache in foreground
CMD ["apache2-foreground"]
