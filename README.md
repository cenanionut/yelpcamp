# YelpCamp

YelpCamp is a full-stack web application developed as part of "The Web Developer Bootcamp 2024" course on Udemy. It serves as a platform where users can search for, create, and review camping locations.

## Table of Contents

- [Features](#features)
- [Architecture](#architecture)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [API Endpoints](#api-endpoints)
- [Middleware](#middleware)
- [Error Handling](#error-handling)
- [Security Considerations](#security-considerations)
- [Contributing](#contributing)
- [License](#license)

## Features

- **User Authentication**: Secure sign-up and login functionality using Passport.js with local strategy.
- **Campground Management**: Full CRUD (Create, Read, Update, Delete) operations for campgrounds.
- **Image Uploads**: Integration with Cloudinary for image storage and management.
- **Dynamic Views**: Utilization of EJS templating engine for dynamic content rendering.
- **Data Validation**: Server-side validation using Joi to ensure data integrity.
- **Responsive Design**: Front-end styled with CSS to ensure responsiveness across devices.

## Architecture

The application follows a Model-View-Controller (MVC) architecture:

- **Models**: Define the data structure using Mongoose schemas.
- **Views**: EJS templates render dynamic content to the client.
- **Controllers**: Handle the business logic and interact with models to process requests.

## Installation

To set up the project locally, follow these steps:

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/cenanionut/yelpcamp.git
   cd yelpcamp
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Configure Environment Variables**:

   Create a `.env` file in the root directory based on the `.env.example` provided. Ensure all necessary environment variables are set.

4. **Start the Application**:

   ```bash
   npm start
   ```

   The application will run on `http://localhost:3000` by default.

## Configuration

The application requires the following environment variables:

- `DATABASE_URL`: MongoDB connection string.
- `CLOUDINARY_CLOUD_NAME`: Cloudinary cloud name.
- `CLOUDINARY_KEY`: Cloudinary API key.
- `CLOUDINARY_SECRET`: Cloudinary API secret.
- `SESSION_SECRET`: Secret key for session management.

Ensure these variables are set in your `.env` file.

## Usage

Once the application is running:

- Navigate to `http://localhost:3000` to access the homepage.
- Register a new account or log in with existing credentials.
- Create, view, edit, or delete campgrounds.
- Upload images for campgrounds via Cloudinary integration.

## Technologies Used

- **Backend**:
  - [Node.js](https://nodejs.org/): JavaScript runtime environment.
  - [Express.js](https://expressjs.com/): Web framework for Node.js.
  - [MongoDB](https://www.mongodb.com/): NoSQL database.
  - [Mongoose](https://mongoosejs.com/): ODM for MongoDB.
  - [Passport.js](http://www.passportjs.org/): Authentication middleware.

- **Frontend**:
  - [EJS](https://ejs.co/): Templating engine.
  - [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS): Styling.

- **Cloud Services**:
  - [Cloudinary](https://cloudinary.com/): Image storage and management.

## Project Structure

```
yelpcamp/
├── cloudinary/
├── controllers/
│   ├── campgrounds.js
│   ├── reviews.js
│   └── users.js
├── models/
│   ├── campground.js
│   ├── review.js
│   └── user.js
├── public/
│   ├── javascripts/
│   └── stylesheets/
├── routes/
│   ├── campgrounds.js
│   ├── reviews.js
│   └── users.js
├── seeds/
├── uploads/
├── utils/
├── views/
│   ├── campgrounds/
│   ├── partials/
│   ├── reviews/
│   └── users/
├── .gitignore
├── README.md
├── app.js
├── middleware.js
├── package-lock.json
├── package.json
└── schemas.js
```

- `cloudinary/`: Configuration for Cloudinary integration.
- `controllers/`: Route handlers for different resources.
- `models/`: Mongoose schemas and models.
- `public/`: Static assets like CSS and JavaScript files.
- `routes/`: Application routes.
- `seeds/`: Seed data for initial database population.
- `uploads/`: Temporary storage for uploaded images.
- `utils/`: Utility functions.
- `views/`: EJS templates for rendering UI.

## API Endpoints

The application defines the following main routes:

- **Campgrounds**:
  - `GET /campgrounds`: List all campgrounds.
  - `POST /campgrounds`: Create a new campground.
  - `GET /campgrounds/:id`: View a specific campground.
  - `PUT /campgrounds/:id`: Update a campground.
  - `DELETE /campgrounds/:id`: Delete a campground.

- **Reviews**:
  - `POST /campgrounds/:id/reviews`: Add a review to a campground.
  - `DELETE /campgrounds/:id/reviews/:reviewId`: Delete a review.

- **User Authentication**:
  - `GET /register`: Registration form.
  - `POST /register`: Register a new user.
  - `GET /login`: Login form.
  - `POST /login`: Authenticate user.
  - `GET /logout`: Log out user.

## Middleware

The application utilizes various middleware functions:

- **Authentication Middleware**: Ensures routes are accessible only to authenticated users.
- **Error Handling Middleware**: Catches and processes errors, sending appropriate responses.
- **Validation Middleware**: Validates incoming data using Joi schemas.

## Error Handling

Centralized error handling is implemented to manage application errors gracefully. Custom error classes are defined, and a global error handler sends user-friendly messages to the client.

## Security Considerations

- **Input Sanitization**: User inputs are sanitized to prevent injection attacks.
- **Authentication**: Passwords are hashed using bcrypt before storage.
- **Session Management**: Secure cookies and session handling to prevent hijacking.
- **Environment Variables**: Sensitive information is stored in environment variables.

## Contributing

Contributions are welcome! Please fork the repository and submit pull requests. Ensure adherence to the project's coding standards and include relevant tests for new features or bug fixes.

## License

This project is licensed under the MIT License.

