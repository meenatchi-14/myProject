/* eslint-disable no-unused-vars */
import { MongoClient } from "mongodb";
const Connecting=
"mongodb+srv://meena:meena14@cluster0.ko6rp9j.mongodb.net/";
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