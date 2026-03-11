import { doesUserExist, createStdDoc, userModel } from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const registerUser = async (req, res, next) => {
  const { name, email, password } = req.body;
  /* Extract the Input  */

  if (!name || !email || !password) {
    return res.status(400).json({
      message: "All fields are Required!",
    });
  }
  /* Check for the valid inputs */

  if (await doesUserExist({ name, email, password })) {
    res.status(400).json({ message: "User already exists" });
  }
  /* Check if the user already exists */

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  /* Hash the password */

  const user = await createStdDoc({ name, email, hashedPassword });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  res.status(201).json({
    message: "Registration Success",
    token,
    user,
  });
  next();
};

const loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  /* Check if they are not empty  */
  if (!email || !password) {
    return res.status(400).json({ message: "ALL NOT GIVEN" });
  }

  const user = await userModel.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: "Inavlid Email or Password" });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  /* bcrypt does this `bcrypt.compare(plainPassword, hashedPasswordFromDB)` */

  if (!isMatch) {
    return res.status(400).json({ message: "Invalid email or password" });
  }

  /* Now everything is correct */
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });

  // 5️⃣ Send token to client
  res.status(200).json({
    message: "Login Successful",
    token,
    user,
  });
};

export { registerUser, loginUser };

/*
 JWT COURSE 

 🎫 JWT = JSON Web Token

JWT is just a long secret string that proves:
“This user is logged in.”
It looks something like: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...

🧩 What’s Inside a JWT?

A JWT has 3 parts: HEADER.PAYLOAD.SIGNATURE

1️⃣ Header

Just says:
  What algorithm is used
  Type = JWT

Not important for you right no

2️⃣ Payload (Important Part)

This contains data like:
  {
    "id": "123456",
    "email": "test@test.com"
  }

⚠️ Important:
Payload is NOT encrypted.
It is just encoded.
Anyone can decode it.

So never store password inside JWT.


3️⃣ Signature (VERY IMPORTANT)

This is the magic part.
Server signs the token using a secret key
The secret key is a private password that ONLY your server knows.
You never send this to the frontend.
You never show this publicly.
It stays in .env.

Like: SECRET_KEY = "mysupersecret"

If someone edits the token → signature breaks.
So server knows:
This token was modified → reject it.

🔐 So What Actually Happens?
During Login:

  User gives email/password
  You verify password
  You generate token:

jwt.sign(payload, secret, options)

  Send token to user

On Future Requests:
User sends token in headers: Authorization: Bearer TOKEN_HERE

Server:

  Verifies token using same secret

  If valid → allow access

  If invalid → reject


JWT is just a way to:

  Prove identity

  Stay logged in

  Protect routes

Google login may use JWT internally, but it’s different conceptually.


WHY THE SECRET KEY?

If there was no secret key, someone could:
  Take your token

  Change the user ID inside it

  Access another user’s account
That would be a disaster 🚨

🎨 Let’s Use a Real-World Analogy

Imagine your club membership card.

When someone logs in:

You (club owner) create a card and stamp it with a special invisible ink stamp.
That invisible stamp = signature created using secret key
Only you know how to create that stamp.

If someone:

Edits the name
Changes membership level
Tries to fake a card
The invisible stamp won’t match anymore.
And you’ll immediately know it’s fake.


Remember:
Frontend is NOT secure.

Users control:
  Browser
  DevTools
  Network requests

They can:
  Edit headers
  Edit tokens
  Send fake tokens

So every time they send a token, the server must check:
  Is this token real?
  Was it created by me?
  Has it expired?
  Was it tampered with?

That is what jwt.verify() does.

*/
