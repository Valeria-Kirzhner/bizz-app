import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "popper.js/dist/popper";
import "bootstrap/dist/js/bootstrap";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
      
    <BrowserRouter>
      <App />
        
    </BrowserRouter>
    ,
  </React.StrictMode>,
  document.getElementById("root")
);
