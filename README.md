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

## Setup Instructions

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/ticket-backend-management.git
    cd ticket-backend-management
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Set up environment variables:
    Create a `.env` file in the root directory and add the following:
    ```
    PORT=5000
    MONGO_URI=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret
    ```

4. Start the server:
    ```bash
    npm start
    ```

## Environment Variables

- `PORT`: The port on which the server will run (default: 5000)
- `MONGO_URI`: MongoDB connection string
- `JWT_SECRET`: Secret key for JWT

## API Documentation

API documentation is available at `/api-docs` when the server is running.

## Routes

### User Routes

- **Register a new user**: `POST /api/users/register`
  - Request body:
    ```json
    {
      "name": "example_name",
      "email": "example_email",
      "password": "example_password"
    }
    ```

- **Login a user**: `POST /api/users/login`
  - Request body:
    ```json
    {
      "email": "example_email",
      "password": "example_password"
    }
    ```

- **Get all users** (Admin only): `GET /api/users`

### Ticket Routes

- **Create a ticket**: `POST /api/tickets`
  - Request body:
    ```json
    {
      "title": "example_title",
      "description": "example_description"
    }
    ```

- **Update a ticket**: `PUT /api/tickets/:id`
  - Request body:
    ```json
    {
      "title": "new_title",
      "description": "new_description"
    }
    ```

- **Delete a ticket**: `DELETE /api/tickets/:id`

- **Assign a ticket**: `PUT /api/tickets/assign/:id`
  - Request body:
    ```json
    {
      "assignedTo": "user_id"
    }
    ```

- **Get all tickets**: `GET /api/tickets`

## License

This project is licensed under the MIT License.
