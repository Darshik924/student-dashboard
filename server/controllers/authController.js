import { doesUserExist, createStdDoc } from "../models/User.js";
import bcrypt from "bcryptjs";

const registerUser = async (req, res, next) => {
  const { name, email, password } = req.body;
  /* Extract the Input  */

  if (!name || !email || !password) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }
  /* Check for the valid inputs */

  if (doesUserExist({ name, email, password })) {
    res.status(400).json({ message: "User already exists" });
  }
  /* Check if the user already exists */

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  /* Hash the password */

  const user = createStdDoc({ name, email, hashedPassword });

  res.status(201).json({ _id: user._id, name: user.name, email: user.email });
  next();
};

const loginUser = (req, res, next) => {
  res.json({ login: true });
  next();
};

export { registerUser, loginUser };
