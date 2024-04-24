/* eslint-disable no-undef */
import express from 'express';
import { doctorRouter } from './routers/doctors.js';
import dotenv from "dotenv"
import { userRouter } from './routers/user.js';

//port
const PORT= process.env.PORT
//initaling server
const app = express();
//middle ware
app.use(express.json())
//env configuration
dotenv.config()
//applicational router
 app.use("/doctor",doctorRouter)
 app.use("/user",userRouter)
//listening a server
app.listen(PORT,()=>{console.log("server listening")})