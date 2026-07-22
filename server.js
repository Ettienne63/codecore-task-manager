import "dotenv/config";
import express from "express";
import prisma from "./lib/prisma.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

app.use(express.urlencoded({ extended: false }));

app.get("/", async (req, res) => {
    const search = req.query.search || "";

    const tasks = await prisma.task.findMany({
        where: {
            title: {
                contains: search,
                mode: "insensitive"
            }
        }
    });

    res.render("tasks/index", {
        pageTitle: "Tasks",
        tasks,
        search
    });
});

app.post("/tasks", async (req, res) => {
    await prisma.task.create({
        data: {
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            dueDate: req.body.dueDate
                ? new Date(req.body.dueDate)
                : null
        }
    });

    res.redirect("/");
});

app.post("/tasks/:id/delete", async (req, res) => {
    const taskId = Number(req.params.id);

    await prisma.task.delete({
        where: {
            id: taskId
        }
    });

    res.redirect("/");
});

app.post("/tasks/:id/toggle", async (req, res) => {
    const taskId = Number(req.params.id);

    const task = await prisma.task.findUnique({
        where: {
            id: taskId
        }
    });

    const newStatus =
        task.status === "PENDING"
            ? "DONE"
            : "PENDING";

    await prisma.task.update({
        where: {
            id: taskId
        },
        data: {
            status: newStatus
        }
    });

    res.redirect("/");
});

app.post("/tasks/:id/update", async (req, res) => {
    const taskId = Number(req.params.id);

    await prisma.task.update({
        where: {
            id: taskId
        },
        data: {
            title: req.body.title,
            description: req.body.description || null,
            status: req.body.status,
            dueDate: req.body.dueDate
                ? new Date(req.body.dueDate)
                : null
        }
    });

    res.redirect("/");
});
const port = process.env.PORT || 3000;

app.listen(port,()=>{
    console.log(`Server running at http://localhost:${port}`)
})