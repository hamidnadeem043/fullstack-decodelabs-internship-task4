# Project 4 — Frontend Development
## DecodeLabs Industrial Training Kit | Batch 2026

---

## What This Project Builds

A complete **Frontend UI** connected with REST API
and MongoDB Database using pure HTML + CSS + JavaScript with:
- Professional Dark Theme UI
- Complete CRUD operations from browser
- Real-time data from backend API
- Form validation on frontend
- No frameworks — pure vanilla JavaScript

---

## Project Structure

task4/
├── index.html   ← Main page structure
├── style.css    ← Dark professional styling
├── app.js       ← API calls and logic
└── README.md    ← This file

---

## Prerequisites

⚠️ Project 3 server must be running first!
cd ../task3
node server.js
Then open index.html with Live Server

---

## How to Run

```bash
# Step 1: Start Project 3 backend server
cd task3
node server.js

# Step 2: Open task4/index.html
# Right click → Open with Live Server
# OR double click index.html
```

---

## Features

| Feature | Description |
|---------|-------------|
| View Users | Fetches all users from MongoDB |
| Add User | POST request to backend API |
| Delete User | DELETE request with confirmation |
| Stats Bar | Shows total users count |
| Validation | Frontend form validation |
| Error Handling | Shows user-friendly messages |

---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| HTML5 | Page structure |
| CSS3 | Dark professional styling |
| JavaScript | Logic and API calls |
| Fetch API | HTTP requests to backend |
| Async/Await | Asynchronous operations |

---

## API Integration

```javascript
// Connected to Project 3 backend
const API_URL = 'http://localhost:3000/api/users';

// GET  — fetch all users
// POST — create new user  
// DELETE — remove user
```

---

## Key Concepts Demonstrated

1. **HTML Structure** — Semantic page layout
2. **CSS Dark Theme** — Professional UI design
3. **Fetch API** — Browser-native HTTP requests
4. **Async/Await** — Handle asynchronous operations
5. **DOM Manipulation** — Dynamic content updates
6. **CORS** — Cross-origin resource sharing
7. **Form Validation** — Client-side input checking
8. **Error Handling** — User-friendly error messages

---

## Full Stack Flow

Browser (index.html)
↓ fetch() API call
Express Server (Task 3 - port 3000)
↓ Mongoose query
MongoDB Database
↓ data returned
Browser displays data ✅

---

## Project Journey

| Project | What | Status |
|---------|------|--------|
| Project 2 | Backend REST API | ✅ Done |
| Project 3 | Database Integration | ✅ Done |
| Project 4 | Frontend UI | ✅ Done |
| **Result** | **Full Stack App** | ✅ **Complete** |

---

## What to Extend Next

- Add Edit/Update user functionality
- Add search and filter
- Connect with React.js
- Deploy frontend to Netlify
- Deploy backend to Railway
