import express from "express";
import { connectDb } from "./Db/dbConnection.js";
import authRoutes from "./routes/authRoutes.js";
import dotenv from "dotenv";
import router from "./routes/routes.js";
import { taskRouter } from "./routes/taskRoutes.js";
import cors from "cors";
dotenv.config();

const expApp = express();
expApp.use(express.json());
expApp.use(
  cors({
    origin: "http://localhost:5173",
    methods: ["GET", "POST", "PUT", "DELETE"],
  }),
);
const port = process.env.PORT;
const dbUrl = process.env.DB_URL;

connectDb(dbUrl);

expApp.use("/api/auth", authRoutes);
expApp.use("/", router);
expApp.use("/tasks", taskRouter);

expApp.get("/", (req, res) => {
  res.status(201).json({ message: "OKAY" });
});

expApp.listen(port, () => console.log(`Server Listens to you on ${port}`));
