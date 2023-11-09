// import { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "../src/App";
import { BrowserRouter } from "react-router-dom";
import AppContext from"./context/AppContext"
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import loginReducer from "./Reducers/loginReducers";
 const store=configureStore({
  reducer:{
    loginOperation:loginReducer,
  }
 })
ReactDOM.createRoot(document.getElementById("root")).render(

  <BrowserRouter>
  <Provider store={store}> 
  <AppContext>
  <App />
  </AppContext>
  </Provider>
  
   
  </BrowserRouter>
);
