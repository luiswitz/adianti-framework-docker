# Adianti Framework Docker Setup

This repository has the objective of easily setup with Docker an [Adianti Framework](https://www.adianti.com.br/framework) project with MySQL based on [ERP Template 3](https://www.adianti.com.br/framework-template)

You can access the following applications after the setup:
- Adianti ERP 3: http://localhost
- PHP MyAdmin: http://localhost:8183

## Getting Started


```
git clone  https://github.com/luiswitz/adianti-framework-docker.git my_new_project
cd my_new_project
```
Setup your database credentials in `docker-compose.yml` and `phinx.yml` and run the containers
```
docker-compose up
```

Install dependencies with composer
```
docker-compose exec php composer install
```

Acces PHP MyAdmin http://localhost:8183 and create your database

Setup database with migrations
```
docker-compose exec php php vendor/robmorgan/phinx/bin/phinx migrate -e development
```

Access the application: http://localhost

## Creating Migrations

To create migration [Phinx](https://phinx.org/) was choosed. You can  check the documentation on this [link](http://docs.phinx.org/en/latest/intro.html)

To create new migrations with docker, run the following command:

```
docker-compose exec php php vendor/robmorgan/phinx/bin/phinx create MyNewMigration
```

## Adding Packages with Composer

You can add packages to your project with [Composer](https://getcomposer.org/).

To do this, run the following command:
```
docker-compose exec php composer require robmorgan/phinx
```
