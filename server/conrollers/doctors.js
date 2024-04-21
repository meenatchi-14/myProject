import { ObjectId } from "mongodb";
import { client } from "../db.js";

export async function getAllDoctors(){
    return client
    .db("Docapp")
    .collection("doctors")
    .find({})
    .toArray();
}
export async function addNewDoctor(data){
    return client
    .db("Docapp")
    .collection("doctors")
    .insertOne(data);
  
}
export async function editDoctor(id,data) {
    return client
    .db("Docapp")
    .collection("doctors")
    .updateOne({_id:new ObjectId(id)},{$set:data});
    
}
export async function deleteDoctor(id) {
    return client
    .db("Docapp")
    .collection("doctors")
    .deleteOne({_id:new ObjectId(id)});
    
}