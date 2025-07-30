# Real Time Simple MERN Chat App

Blazing fast, full stack realtime chat application built using the MERN stack along with 3rd party packages like bcrypt, mongoose, jwt, cloudinary, socketio, dotenv, cookie-parser, nodemon.

## 🚀 Tech Stack

**Frontend**:

- React (Vite/CRA)
- Tailwind CSS / Material UI
- Axios
- React Router
- Socket.io-client

**Backend**:

- Node.js
- Express
- MongoDB (Mongoose)
- Socket.io
- JSON Web Tokens (JWT)
- Bcrypt

## Folder Structure

```markdown
├── back-end/ # Express API server (port 5000)
│ ├── src/
│ │ ├── controllers/
│ │ ├── models/
│ │ ├── routes/
│ │ └── utils/
└── front-end/ # React app (port 5173)
```

## 🔑 Features

- 🔐 Authentication (Register/Login) with JWT
- 💬 Real-time 1-on-1 messaging via Socket.io
- 📜 Chat history persisted in MongoDB
- ✅ Online user indicator
- 🖼️ Profile avatars (optional)
- 📱 Responsive UI (mobile & desktop)
- 🧼 Clean, maintainable code structure

## ⚙️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/my-chat-app.git
cd my-chat-app
```

### 2. Setup Backend

```bash
cd back-end
npm install
# Create .env and add your MongoDB URI and JWT secret
npm run dev
```

### 3. Setup Frontend

```bash
cd ../front-end
npm install
npm run dev
```

The frontend will run on http://localhost:5173 (Vite) and backend on http://localhost:5000.

## 🔐 Environment Variables

In /back-end/.env:

```bash
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```
