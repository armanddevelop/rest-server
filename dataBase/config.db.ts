import mongoose from "mongoose";

export const dBConnection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION);
    console.log("DB_CONNECTION: OK");
  } catch (error) {
    console.error("[dbConnectionError]: ", error);
    throw new Error("Connection fail :(");
  }
};
