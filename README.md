# Ticket Management Backend

[Link to project](https://tickets-backend-50ced0005faa.herokuapp.com/)

This is a backend service for managing customer support tickets. The system allows users to create, update, and track support tickets. It includes functionalities such as user registration, ticket assignment, and notifications. The backend is built with Node.js, Express, and MongoDB, and uses JWT for authentication and role-based access control.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Environment Variables](#environment-variables)
- [API Documentation](#api-documentation)
- [Routes](#routes)
- [License](#license)

## Features

- User registration and login
- JWT-based authentication
- Role-based access control (Admin, Support, Customer)
- CRUD operations for tickets
- Ticket assignment
- Email notifications
- Real-time notifications using WebSockets
- API documentation with Swagger

## Technologies Used

- Node.js
- Express
- MongoDB
- Mongoose
- JWT
- Nodemailer
- WebSockets
- Swagger

## Environment Variables

- `PORT`: The port on which the server will run (default: 5000)
- `MONGO_URI`: MongoDB connection string
- `JWT_SECRET`: Secret key for JWT

## API Documentation

API documentation is available at `/api-docs` when the server is running.

## Routes

### User Routes

- **Register a new user**: `POST /api/users/register`
  - URL: `/api/users/register`
  - Method: `POST`
  - Body:
    ```json
    {
      "name": "example_name",
      "email": "example_email",
      "password": "example_password"
    }
    ```

- **Login user**: `POST /api/users/login`
  - URL: `/api/users/login`
  - Method: `POST`
  - Body:
    ```json
    {
      "name": "example_name",
      "email": "example_email",
      "password": "example_password"
    }
    ```

- **Get all users (Admin only)**: `POST /api/users`
  - URL: `/api/users`
  - Method: `GET`
  - Headers:
    ```makefile
      x-auth-token: <your_jwt_token>
    ```

### Ticket Routes

- **Create a ticket**: `POST /api/tickets`
  - URL: `/api/tickets`
  - Method: `POST`
  - Body:
    ```json
         {
        "title": "Issue with login",
        "description": "Unable to login with correct credentials",
        "email": "user@example.com"
      }
    ```

  - **Get Tickets (Support and Admin)**: `POST /api/tickets`
  - URL: `/api/tickets`
  - Method: `GET`

- **Delete ticket (Admin only)**: `DELETE /api/tickets/:id`
  - URL: `/api/tickets/:id`
  - Method: `Delete`
 
**Assign a ticket (Support and admin)**: `PUT /api/tickets/assign/:id`
  - URL: `/api/tickets/assign/:id`
  - Method: `PUT`
  - Body:
    ```json
         {
        "assignedTo", "support@example.com"
      }
    ```
## License

This project is licensed under the Apache License.
