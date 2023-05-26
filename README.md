# docker-laravel

以下は Docker と Laravel の開発環境を提供する README.md の例です。

# Development Environment for Laravel and Docker

This repository provides a development environment for Laravel application using Docker.

## Prerequisites

- Docker
- Docker Compose

## Usage

1. Clone the repository.

   ```
   git clone https://github.com/yourusername/your-repo.git
   ```

2. Change directory to the cloned repository.

   ```
   cd your-repo
   ```

3. Build Docker images.

   ```
   docker-compose build
   ```

4. Start Docker containers.

   ```
   docker-compose up -d
   ```

5. Set up Laravel development environment.

   ```
   docker-compose exec app cp .env.example .env
   docker-compose exec app php artisan key:generate
   ```

6. Access http://localhost:8000 and verify that the Laravel application is running correctly.

7. When you change the application code, the changes are automatically reflected.

## Stop Docker containers

To stop Docker containers, use the following command.

```
docker-compose down
```

## Other commands

### Installing Composer

To use Composer inside the Docker container, install it using the following command.

```
docker-compose exec app composer install
```

### Running Artisan commands

To use Artisan commands inside the Docker container, use the following command.

```
docker-compose exec app php artisan <command>
```

## License

This repository is licensed under the MIT license. For more information, see the LICENSE file.

# Laravel と Docker の開発環境

このリポジトリは、Docker を使用して Laravel アプリケーションの開発環境を提供するものです。

## 必要なもの

- Docker
- Docker Compose

#　日本語

## 使用方法

1. リポジトリをクローンします。

   ```
   git clone https://github.com/yourusername/your-repo.git
   ```

2. ターミナルでクローンしたディレクトリに移動します。

   ```
   cd your-repo
   ```

3. Docker イメージをビルドします。

   ```
   docker-compose build
   ```

4. Docker コンテナを起動します。

   ```
   docker-compose up -d
   ```

5. Laravel の開発環境を設定します。

   ```
   docker-compose exec app cp .env.example .env
   docker-compose exec app php artisan key:generate
   ```

6. http://localhost:8000 にアクセスして、Laravel アプリケーションが正しく動作することを確認します。

7. アプリケーションのコードを変更すると、自動的に変更内容が反映されます。

## Docker コンテナの停止

Docker コンテナを停止するには、以下のコマンドを使用します。

```
docker-compose down
```

## その他のコマンド

### Composer のインストール

Docker コンテナ内で Composer を使用するには、以下のコマンドを使用してインストールします。

```
docker-compose exec app composer install
```

### Artisan コマンドの実行

Docker コンテナ内で Artisan コマンドを使用するには、以下のコマンドを使用します。

```
docker-compose exec app php artisan <command>
```

## ライセンス

このリポジトリは MIT ライセンスの下で公開されています。詳細については、LICENSE ファイルを参照してください。
