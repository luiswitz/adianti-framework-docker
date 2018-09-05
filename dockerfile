FROM php:7.2-apache
RUN apt-get update
RUN apt-get install -ym wget g++ curl git gnupg2 apt-utils software-properties-common libpng-dev

# mysql
RUN docker-php-source extract \
    && docker-php-ext-install gd mysqli pdo_mysql \
    && docker-php-source delete

# composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

RUN alias composer="php -n /usr/local/bin/composer"
