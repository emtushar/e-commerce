import mongoose from "mongoose";
import { dbName } from "../constants.js";

const connectDb = async () => {
  try {
    const mongoInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${dbName}`
    );
    console.log(`Mongodb connected at : ${mongoInstance.connection.host}`);
  } catch (error) {
    console.log(error.msg || "Failed to connect to mongodb");
    process.exit(1);
  }
};

export default connectDb;
