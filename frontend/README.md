# SmartNote

SmartNote is a polished note-taking app built with the MERN stack. This frontend is powered by React, Vite, Tailwind CSS, and Axios, and connects to a Node.js / Express backend for secure note management.

## 🚀 What SmartNote Offers

- User authentication and registration
- Secure note creation, editing, and deletion
- Protected routes for logged-in users
- Responsive, mobile-friendly design
- Seamless API integration with backend rate limiting support
- Rich UI built with Tailwind CSS and reusable React components

## 🧩 Tech Stack

- React
- Vite
- Tailwind CSS
- Axios
- React Router
- Context API
- DaisyUI

## 📁 Frontend Structure

- `src/main.jsx` — React app entry point
- `src/App.jsx` — route and layout configuration
- `src/context/AuthContext.jsx` — authentication state and provider
- `src/lib/axios.js` — API client configuration
- `src/components` — shared UI components
- `src/Pages` — app pages for home, login, register, create note, and note details

## ⚙️ Setup Instructions

### 1. Install frontend dependencies

```bash
cd frontend
npm install
```

### 2. Install backend dependencies

```bash
cd ../backend
npm install
```

### 3. Start the backend server

```bash
npm run dev
```

### 4. Start the frontend

```bash
cd ../frontend
npm run dev
```

Then open the local URL shown by Vite in your browser.

## ✅ Usage

- Register a new account
- Log in with your credentials
- Create and save notes
- View individual note details
- Edit or delete notes securely

## 🔧 Configuration

If the backend API URL changes, update the base URL in `frontend/src/lib/axios.js`.

## 💡 Tips

- Keep the backend running while using the frontend
- Use strong credentials for authentication testing
- Refresh the page only after the backend is available

## 📌 Notes

This repository includes both frontend and backend code. Start the backend first, then launch the frontend for the full SmartNote experience.
