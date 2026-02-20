import jwt from "jsonwebtoken";
import userModel from "../models/User.js";

const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      /* Extract token */
      token = req.headers.authorization.split(" ")[1]; 
      /* Token is something like: Bearer oebnfjiwbfowef */

      /* Verify Token  */
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      /* Attach user to request */
      req.user = await userModel.findById(decoded.id).select("-password");

      next();
    } catch (err) {
      return res.status(401).json({ message: "Not authorized" });
    }
  }

  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }
};

export { protect };
