import mongoose from "mongoose";

let isConnected = false; // track the connection

export const connectToDB = async () => {
  mongoose.set("strictQuery", true); //if we don't do it will get warning
  if (isConnected) {
    console.log("MongoDB is connected");
    return; //stop running
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "share_prompt",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log("Mongodb connected");
  } catch (err) {
    console.log(err);
  }
};
