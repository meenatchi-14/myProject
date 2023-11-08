import * as yup from "yup";
export const docShema=yup.object({
   doc_name:yup.string().required("Please fill in doctor name")
   .min(3,"Minimum three words required")
   .max(10,"first or last name is enough"),
   hospital_name:yup.string().required("Please Specify Hospital Name"),
   specialization:yup.string().required("Please specify specialization"),
});