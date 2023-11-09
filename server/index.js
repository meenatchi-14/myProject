/* eslint-disable no-undef */
import express from 'express';
import { doctorRouter } from './routers/doctors.js';


//port
const PORT=9000
//initaling server
const app = express();
//middle ware
app.use(express.json())
//applicational router
 app.use("/doctor",doctorRouter)

//listening a server
app.listen(PORT,()=>{console.log("server listening")})