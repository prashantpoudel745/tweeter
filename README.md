# Tweeter README

## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [Tech Stack](#tech-stack)
4. [Installation](#installation)
5. [Usage](#usage)
6. [Contributing](#contributing)
7. [License](#license)

---

## Introduction
This project is a Twitter clone, a simplified social media platform for users to share updates, follow others, and engage in conversations. It mimics the core functionality of Twitter, providing a foundation for learning or expanding upon social media application development.

---

## Features
- User Authentication (Sign up, Login, Logout)
- Create, Edit, and Delete Tweets
- Like and Retweet Functionality
- Follow/Unfollow Users
- Responsive Design for Mobile and Desktop

---

## Tech Stack
### Frontend:
-  JavaScript (React), redux-toolkit
- Tailwind CSS

### Backend:
- Node.js with Express.js

### Database:
- MongoDB cloud(Atlas)

### Other:
- JWT for Authentication
- bcrypt for password hashing
---

## Installation
### Prerequisites:
- Node.js and npm installed
- MOngoDb configured
- React and Redux-toolkit

### Steps:
1. **Clone the Repository**
   ```bash
   git clone https://github.com/prashantpoudel745/tweeter
   cd tweeter
   ```

2. **Set Up Environment Variables**
   Create a `.env` file in the root directory and specify the following:
   ```env
   PORT = 5000
MONGO_URI = 
JWT_SECRET = 
NODE_ENV = "development"
CLOUDINARY_CLOUD_NAME = 
CLOUDINARY_API_KEY =
CLOUDINARY_API_SECRET =
CLOUDINARY_API_ENVIRONMENTVARIABLE =
OPENAI_API_KEY =
DOMAIN =
CLIENT_ID =
   ```

3. **Install Dependencies**
   ```bash
   npm install
   ```

4. **Start the Server**
   ```bash
   npm start
   ```

7. **Access the Application**
   Open [http://localhost:5000](http://localhost:5000) in your browser.

---

## Usage
1. **Sign Up:** Create a new account.
2. **Create Tweets:** Post new updates.
3. **Engage:** Like, retweet, or reply to other users' tweets.
4. **Follow/Unfollow:** Build your network by following other users.
5. **Real-time Updates:** Interact with live updates in your feed.

---

## Contributing
Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m 'Add feature-name'`).
4. Push to the branch (`git push origin feature-name`).
5. Create a Pull Request.

---

## License
This project is licensed under the MIT License.

