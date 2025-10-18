import mongoose from "mongoose"

const mongoUrl:string = process.env.MONGO_URL || "mongodb://mongodb:27017/aman";


export async function dbconnect() {
    try {
        await mongoose.connect(mongoUrl);
        await console.log("db connected")
    } catch (error) {
        console.error("can't connect the database because", error)
    }
}