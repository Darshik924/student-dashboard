import mongoose from "mongoose";

const connectDb = async (Db_url) => {
  try {
    await mongoose.connect(Db_url);
    console.log("Connection Success");
  } catch (error) {
    console.log("ERROR occured while connecting DBS");
  }
};

export { connectDb };