const mongoose = require("mongoose");
require("dotenv").config();

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("MongoDB connected");
    } catch (err) {
        console.error("Database connection error:", err);
    }
}

module.exports = connectDB;