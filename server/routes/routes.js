import express from "express";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.get("/profile", protect, (req, res) => {
  res.status(200).json({
    message: `Profile for user ${req.user.name} has been accessed`,
    user: req.user,
  });
});

export default router;
