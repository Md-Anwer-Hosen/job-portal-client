# Job Portal

A full-stack Job Portal web application where recruiters can post jobs and candidates can browse and apply. Includes authentication, job management, and application tracking.

## 🔗 Live Links

- Client: [Live Site] https://job-portal-client-lac-ten.vercel.app

## ✨ Features

- User authentication (Email/Password, Google login) using Firebase
- Job listing with details page
- Recruiter can create, update, and delete jobs
- Candidates can apply for jobs
- Application management (view applied jobs / applicants)
- Protected routes (only logged-in users can access private pages)
- Responsive UI (Tailwind CSS)

## 🛠 Tech Stack

**Client**

- React
- Tailwind CSS
- React Router
- TanStack Query (optional / if used)
- Firebase Authentication
- React Icons

**Server**

- Node.js
- Express.js
- MongoDB (Atlas)
- dotenv
- cors

## 📦 Dependencies

Make sure you have installed:

- Node.js (LTS recommended)
- MongoDB Atlas (or local MongoDB)

## ⚙️ Environment Variables

### Client (`.env`)

Create a `.env` file in the client root and add:

```env
VITE_apiKey=your_firebase_apiKey
VITE_authDomain=your_firebase_authDomain
VITE_projectId=your_firebase_projectId
VITE_storageBucket=your_firebase_storageBucket
VITE_messagingSenderId=your_firebase_messagingSenderId
VITE_appId=your_firebase_appId

VITE_API_URL=https://your-server-url.com
```
