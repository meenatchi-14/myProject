/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
//import { useState } from "react";
import { useNavigate } from "react-router-dom";
import{deleteDoctor}from"../helper/helper";

//eslint-disable-next-line react/prop-types
export default function MainBar({doctorData,setDoctorData}) {
  const navigate =useNavigate();

  //delete function
  const deleteDoctorDetails=(id)=>{
   deleteDoctor(id).then((data)=>{
    if (data) {
      const remainingDoctors = doctorData.filter(
        (docInfo) => docInfo.id != id
      );
      setDoctorData([...remainingDoctors]);
    } else {
      console.log("Error deleting data");
    }
  });
};

  //update function
  const handleEdit =(id)=>{
   navigate(`/edit/doc/${id}`);
  };
  
  // get the object and change the status info
  const handleStatusChange = (id, event) => {
    doctorData[id].status = event.target.value;
    setDoctorData([...doctorData]);
  };

  return (
    <div className="main">
      <div className="grid justify-center p-2">
        <button
        className="btn btn-accent w-32 justufy-start "
        onClick={()=>navigate("add/doc")}
        >
          Add Doctor
        </button>
      </div>
      {doctorData && (
        <>
          {doctorData?.map((docInfo, idx) => (
            <div
              key={idx}
              className="card card-compact  w-96 bg-green-100 shadow-xl"
            >
              <div className="card-body">
              <h2 className="card-title"> {docInfo.doc_name}</h2>
             <p>Hospital: {docInfo.hospital_name}</p>
               <p>Specialization: {docInfo.specialization}</p>
                <select
                 className="select select-bordered select-sm w-36 max-w-xs bg-green-100"
                 onChange={(e) => handleStatusChange(idx, e)}
                 >
                  {docInfo.status == "Available" ? (
                    <option>Available</option>
                  ) : (
                    <option>Not Available</option>
                  )}
                  {docInfo.status == "Not Available" ? (
                    <option>Available</option>
                  ) : (
                    <option>Not Available</option>
                  )}
                </select>
                <div className="card-actions justify-end">
                  <button
                   className="btn btn-primary"
                  onClick={()=>handleEdit(docInfo.id)}
                  >
                    edit
                  </button>
                  <button
                   className={"btn btn-error"}
                  onClick={()=> deleteDoctorDetails(docInfo.id)}
                  >
                    delete
                    </button>
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}