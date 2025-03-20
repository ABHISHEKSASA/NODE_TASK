// server.js
const express = require('express');
const mongoose = require('mongoose');
const productRoute = require('./Routes/emp.routers.js');
const dotenv= require('dotenv');
dotenv.config();

const app = express();
app.use(express.json());

// Routes
app.use('/api/products', productRoute);

// MongoDB Connection
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_CON_STR);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.error("MongoDB connection error:", error);
        setTimeout(connectDB, 3000); // Retry after 5 seconds
    }
};
connectDB();

// Start the Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
