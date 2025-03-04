# User Authentication System

This is a **Node.js** and **Express.js**-based authentication system using **JWT-based authentication** and **MongoDB** as the database.

## Features
- **User Registration** (`POST /api/auth/register`)
- **User Login** (`POST /api/auth/login`)
- **User Profile** (Protected, `GET /api/user/profile`)

## Tech Stack
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Mongoose ODM)
- **Authentication:** JSON Web Tokens (JWT)
- **Security:** bcrypt.js for password hashing

---

## Installation

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/shashwat-builds/user-authentication-system.git
cd user-authentication-system
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Set Up Environment Variables
Create a `.env` file in the project root and add:
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 4️⃣ Start the Server
```sh
npm start
```
The server will run on **http://localhost:5000**

---

## API Endpoints

### **1️⃣ User Registration**
`POST /api/auth/register`
```json
{
  "name": "John Doe",
  "email": "johndoe@example.com",
  "password": "securepassword"
}
```
📌 **Response:**
```json
{
  "message": "User registered successfully",
  "user": { "_id": "userId", "name": "John Doe", "email": "johndoe@example.com" }
}
```

---

### **2️⃣ User Login**
`POST /api/auth/login`
```json
{
  "email": "johndoe@example.com",
  "password": "securepassword"
}
```
📌 **Response:**
```json
{
  "message": "Login successful",
  "token": "your_jwt_token"
}
```

---

### **3️⃣ Get User Profile (Protected Route)**
`GET /api/user/profile`

🔒 **Requires Authentication (JWT Token in Headers)**
```sh
curl --location --request GET 'http://localhost:5000/api/user/profile' \
--header 'Authorization: Bearer YOUR_ACCESS_TOKEN'
```
📌 **Response:**
```json
{
  "_id": "userId",
  "name": "John Doe",
  "email": "johndoe@example.com"
}
```

---

## Project Structure
```
user-auth-system/
│-- config/
│   ├── db.js          # MongoDB connection setup
│-- middleware/
│   ├── authMiddleware.js  # JWT authentication middleware
│-- models/
│   ├── User.js        # Mongoose User model
│-- routes/
│   ├── authRoutes.js  # Authentication routes
│   ├── userRoutes.js  # User-related routes (profile)
│-- server.js          # Main server file
│-- .env               # Environment variables
│-- package.json       # Dependencies and scripts
```

📌 **Contributions & Issues?** Feel free to open a pull request or an issue! 🚀

