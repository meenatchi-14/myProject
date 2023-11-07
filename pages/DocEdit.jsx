/* eslint-disable react/prop-types */
 // eslint-disable-next-line no-unused-vars
// eslint-disable-next-line react/prop-types

 import { useParams } from "react-router-dom";
import EditDoctor from"../components/EditDoctor";
import WorkSpace from "../components/workSpace"

const DocEdit=({doctorData,setDoctorData})=>{
    const{id}=useParams();
    return(
        <WorkSpace>
    <EditDoctor 
    doctorData={doctorData}
    setDoctorData={setDoctorData}
    editId={id}
    />
    </WorkSpace>
    );

};
export default DocEdit;