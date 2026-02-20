import mongoose from "mongoose";

const badgesSchema = mongoose.Schema({
  firstTask: { type: Boolean, default: false },
  isLevel10: { type: Boolean, default: false },
  studyMonk: { type: Boolean, default: false },
  /* 14 days streak */
  disciplineKing: { type: Boolean, default: false },
  /* 30 days streak */
  earlyBird: { type: Boolean, default: false },
  /* Complete 5 tasks before 10 AM */
});

const userSchema = mongoose.Schema(
  {
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, trim: true, unique: true },
    /* Unique emails we should have */
    password: { type: String, required: true },
    /* Password must always be required */
    level: { type: Number, default: 1 },
    streak: { type: Number, default: 0 },
    badges: badgesSchema,
    /* We will have a big obj as badges */
    xp: { type: Number, default: 0 },
  },
  { timestamps: true },
);

const userModel = mongoose.model("User", userSchema);

const doesUserExist = async ({ name, email, hashedPassword }) => {
  const userExists = await userModel.findOne({ email: email });
  if (userExists) {
    return true;
  } else {
    return false;
  }
};

const createStdDoc = async ({ name, email, hashedPassword }) => {
  try {
    const userSave = new userModel({
      name: name,
      email: email,
      password: hashedPassword,
    });
    const result = await userSave.save();
    return result;
  } catch (error) {
    console.log(error);
  }
};

export { createStdDoc, doesUserExist, userModel };
export default userModel;
