FROM php:8.3.10

RUN apt-get update -y && apt-get install -y openssl zip unzip git
# RUN docker-php-ext-install pdo_mysql
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
WORKDIR /app
COPY . .
RUN composer install

EXPOSE 8080
CMD php artisan serve --host=0.0.0.0 --port=8080