FROM php:8.1-fpm

ENV TZ Asia/Tokyo

RUN apt-get update && \
    apt-get install -y git unzip libzip-dev libicu-dev libonig-dev && \
    docker-php-ext-install intl pdo_mysql zip bcmath

# install Node.js
RUN curl -sL https://deb.nodesource.com/setup_18.x | bash - \
    && apt-get install -y nodejs

# install npm
RUN npm install -g npm@9.2.0

# necessary packages
RUN npm install -g @headlessui/react@1.7.14 && \
    npm install -g @inertiajs/react@1.0.6 && \
    npm install -g @tailwindcss/forms@0.5.3 && \
    npm install -g @vitejs/plugin-react@3.1.0 && \
    npm install -g autoprefixer@10.4.14 && \
    npm install -g axios@1.4.0 && \
    npm install -g laravel-vite-plugin@0.7.6 && \
    npm install -g postcss@8.4.23 && \
    npm install -g react-dom@18.2.0 && \
    npm install -g react@18.2.0 && \
    npm install -g tailwindcss@3.3.2 && \
    npm install -g vite@4.3.5

COPY ./docker/app/php.ini /usr/local/etc/php/php.ini

COPY --from=composer:2.2 /usr/bin/composer /usr/bin/composer

WORKDIR /app
