import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser"
import userRoutes from "./routes/user.route.js";
import cors from "cors";
dotenv.config();

const app = express();
const port = process.env.PORT;

// const DBURI = process.env.MONGODB_URI;
const DBURI = 'mongodb://localhost:27017/simple-ecommerce';

app.use(express.json());
app.use(cookieParser());

mongoose.connect(DBURI).then((success)=>{
    console.log("MongoDB Connected");
    if (success){
        app.listen(port,()=>{
            console.log(`Server is started at ${port}`);
        })
    }
})
const corsOptions = {
    origin: true, //included origin as true
    credentials: true, //included credentials as true
};

app.use(cors(corsOptions));

app.use("/api/auth", userRoutes);
