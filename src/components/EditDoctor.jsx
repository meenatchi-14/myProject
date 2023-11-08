/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import{editNewDoctor}from"../helper/helper"

const EditDoctor= ({doctorData,setDoctorData,editId})=>{
const[docName,setDocName]=useState("");
const[hospitalName,setHospitalName]=useState("");    
const[specialization,setSpecializtion]=useState("");
const[docStatus,setDocStatus]=useState("");
const[index,setIndex]=useState("")
const navigate=useNavigate();
useEffect(()=>{
    const selectedDoctor=doctorData.filter((doc)=>doc.id ==editId);
    const selectedDocIndex=doctorData.findIndex((doc)=>doc.id ==editId);
    console.log(selectedDocIndex);
    setIndex[selectedDocIndex]
    setDocName(selectedDoctor[0].doc_name);
setHospitalName(selectedDoctor[0].hospital_name);
setSpecializtion(selectedDoctor[0].specialization);
setDocStatus(selectedDoctor[0].status);
}, [editId]);

//update
const updateDoctorDetails=()=>{
    const editedDoctor={
        doc_name:docName,
        hospital_name:hospitalName,
        specialization,
        status:docStatus,   
    };
    editNewDoctor(editId,editedDoctor).then((data)=>{
        if(data){
        
            doctorData[index] = editedDoctor;
            setDoctorData([...doctorData]);
            navigate("/");
        }
        else{
            console.log("no update")
        }
    });   
};
  
return(
            <div className="grid grid-row-4 justify-center gap-3">
            <input
            type="text"
            placeholder="Enter Doctor Name"
            className="input input-bordered w-80 "
            value={docName}
            onChange={(e)=>setDocName(e.target.value)}
            />
            <input
            type="text"
            placeholder="Enter Hospital"
            className="input input-bordered w-80"
            value={hospitalName}
            onChange={(e)=>setHospitalName(e.target.value)}
            />
            <input
            type="text"
            placeholder="Enter Specialization"
            className="input input-bordered w-80"
            value={specialization}
            onChange={(e)=>setSpecializtion(e.target.value)}
            />
            <button 
            className="btn btn-secondary w-24 justufy-self-center"
            onClick={updateDoctorDetails}
            >
                Update
                </button>
        </div>  
    );
};

export default EditDoctor;