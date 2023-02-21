import React from "react";
import "./Prenavbar.css";

const Prenavbar = () => {
  return (
    <div className="prenav">
      <div>
        <a href="#"> Mi India</a>
        <span>|</span>
        <a href="#"> Get Mi store APP</a>
        <span>|</span>
        <a href="#"> Online Help</a>
        <span>|</span>
         <a href="#"> Retail Store</a>
        <span></span>
      </div>
      <div>
        <a href="#">Login</a>
        <span>|</span>
        <a href="#"> Sign Up</a>
        <span>|</span>
        <a href="#"> Cart (0)</a>
        <span></span>
      </div>
    </div>
  );
};

export default Prenavbar;
