// import { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "../src/App";
import { BrowserRouter } from "react-router-dom";
import AppContext from"../context/AppContext"

ReactDOM.createRoot(document.getElementById("root")).render(

  <BrowserRouter>
  <AppContext>
  <App />
  </AppContext>
   
  </BrowserRouter>
);
