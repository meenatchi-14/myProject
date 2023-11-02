/*eslint-disable react/prop-types*/ 
import { useState } from "react"
const AddDoctor= ({doctorData,setDoctorData})=>{
const[docName,setDocName]=useState("");
const[hospitalName,setHospitalName]=useState("");    
const[specialization,setSpecializtion]=useState("");
const addNewDoctor=()=>{
       const newDoctorDetails={
       doc_name:docName,
       hospital_name:hospitalName,
       specialization,
       status:"Available",
       };

    setDoctorData([...doctorData,newDoctorDetails]);
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
            onChange={(e)=>setSpecializtion(e.target.value)}/>

            <button className="btn btn-accent w-24 justufy-self-center"
            onClick={addNewDoctor}>
                Add</button>
        </div>

       
        
    );
};
export default AddDoctor;