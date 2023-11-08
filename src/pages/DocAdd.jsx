/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
import WorkSpace from "../components/workSpace";
import AddDoctor from "../components/AddDoctor";

const DocAdd =({doctorData,setDoctorData})=>{
    return(
        <div>
            <WorkSpace>
                <AddDoctor doctorData={doctorData} setDoctorData={setDoctorData}/>
            </WorkSpace>
        </div>
    )
}

export default DocAdd;