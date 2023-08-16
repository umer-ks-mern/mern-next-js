import express from "express";

import todoRouter from "./router/todo.js";
import connectDB from "./config/db.js";

const app=express();
//these three lines are for DB connection
connectDB();
app.use(express.urlencoded({extended: true}));
app.use(express.json()); 

//this is for setting default route
app.use('/todos',todoRouter);

app.use((req, res) => {
    res.status(404).json({ message: 'Route not found' });
});

const PORT = 3300;

app.listen(PORT, () => {
    console.log("Todo App is Running on Port 3300");
});