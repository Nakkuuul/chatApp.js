import mongoose from "mongoose";
import env from "./env.js";

export async function ConnectDB() {
  await mongoose.connect(env.MONGO_URI);
  console.log("Databse connected successfully");
}
