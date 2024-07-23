import React from "react";

import Nav from "./Nav.js";
import "../css/Header.css";
import { useEffect, useState } from "react";

const Header = () => {
  return (
    <header className="header" id="header">
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
