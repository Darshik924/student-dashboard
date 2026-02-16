import mongoose from "mongoose";

const badgesSchema = mongoose.Schema({
  firstTask: { type: Boolean, default: false },
  isLevel10: { type: Boolean, required: true },
  studyMonk: { type: Boolean, required: true },
  /* 14 days streak */
  disciplineKing: { type: Boolean, required: true },
  /* 30 days streak */
  earlyBird: { type: Boolean, required: true },
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

export default userModel;
