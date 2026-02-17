import express from "express";
import { connectDb } from "./Db/dbConnection.js";
import authRoutes from "./routes/authRoutes.js";

const expApp = express();
expApp.use(express.json());
const port = process.env.PORT || 7890;
const dbUrl =
  process.env.DB_URL || "mongodb://127.0.0.1:27017/student-dashboard";

connectDb(dbUrl);

expApp.use("/api/auth", authRoutes);


expApp.get("/", (req, res) => {
  res.status(201).json({ message: "OKAY" });
});

expApp.listen(port, () => console.log(`Server Listens to you on ${port}`));
