# CodeCore Task Manager

A full-stack Task Manager application built as part of the CodeCore Full-Stack Developer technical assessment.

The application allows users to create, search, edit, update and delete tasks while persisting data in a PostgreSQL database using Prisma ORM.

---

## Live Demo

**Live Application**

https://codecore-task-manager.onrender.com

---

## GitHub Repository

https://github.com/Ettienne63/codecore-task-manager

---

# Features

- ✅ Create new tasks
- ✅ View all tasks
- ✅ Edit existing tasks
- ✅ Delete tasks (with confirmation)
- ✅ Toggle task status (Pending / Done)
- ✅ Search tasks by title
- ✅ Persistent PostgreSQL database
- ✅ Responsive Bootstrap interface

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

# Running the Project Locally

## 1. Clone the repository

```bash
git clone https://github.com/Ettienne63/codecore-task-manager.git
```

Move into the project directory.

```bash
cd codecore-task-manager
```

---

## 2. Install dependencies

```bash
npm install
```

---

## 3. Configure Environment Variables

Create a `.env` file in the project root.

Example:

```env
DATABASE_URL="your_postgresql_connection_string"
PORT=3000
```

---

## 4. Apply the database schema

```bash
npm run setup
```

---

## 5. Start the application

Development

```bash
npm run dev
```

Production

```bash
npm start
```

The application will be available at:

```
http://localhost:3000
```

---

# Database

The application uses PostgreSQL together with Prisma ORM.

Task Model

| Field | Type |
|-------|------|
| id | Integer |
| title | String |
| description | String (Optional) |
| status | PENDING / DONE |
| dueDate | Date |
| createdAt | DateTime |
| updatedAt | DateTime |

---

# Application Workflow

Create Task

```
User submits form
        ↓
Express Route
        ↓
Prisma ORM
        ↓
PostgreSQL Database
        ↓
Redirect to homepage
        ↓
Updated task list displayed
```

The same flow is used for editing, deleting and updating task status.

---



# Trade-offs

Given the scope and time available for the assessment, I prioritised implementing the required CRUD functionality before introducing additional features.

The application currently keeps all routes inside `server.js`. For a larger production application I would separate responsibilities into:

- Routes
- Controllers
- Services

This would improve maintainability as the project grows.

---

# Future Improvements

With additional time I would like to add:

- Server-side validation with user-friendly error messages
- Task sorting
- Filtering by task status
- User authentication

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

Examples include:

- Initial project setup
- Task creation
- Task listing
- Delete functionality
- Status toggle
- Edit functionality
- Search feature
- Deployment preparation

---

# Author

**Ettienne Janse van Vuuren**

Bachelor of Information Technology Graduate

GitHub:
https://github.com/Ettienne63
