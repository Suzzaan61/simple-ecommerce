import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import cors from "cors";
dotenv.config();

const app = express();
const port = process.env.PORT;
// const DBURI = process.env.MONGODB_URI;
const DBURI = 'mongodb://localhost:27017/simple-ecommerce';
console.log(DBURI)

app.use(express.json());

mongoose.connect(DBURI).then((success)=>{
    console.log("MongoDB Connected");
    if (success){
        app.listen(port,()=>{
            console.log(`Server is started at ${port}`);
        })
    }
})
app.use(cors());
app.use("/api/auth", userRoutes);

