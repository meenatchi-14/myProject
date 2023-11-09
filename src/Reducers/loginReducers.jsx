/*eslint-disable no-unused-vars*/
import { createSlice } from "@reduxjs/toolkit";

const loginReducerSlice=createSlice({
    name:"loginOperation",
    initialState:{
        data:{
            userName:"",
            email:"",
            password:"",
        },

    },
    reducers:{
        loginUser:(state,action)=>{
            state.data=action.payload;
        },
        logoutUser:(state,action)=>{
            state.data={userName:"",email:"",passsword:""};
        },
    },

})
export const{loginUser,logoutUser}=loginReducerSlice.actions;
export default loginReducerSlice.reducer