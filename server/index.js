/* eslint-disable no-undef */
import express from 'express';
import { doctorRouter } from './routers/doctors.js';
import dotenv from "dotenv"

//port
const PORT=process.env.PORT
//initaling server
const app = express();
//middle ware
app.use(express.json())
//env configuration
dotenv.config()
//applicational router
 app.use("/doctor",doctorRouter)

//listening a server
app.listen(PORT,()=>{console.log("server listening")})