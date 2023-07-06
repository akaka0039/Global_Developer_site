# Global Meetup for Developers

This repository is for the Global Meetup for Developers platform, an online hub designed for developers around the world to share information, learn, and collaborate.

## Project Description

The Global Meetup for Developers platform provides a space for developers to connect, access valuable resources, and engage in discussions. It offers a wide range of content on various development-related topics, including programming languages, frameworks, databases, and cloud platforms.

## Website (2023/06/30)

### https://test-site-akaka.online/

#### Demo user:

- Email: user1@example.com
- Pass: password1

### Design Resources

- [Google Slides Presentation - Concept](https://docs.google.com/presentation/d/1SNJKIt_EOww7z5Tp2Az6Ix4-KuuCIh4N9v_dFMHD8cs/edit?usp=sharing)
- [Figma - Design](https://www.figma.com/file/o3kgSi8gQJW6TFfcDzL5kD/Global-Developer-Site-Design?type=design&node-id=1%3A297&t=CZkLvLwjqSZUKTOJ-1)
- [Figma - Screen Transitions](https://www.figma.com/file/2Mih5THnthmXD6sOujOKG2/Global-Developer-Site?type=whiteboard&node-id=0%3A1&t=KrVEtjive2yYwN9z-1)
- [ER - Diagram DB](https://drive.google.com/file/d/10FsXhL0Wl-uaOOt4tiLXr8zFmO1TAxCx/view)

## Tech Stack

[![Tech Stack](https://skillicons.dev/icons?i=laravel,react,tailwind,docker,mysql,nginx,vite,aws,figma,vscode,&perline=7)](https://skills.thijs.gg)

The Global Meetup for Developers platform utilizes a tech stack that includes AWS, React, Tailwind CSS, Vite, Figma, and Laravel.

## How to Set Up Locally

### Prerequisites

- Docker
- Docker Compose

### Usage

1. Clone the repository.

   ```
   git clone https://github.com/akaka0039/Global_Developer_site.git
   ```

2. Change directory to the cloned repository.

   ```
   cd Global_Developer_site
   ```

3. Set up the Laravel development environment.

   - Change directory to src

     ```
     cd src
     ```

   - Copy the example `.env` file.

     ```shell
     cp .env.example .env
     ```

   - Modify the `.env` file to configure the database connection.

     ```dotenv
     DB_CONNECTION=mysql
     DB_HOST=db
     DB_PORT=3306
     DB_DATABASE=database
     DB_USERNAME=user
     DB_PASSWORD=password
     ```

   - Generate the application key.

     ```shell
     php artisan key:generate
     ```

4. Build Docker images.

- Back to Global_Developer_site directory from src

  ```
  cd ../
  ```

  ```
  docker-compose build
  ```

5. Start Docker containers.

   ```
   docker-compose up -d
   ```

6. Enter the `app` container.

   ```
   docker-compose exec -it app bash
   ```

7. Install dependencies with Composer.

   ```
   composer install
   ```

8. Run database migrations.

   ```shell
   php artisan migrate
   ```

9. Start the Laravel server in the `app` container.

   ```shell
   php artisan serve
   ```

10. Open a new terminal window, navigate to the project directory, and start the React development server in the `app` container.

    ```shell
    npm install && npm run dev
    ```

11. Access the website.

    Open your browser and visit [http://localhost:8080/](http://localhost:8080/).

12. Access phpMyAdmin.

    Open your browser and visit [http://localhost:8081/](http://localhost:8081/).

**Note**: Make sure that all the steps are executed in the project directory.

## Looking for Designers and Developers

We are actively looking for designers and developers to join our team and contribute to the Global Meetup for Developers platform. If you are passionate about design and want to be part of an exciting project, we would love to hear from you! Please contact us!!!

## Contributing

We welcome contributions from the developer community. If you have any bug reports, feature requests, or improvements, please open an issue or submit a pull request following our [contribution guidelines](CONTRIBUTING.md).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
