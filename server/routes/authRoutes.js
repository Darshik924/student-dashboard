import express from "express";
import { registerUser, loginUser } from "../controllers/authController.js";

const stdRoutes = express.Router();
stdRoutes.post("/register",registerUser);
stdRoutes.post("/login", loginUser);


export default stdRoutes;
