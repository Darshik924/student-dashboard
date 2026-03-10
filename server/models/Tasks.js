import mongoose from "mongoose";

const schemaforEach = mongoose.Schema(
  {
    id: { type: Number, required: true },
    title: { type: String, required: true },
    desc: { type: String, default: "", trim: true },
    deadline: { type: Date, required: true },
  },
  { timestamps: true },
);

const taskSchema = mongoose.Schema({
  userName: { type: String, required: true, trim: true },
  tasks: [schemaforEach],
});

const taskModel = mongoose.model("Task", taskSchema);

const createTask = async ({ userName, task }) => {
  try {
    let userTasks = await taskModel.findOne({ userName });

    if (!userTasks) {
      userTasks = await taskModel.insertOne({
        userName,
        tasks: [task],
      });

      return userTasks;
    }

    userTasks.tasks.push(task);
    await userTasks.save();

    return userTasks;
  } catch (err) {
    console.log(err);
  }
};

const doesTaskExists = async ({ userName, task }) => {
  const userTasks = await taskModel.findOne({ userName });

  if (!userTasks) return false;

  return userTasks.tasks.find((t) => t.title === task.title);
};

export { createTask, doesTaskExists };

export default taskModel;
