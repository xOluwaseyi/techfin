import React from "react";
import logo from "../images/logo.png";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav>
      <div>
        <img src={logo} alt="logo" />
        <p className="brand-name">TechFin</p>
      </div>
      <div>
        <p>Sign up and get 20% bonus on Referrals</p>
      </div>
      <div className="nav-link">
        <a href="/">Login</a>
        <a href="/" className="nav-get">
          GET THE APP
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
