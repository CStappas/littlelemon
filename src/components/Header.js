import React from "react";
import Logo from "../images/Logo.svg";
import Nav from "./Nav";

const Header = () => {
  return (
    <header>
      <img src={Logo} alt="" />
      <Nav/>
    </header>
  );
};
export default Header;
