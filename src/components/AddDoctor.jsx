/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { docShema } from "../helper/shema";
import { useFormik } from "formik";
import { addNewDoctor } from "../helper/helper";
import { useNavigate } from "react-router-dom";

const AddDoctor= ({doctorData,setDoctorData})=>{
const navigate=useNavigate();
const {values,
handleChange,
handleSubmit,
handleBlur,
errors,touched}=
useFormik({
  initialValues:{
    doc_name:"",
    hospital_name:"",
    specialization:"",
    status:"Available"
  },
  validationSchema:docShema,
  onSubmit:(newDoctor)=>{
    addNewDoctorDetails(newDoctor);
  },
});
// console.log(values)
const addNewDoctorDetails = (newDoctorDetails)=>{
       addNewDoctor(newDoctorDetails).then((data) => {
        if (data) {
          setDoctorData([...doctorData, newDoctorDetails]);
          navigate("/");
        } else {
          console.log("sorry cannot add new doctor");
        }
      });
    };
    return(
            <div className="w-full">
            <form className="grid grid-rows-4 justify-center gap-1"
            onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Enter Doctor Name"
            className="input input-bordered w-80 "
            value={values.doc_name}
            onBlur={handleBlur}
            name="doc_name"
            onChange={handleChange}
            />
            {touched.doc_name&& errors.doc_name?(
              <div className="text-red-500">{errors.doc_name}</div>
            ):("")}
            <input
            type="text"
            placeholder="Enter Hospital"
            className="input input-bordered w-80"
            value={values.hospital_name}
            name="hospital_name"
            onChange={handleChange}
            onBlur={handleBlur}
            />
            {touched.hospital_name&& errors.hospital_name?(
              <div className="text-red-500">{errors.hospital_name}</div>
            ):("")}
            <input
            type="text"
            placeholder="Enter Specialization"
            className="input input-bordered w-80"
            value={values.specialization}
            name="specialization"
            onChange={handleChange}
            onBlur={handleBlur}/>
            {touched.specialization&& errors.specialization?(
              <div className="text-red-500">{errors.specialization}</div>
            ):("")}
            <button className="btn btn-accent w-24 justufy-self-center"
            type="submit">
                Add</button>
            </form>
           
        </div>

       
        
    );
};
export default AddDoctor;