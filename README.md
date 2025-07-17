BookNest: Where Stories Nestle
BookNest is an online bookstore built with the MERN stack (MongoDB, Express.js, React, and Node.js). It offers a seamless platform for book lovers to discover, browse, and buy books. The project aims to provide an intuitive and user-friendly experience, much like Browse a physical bookstore.

Features

User Authentication: Secure user registration and login functionality using JSON Web Tokens (JWT). 



Dynamic Book Listings: Browse a comprehensive collection of books with detailed information. 


Advanced Book Selection: Filter books by genre, author, ratings, and popularity. 


Seamless Purchasing: Add books to your cart, adjust quantities, and complete secure transactions with real-time inventory updates. 


Order Management: Receive detailed order confirmations and review your order history. 


Responsive Design: Enjoy a consistent and engaging experience across all your devices, including desktops, tablets, and smartphones. 

Tech Stack

Frontend: React, Redux, React Router, and Tailwind CSS. 


Backend: Node.js and Express.js. 


Database: MongoDB. 

Getting Started
Follow these instructions to get a local copy of the project up and running.

Prerequisites
Make sure you have the following software installed on your system:

Node.js (v16 or higher) 

MongoDB (either a local instance or a MongoDB Atlas cluster) 

npm or yarn 

Git 

Installation
Clone the repository:

Bash

git clone https://github.com/upendra042/book.git
Navigate to the project directory:

Bash

cd book
Install client-side dependencies:

Bash

cd client && npm install
Install server-side dependencies:

Bash

cd ../server && npm install
Set up environment variables:

In the server directory, create a .env file with the following content:

MONGO_URI=mongodb://localhost:27017/booknest
JWT_SECRET=your_jwt_secret_key
PORT=5000
In the client directory, create a .env file with the following content:

REACT_APP_API_URL=http://localhost:5000/api
Start the MongoDB service if you are using a local instance:

Bash

mongod
Running the Application
Start the backend server:

Navigate to the server directory: cd server

Run the start command: npm start

The API will be accessible at 

http://localhost:5000/api. 

Start the frontend development server:

Navigate to the client directory: cd client

Run the start command: npm start

The application will be running at 

http://localhost:3000. 

API Endpoints
The base URL for the API is 

http://localhost:5000/api.  Here are the main endpoints:

Authentication

POST /auth/register

POST /auth/login

Books

GET /books

GET /books/:id

GET /books/category/:category

Orders

POST /orders

GET /orders/:userId

Inventory

PUT /inventory/:bookId

Folder Structure
The project is organized into two main directories: client and server.

Client (React Frontend)

client/
├── public/
│   ├── index.html
│   └── favicon.ico
├── src/
│   ├── components/
│   ├── pages/
│   ├── redux/
│   ├── assets/
│   ├── App.js
│   └── index.js
├── package.json
└── tailwind.config.js
Server (Node.js Backend)

server/
├── routes/
├── models/
├── controllers/
├── middleware/
├── config/
├── server.js
└── package.json
Screenshots
Here are some screenshots of the application:

Welcome Page

Login Page

Add New Book

Registration Page

Testing
The project employs a comprehensive testing strategy to ensure code quality and reliability.


Unit Testing: Jest is used for testing React components and Node.js controllers. 


Integration Testing: Supertest is used to test API endpoints. 


End-to-End Testing: Cypress is used for testing user flows. 

The goal is to achieve over 80% code coverage for critical components. 

Known Issues
Search functionality may experience lag with large datasets (>10,000 books). 

Mobile responsiveness can be improved for devices with a screen width less than 320px. 

Real-time inventory updates may be delayed during periods of high traffic. 

The cart's state may be lost if the browser's local storage is cleared. 

Future Enhancements

Personalized Recommendations: Implement a machine learning model for personalized book suggestions. 


Wishlist: Allow users to save books they want to purchase later. 


Payment Gateway Integration: Integrate with Stripe or PayPal for more payment options. 


Support for Digital Formats: Add support for eBooks and audiobooks, including previews. 


User Reviews: Enable users to rate and review books. 


Push Notifications: Send notifications for order updates and new book releases. 

Contributors
Gobburi Sreevidya - Project Manager 
G Upendra Chowdary - Frontend Developer 
Chimala Dinesh - Backend Developer 

