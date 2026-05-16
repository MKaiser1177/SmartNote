# MERN Stack Notes App (Frontend)

A React + Vite frontend for a full-stack notes application built with MongoDB, Express, React, and Node.js.

## About

This frontend provides a modern note-taking UI with:

- User authentication via JWT
- Protected routes for authenticated users
- Create, read, update, and delete notes
- Responsive design using Tailwind CSS
- Rate-limited API handling for backend request protection

## Features

- Sign up and log in
- Secure note creation and editing
- Note list and individual note detail views
- Client-side route protection
- API error handling and user feedback

## Tech Stack

- React
- Vite
- Tailwind CSS
- Axios
- React Router
- Context API for auth state

## Getting Started

### Install dependencies

```bash
cd frontend
npm install
```

### Run the app

```bash
npm run dev
```

### Backend setup

The frontend expects a running backend in the `backend` folder. Start it separately with:

```bash
cd ../backend
npm install
npm run dev
```

## Folder Structure

- `src/App.jsx` — main app shell and route configuration
- `src/main.jsx` — React entry point
- `src/components` — reusable UI components
- `src/context/AuthContext.jsx` — authentication state provider
- `src/lib/axios.js` — configured Axios API client
- `src/Pages` — page-level views for login, register, notes, and note details

## Notes

Make sure the backend environment variables are configured before logging in. The frontend should be pointed to the backend API URL in `src/lib/axios.js` if needed.

---

Enjoy building with the MERN Stack!
