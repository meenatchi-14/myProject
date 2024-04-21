import express from "express"
import { addNewDoctor, deleteDoctor, editDoctor, getAllDoctors } from "../conrollers/doctors.js";

const router=express.Router();
router.post("/add",async(req,res)=>{
    //data
    try {
        //we need to handle error req.body
        if(Object.keys(req.body).length<=0){
       res.status(400).json({error:"check req body"})
        }
        const data={...req.body, status:"avaliable"};
        //adding new data info
        const newDoctor= await addNewDoctor(data);
    if(!newDoctor.acknowledged){
        return res.status(400).json({error:"error is adding data"})
    }
    
    res.status(201).json({data:newDoctor});
    } catch (error) {
        res.status(500).json({error:"Internal server error",errorMessage:error})
    }
    
    });
    
    //get doctor
    router.get("/all",async(req,res)=>{  
        const doctors = await getAllDoctors();
        try{
    if(doctors.length<=0){
        return res.status(404).json({message:"no data avaiable"})
    
    }
         res.status(200).json({data:doctors});
    }catch(error){
        res.status(500).json({error:"internal server error"})
    }
    })
 //updating doctors
     router.put("/edit/:id",async(req,res)=>{
 try {
     const {id}=req.params;
      //we need to handle error req.body
      if(Object.keys(req.body).length<=0){
        res.status(400).json({error:"check req body"})
         }
         const updateDoctor= await editDoctor(id,req.body)
         if(!updateDoctor.acknowledged){
            return res.status(400).json({error:"error is update data"})
        }
        res.status(201).json({data:updateDoctor});

 } catch (error) {
    res.status(500).json({error:"internal server error"})
 }
    })
    router.delete("/delete/:id",async(req,res)=>{
        try {
            //delete data
            const {id}=req.params;
                const deletedDoctor= await deleteDoctor(id)
                if(!deletedDoctor.acknowledged){
                   return res.status(400).json({error:"error is delete data"})
               }
               res.status(201).json({data:deletedDoctor});
       
        } catch (error) {
           res.status(500).json({error:"internal server error"})
        }
           })

    export const doctorRouter=router;
