const mongoose = require("mongoose")
require("dotenv").config()

mongoose.connect(process.env.MONGODB_URL.replace('localhost', '127.0.0.1'), {
    serverSelectionTimeoutMS: 5000, // Increase server selection timeout
    socketTimeoutMS: 45000, // Increase socket timeout
    connectTimeoutMS: 30000, // Increase connect timeout
  })
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((error) => {
      console.error("MongoDB connection error:", error);
    });