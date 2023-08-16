import { Router } from "express";

import todoController from "../controller/todo.js"

const todoRouter = new Router();

//GET Requests
todoRouter.get("/", todoController.getAllTasks);
todoRouter.get("/:id", todoController.getTaskById);
todoRouter.get("/delete-todo/:id", todoController.deleteTask);

//POST Requests
todoRouter.post("/", todoController.createTask);
todoRouter.post("/:id", todoController.updateTask);

export default todoRouter;