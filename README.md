# CodeCore Task Manager

A full-stack Task Manager application built as part of the CodeCore Full-Stack Developer technical assessment.

The application allows users to create, search, edit, update and delete tasks while persisting data in a PostgreSQL database using Prisma ORM.

---

# 🚀 Live Demo

**Application**

https://codecore-task-manager.onrender.com

---

# 📂 GitHub Repository

https://github.com/Ettienne63/codecore-task-manager

---

# Features

- Create new tasks
- View all tasks
- Edit existing tasks
- Delete tasks (with confirmation)
- Toggle task status (Pending / Done)
- Search tasks by title
- PostgreSQL database persistence
- Responsive Bootstrap interface

---

# Technologies Used

## Backend

- Node.js
- Express.js
- Prisma ORM
- PostgreSQL (Neon)

## Frontend

- EJS
- Bootstrap 5

## Deployment

- Render
- Neon PostgreSQL

---

# Running Locally

## Prerequisites

Before running the project, you'll need:

- Node.js
- npm
- Access to a PostgreSQL database (local or hosted such as Neon)

---

## Clone the repository

```bash
git clone https://github.com/Ettienne63/codecore-task-manager.git
cd codecore-task-manager
```

---

## Create a `.env` file

Create a `.env` file in the project root.

Example:

```env
DATABASE_URL="your_postgresql_connection_string"
PORT=3000
```

---

## Install dependencies

```bash
npm install
```

---

## Generate Prisma Client and apply the database schema

```bash
npm run setup
```

---

## Start the application

Development:

```bash
npm run dev
```

Production:

```bash
npm start
```

Open your browser and navigate to:

```
http://localhost:3000
```

---

# Database

The application uses PostgreSQL together with Prisma ORM.

## Task Model

| Field | Type |
|------|------|
| id | Integer |
| title | String |
| description | Optional String |
| status | PENDING / DONE |
| dueDate | Date |
| createdAt | DateTime |
| updatedAt | DateTime |

---

# Application Workflow

```
User submits task
        │
        ▼
Express Route
        │
        ▼
Prisma ORM
        │
        ▼
PostgreSQL Database
        │
        ▼
Redirect back to homepage
        │
        ▼
Updated task list displayed
```

The same workflow is used for editing, deleting and updating task status.

---

# Trade-offs

Given the scope and time available for the assessment, I prioritised implementing the required CRUD functionality before introducing additional features.

The application currently keeps all routes inside `server.js`.

For a larger production application I would separate responsibilities into:

- Routes
- Controllers
- Services

This would improve maintainability as the project grows.

---

# Future Improvements

With additional time I would add:

- Server-side validation
- Better error handling
- Task sorting
- Filtering by task status

---

# Project Structure

```
codecore-task-manager
│
├── lib/
│   └── prisma.js
│
├── prisma/
│   └── schema.prisma
│
├── public/
│
├── views/
│   └── tasks/
│       └── index.ejs
│
├── server.js
├── package.json
└── README.md
```

---

# Git History

The project was developed incrementally using multiple commits to demonstrate the development process.

---

# Author

**Ettienne Janse van Vuuren**

# Thank You

Thank you for taking the time to review my submission.

I enjoyed building this project and appreciate the opportunity to demonstrate my skills. I look forward to discussing my implementation and design decisions.
