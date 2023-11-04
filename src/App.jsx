//eslint-disable-next-line react/prop-types
import {Route,Routes} from"react-router-dom";
 import DocDash from "../pages/DocDash";
 import DocAdd from "../pages/DocAdd";
 import DocEdit from "../pages/DocEdit";
import { useState } from "react";
import"./App.css";
import NoPage from "../pages/NoPage";

 function App() {
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

  return (
    <div className="app">
      <Routes>
        <Route
         exact 
         path="/" 
        element={
        <DocDash doctorData={doctorData} setDoctorData={setDoctordata} />
         }
         />
        <Route 
         path="/add/doc" 
        element={
        <DocAdd doctorData={doctorData}setDoctorData={setDoctordata}/>
        }
        />
        <Route 
         path="/edit/doc/:id" 
        element={
        <DocEdit doctorData={doctorData} setDoctorData={setDoctordata}/>
        }
        />
        <Route path="*"element={<NoPage/>}/>
      </Routes>
    </div>  
  );
 }

export default App;

