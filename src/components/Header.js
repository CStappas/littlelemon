import React from "react";
import Logo from "../images/Logo.svg";
import Nav from "./Nav.js";
import "../css/Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-container">
        <img src={Logo} alt="Logo" className="logo" />
      </div>
      <Nav />
      <div className="menu-toggle" id="menu-toggle">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </header>
  );
};

export default Header;
