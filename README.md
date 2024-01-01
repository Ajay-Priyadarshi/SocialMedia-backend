**This is a simple SocialMedia application built with the MERN stack (MongoDB, Express.js, Node.js). It allows users to sign up, log in, create blogs, and perform basic CRUD operations on blogs.**

**Overview**

SocialMedia is a full-stack web application that provides a platform for users to share their thoughts and experiences through blog posts. The application leverages the MERN stack to deliver a seamless and responsive user experience.

**Technologies Used**

- **MongoDB:** A NoSQL database used to store user information, blog posts, and related data.
- **Express.js:** A backend web application framework for Node.js, facilitating the development of robust APIs.
- **Node.js:** A runtime environment for executing JavaScript code on the server side.

**MongoDB Server**

The application utilizes MongoDB as its database solution. MongoDB is a scalable and flexible NoSQL database that stores data in a JSON-like format. The server connection string is stored in the `.env` file.

**MongoDB Connection String**

Ensure that you have MongoDB installed locally or provide a connection string to a MongoDB Atlas cluster.

**Usage**

**API Endpoints**

- `/api/user`
  - `GET /` - Get all users
  - `POST /signup` - Create a new user (Sign up)
  - `POST /login` - User login

- `/api/blog`
  - `GET /` - Get all blogs
  - `POST /add` - Add a new blog
  - `PUT /update/:id` - Update a blog by ID
  - `GET /:id` - Get a blog by ID
  - `DELETE /delete/:id` - Delete a blog by ID
  - `GET /user/:id` - Get blogs by user ID

**MongoDB Connection**

Create a `.env` file in the root directory and add the following:

```env
MONGO_URI=your_mongodb_connection_string
