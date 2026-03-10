import taskModel, { doesTaskExists } from "../models/Tasks.js";
import { createTask } from "../models/Tasks.js";

const createTaskControl = async (req, res, next) => {
  const { userName, task } = req.body;

  if (!userName || !task) {
    res.status(400).json({ message: "Not present" });
  }

  if (await doesTaskExists({ userName, task })) {
    res.status(400).json({ message: "task exists" });
  }

  const result = await createTask({ userName, task });

  res.status(201).json(result);
  next();
};

export { createTaskControl };
