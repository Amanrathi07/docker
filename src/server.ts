import mongoose from "mongoose"

export async function dbconnect() {
    try {
        await mongoose.connect("mongodb://mongodb:27017/aman");
        await console.log("db connected")
    } catch (error) {
        console.error("can't connect the database because", error)
    }
}