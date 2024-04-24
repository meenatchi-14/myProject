import express from "express";
import bcrypt from "bcrypt";
import { getUser, registerUser } from "../conrollers/user.js";
const router=express.Router();
//signup
router.post("/signup", async(req,res)=>{
    try {
        if(Object.keys(req.body).length <= 0){
            return res.status(400).json({error:"invaild request"})
        }
        //generate salt value
        const salt= await bcrypt.genSalt(10);
    
        //is the user already register
        const checkUser=await getUser(req.body.email);
        if(!checkUser) 
        {
            const hashedPass= await bcrypt.hash(req.body.password,salt)
            const encryptUser= await {...req.body,password:hashedPass};
            const user=await registerUser(encryptUser);
        if(!user.acknowledged){
            return res.status(400).json({error:"failed Registeration"})
        }
        return res.status(201).json({message:"Registered successfully",data:user})
   } 
   res.status(400).json({error:"user already exist"})
 } 
 catch (error) {
        res.status(500).json({error:"internal server error"})
    }
});

//login
router.post("/login", async(req,res)=>{
    try {
        if(Object.keys(req.body).length <= 0){
            return res.status(400).json({error:"invaild request"})
        }
        const checkUser= await getUser(req.body.email)
        if(!checkUser){
            return res.status(400).json({error:"invaild email"})
        }
        const vaildPassword = await bcrypt.compare(
            req.body.password,
            checkUser.password)
            if(!vaildPassword){
                return res.status(400).json({error:"invalid password"})
            }
            res.status(200).json({message:"logging successfully"})
       
    } catch (error) {
        res.status(500).json({error:"internal server error"}) 
    }
})

export const userRouter=router;