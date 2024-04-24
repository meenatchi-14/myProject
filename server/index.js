/* eslint-disable no-undef */
import express from 'express';
import { doctorRouter } from './routers/doctors.js';
import dotenv from "dotenv"
import cors from "cors"
import { userRouter } from './routers/user.js';
import { isAuthorized } from './Auth/auth.js';

//port
const PORT= process.env.PORT
//initaling server
const app = express();
//middle ware
app.use(express.json())
app.use(cors())
//env configuration
dotenv.config()
//applicational router
 app.use("/doctor",isAuthorized,doctorRouter)
 app.use("/user",userRouter)
//listening a server
app.listen(PORT,()=>{console.log("server listening")})