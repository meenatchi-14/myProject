import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../Reducers/loginReducers";

const RegisterForm=()=>{
    const [userName,setUserName]=useState("");
    const[email,setEmail]=useState("");
    const[passsword,setPassword]=useState("");
    const dispatch=useDispatch();
    const handleLogin=()=>{
        const userData={
        userName,
        email,
        passsword,
    };
    console.log(userData);
dispatch(loginUser(userData));
};
return(
    
        <div className="grid grid-rows-4 justify-center mt-24 gap-3 h-52">
        <input
           type="text"
            placeholder="Enter UserName"
            className="input input-bordered w-80 "
            value={userName}
            onChange={(e)=>setUserName(e.target.value)}
            />

            <input
            type="email" placeholder="Enter Email"
            className="input input-bordered w-80 "
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
            
            <input
            type="password"
            placeholder="Enter password"
            className="input input-bordered w-80"
            onChange={(e)=>setPassword(e.target.value)}
            />
            
            <button className="btn btn-accent w-24 justufy-self-center"
            onClick={handleLogin}
           >
                Login</button>
               
    </div>
)
}
export default RegisterForm;