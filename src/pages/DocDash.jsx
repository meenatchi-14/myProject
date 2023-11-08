
import WorkSpace from "../components/workSpace";
import MainBar from "../components/MainBar";
// eslint-disable-next-line react/prop-types
const DocDash =({doctorData,setDoctorData})=>{
    return(
        <div>
            <WorkSpace>
                <MainBar doctorData={doctorData} setDoctorData={setDoctorData} />
            </WorkSpace>
        </div>
    )
}
export default DocDash;