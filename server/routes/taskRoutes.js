import express from "express";
import { createTaskControl } from "../controllers/taskControllers.js";

const taskRouter = express.Router();

taskRouter.post("/create", createTaskControl);

export { taskRouter };
