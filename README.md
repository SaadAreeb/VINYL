# 🎧 VINYL

> A full-stack music streaming platform with customizable audio modes.

VINYL is a full-stack music streaming application built with the MERN stack. It allows users to discover and listen to music while giving them the ability to experiment with different audio modes through the Web Audio API.

The main idea behind VINYL came from a simple problem:

**Ever wanted a slowed, bass-boosted, or otherwise modified version of a song without having to search for a separate upload?**

VINYL explores that idea by allowing users to modify the listening experience directly inside the application.

---

## 🚀 Live Demo

**Live Application:**  
https://vinyl-drab.vercel.app/

**Backend API:**  
https://vinyl-r263.onrender.com/

---

## ✨ Features

### 🎵 Music Streaming
- Stream uploaded songs directly from the application
- Play, pause and seek through songs
- Volume control
- Track progress and duration
- Automatic playback of the next song

### 🎚️ Audio Studio & Modes
VINYL includes a dedicated Studio experience where users can experiment with different audio presets.

Audio processing is handled using the **Web Audio API**, allowing effects to be applied to the currently playing song.

### 👤 Authentication
- User registration and login
- Artist registration and login
- JWT-based authentication
- HTTP-only authentication cookies
- Protected routes
- Role-based authorization for users and artists

### 🎤 Artist Features
Artists can:
- Upload songs
- Delete songs
- Create albums
- Delete albums
- Manage their uploaded music

### 💿 Albums
- Create albums
- View albums
- View individual album details
- Add songs to albums
- Delete albums

### 🔎 Search
- Search for available music
- Search through the music library

### 🖼️ Media Management
- Song and album artwork
- Image/media uploads
- ImageKit integration for media storage

### 📱 Responsive UI
Designed to provide a consistent experience across desktop and mobile devices.

---

# 🛠️ Tech Stack

## Frontend

- React.js
- JavaScript
- Tailwind CSS
- React Router
- Axios
- React Icons
- Web Audio API
- Vite

## Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- Cookie Parser
- Multer

## Media & Storage

- ImageKit

## Deployment

- Vercel — Frontend
- Render — Backend
- MongoDB Atlas — Database

---

# 🏗️ Project Architecture

```text
VINYL/
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── db/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   ├── app.js
│   │   └── server.js
│   │
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── package.json
│   └── vercel.json
│
└── README.md
