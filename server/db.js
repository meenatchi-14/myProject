/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { MongoClient } from "mongodb";
const Connecting = process.env.MONGO_URL;
const LocalConnecting="mongodb://127.0.0.1:27017/"

async function dbConnect(){
    try {
        const client= new MongoClient(LocalConnecting);
        await client.connect();
        console.log("database connection")
        return client
    } catch (error) {
      console.log("error",error)  
    }
  
}
export const client = await dbConnect();