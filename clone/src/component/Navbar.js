// import React from 'react'
import { Link } from "react-router-dom";
import { logo } from "../data/data.json";
import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <div className="logo">
        <img src={logo}></img>
      </div>
      <Link className="navlinks" to="/miphone">
        Mi Phones
      </Link>
      <Link className="navlinks" to="/redmiphone">
        Redmi Phones
      </Link>
      <Link className="navlinks" to="/tv">
        TV
      </Link>
      <Link className="navlinks" to="/laptop">
        Laptop
      </Link>
      <Link className="navlinks" to="/fitness">
        Fitness & Lifestyle
      </Link>
      <Link className="navlinks" to="/home">
        Home
      </Link>
      <Link className="navlinks" to="/Audio">
        Audio
      </Link>
      <Link className="navlinks" to="/accessories">
        Accessories
      </Link>
      <div className="searchbox">
        <input type="text" /> Go
      </div>
    </div>
  );
};

export default Navbar;
