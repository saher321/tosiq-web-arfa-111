import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

export const connectDB = async () => {
  try {
    console.log("DB is connecting...")
    const hostName = await mongoose.connect(process.env.MONGODB_LIVE)
    if (hostName) {
      console.log("DB is connected:", hostName.connection.name)
    }
  } catch (error) {
    console.log("Error in connection:", error)
  }
}