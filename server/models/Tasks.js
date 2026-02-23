import mongoose from "mongoose";

const taskSchema = mongoose.Schema({
  userId: { type: Number, required: true },
  tasks: [
    {
      id: { type: Number, required: true },
      title: { type: String, required: true, unique: true },
      desc: { type: String, default: "", trim: true },
    },
  ],
});

const taskModel = mongoose.model("Task", taskSchema);

