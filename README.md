## Backend: Book Exchange Platform - Secure and Efficient Backend API
The Book Exchange Platform Backend powers the application with robust and scalable APIs to manage data, user authentication, and book exchanges.

## Features

### User Authentication
- Secure authentication and session management using Firebase Authentication.

### API for Bookstore
- RESTful APIs to fetch, create, update, and delete book listings.
- Integration with the Google Books API to fetch detailed book metadata.

### Exchange Management
- API endpoints for listing books and managing exchange requests.
- Handle book exchange inquiries and update transaction statuses.

### Profile Management
- Endpoints to retrieve and update user profile information.

### Search Functionality
- APIs to enable search and filtering by title, author, or genre.

### Error Handling and Logging
- Centralized error handling for seamless user experience.
- Logs for monitoring API usage and troubleshooting.

## Tech Stack
- **Node.js**: Runtime environment for building scalable server-side applications.
- **Express.js**: Framework for creating RESTful APIs.
- **TypeScript**: Ensures code maintainability with strong typing.
- **Firebase**: Authentication and database integration.

## Setup and Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/<your-repo>/book-exchange-backend.git
    ```

2. Navigate to the project directory:
    ```bash
    cd book-exchange-backend
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Start the server:
    ```bash
    npm start
    ```

5. Set up PostgreSQL:
    - Install PostgreSQL from the [official website](https://www.postgresql.org/download/).
    - Create a new database for the project:
        ```bash
        createdb book_exchange_db
        ```

6. Configure the database connection:
    - Create a `.env` file in the root directory and add the following:
        ```env
        DATABASE_URL="postgresql://<username>:<password>@localhost:5432/book_exchange_db"
        ```

7. Run Prisma migrations to set up the database schema:
    ```bash
    npx prisma migrate deploy
    ```

8. Generate Prisma client:
    ```bash
    npx prisma generate
    ```