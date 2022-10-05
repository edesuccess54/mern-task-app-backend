const dotenv = require('dotenv').config();
const express = require('express');
const connectDB = require('./config/connectDB');
const mongoose = require('mongoose');
const Task = require('./models/taskModel');
const cors = require('cors');
const taskRoutes = require("./routes/taskRoute");
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.use(cors({
    origin: ["http://localhost:3000", "https://mern-task-app-xqcu.onrender.com"]
}))
app.use("/api/tasks",taskRoutes);

// Routes 
 app.get("/", (req, res) => {
    res.send("Home page");
 });

const PORT = process.env.PORT || 5000

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server runing on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.log(error)
    })



