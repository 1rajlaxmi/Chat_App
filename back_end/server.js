import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import cors from "cors"; // Import the cors package

import authRoutes from "./Routes/authRoutes.js"
import msgRoutes from "./Routes/msgRoutes.js"
import userRoutes from "./routes/user_routes.js";
import { app,server } from "./socket/socket.js";

import connectMongodb from "./db/connect_db.js";




const PORT = process.env.PORT || 5000
dotenv.config();

app.use(cors({
    origin: 'https://chitchatraj.vercel.app', // Replace with frontend's origin
    credentials: true, // Allow cookies to be sent with requests
}));

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes)
app.use("/api/msg", msgRoutes)
app.use("/api/users", userRoutes);

app.get("/",(req,res)=>{
    res.send("Everything is fine");
})

server.listen(PORT, () => {
	connectMongodb();
	console.log(`Server Running on port ${PORT}`);
});