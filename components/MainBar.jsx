/* eslint-disable no-unused-vars */
import { useState } from "react";
import AddDoctor from "./AddDoctor";
import EditDoctor from "./EditDoctor";

// eslint-disable-next-line react/prop-types
export default function MainBar() {
  const data = [
    {
      doc_name: "Prashanth",
      hospital_name: "Kaveri",
      specialization: "Surgery",
      status: "Available",
    },

    {
      doc_name: "Nikhil",
      hospital_name: "Apollo",
      specialization: "Ortho",
      status: "Not Available",
    },
  ];
  const [doctorData, setDoctordata] = useState(data);
 const [showData,setShowData] = useState(true);
const [editId,setEditId]=useState("");

//delete function
  const deleteDoctorDetails=(id)=>{
    const remainingDoctors=doctorData.filter((docInfo,idx)=> idx !== id); 
    setDoctordata(remainingDoctors);
  };

  //update function
  const handleEdit =(id)=>{
setShowData(false);
setEditId(id);
  };
  return (
    <div className="main">
      {showData ===true ? (
      <AddDoctor doctorData={doctorData} setDoctordata={setDoctordata}/>
      ):(
      <EditDoctor 
      doctorData={doctorData}
       setDoctordata={setDoctordata}
       showData={showData}
       setShowData={setShowData}
       editId={editId}
       />
      )}
      {doctorData && (
        <>
          {doctorData?.map((docInfo, idx) => (
            <div
              key={idx}
              className="card card-compact w-96 bg-base-100 shadow-xl"
            >
              <div className="card-body">
                <h2 className="card-title">{docInfo.doc_name}</h2>
                <p>{docInfo.hospital_name}</p>
                <p>{docInfo.specialization}</p>
                <select className="select select-bordered select-sm w-36 max-w-xs">
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
                  <button className="btn btn-primary"
                  onClick={()=>handleEdit(idx)}>edit</button>
                  <button className="btn btn-error"
                  onClick={()=>deleteDoctorDetails(idx)}>
                    delete</button>
                
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}