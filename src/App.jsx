/* eslint-disable react-hooks/exhaustive-deps */
//eslint-disable-next-line react/prop-types
import {Route,Routes, useNavigate} from"react-router-dom";
 import DocDash from "./pages/DocDash";
 import DocAdd from "./pages/DocAdd";
 import DocEdit from "./pages/DocEdit";
import { useEffect,useState } from "react";
import"./App.css";
import NoPage from "./pages/NoPage";
import{AppState} from "./context/AppContext"
import { getAllDoctor } from "./helper/helper.js";
import StatePage from "./pages/StatePage.jsx";
import CallBackPage from "./pages/CallBackPage.jsx";
import Login from "./pages/Login.jsx";


  function App() {
    const navigate=useNavigate();
    const [doctorData, setDoctorData] = useState();
    useEffect(() => {
      if(!localStorage.getItem("token")){
        navigate("/login",{replace:true})
      }else{
      getAllDoctor().then((data) => {
        setDoctorData(data.data);
      });
    }
    }, []);
  const{theme}=AppState();
  return (
    <div className="app" data-theme={theme}>
      <Routes>
        
        <Route
         
         path="/" 
        element={
        <DocDash doctorData={doctorData} setDoctorData={setDoctorData} />
         }
         />
        <Route 
         path="/add/doc" 
        element={
        <DocAdd doctorData={doctorData}setDoctorData={setDoctorData}/>
        }
        />
        <Route 
         path="/edit/doc/:id" 
        element={
        <DocEdit doctorData={doctorData} setDoctorData={setDoctorData}/>
        }
        />
        <Route path="*"element={<NoPage/>}/>
        <Route
          
         path="/state" 
        element={
        <StatePage />
         }
         />
          <Route
         
         path="/callback" 
        element={
        <CallBackPage />
        }
        />
         <Route
         exact 
         path="/Login" 
        element={
        <Login />
        }
        /> 

      </Routes>
      

    </div>  
  );
 }

export default App;

