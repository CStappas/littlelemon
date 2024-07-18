import React from "react";
import "../css/Nav.css";

function Nav() {
  return (
    <nav className="nav" id="nav">
      <ul className="nav-list">
        <li className="list-item"><a href="">Home</a></li>
        <li className="list-item"><a href="">About</a></li>
        <li className="list-item"><a href="">Menu</a></li>
        <li className="list-item"><a href="">Reservation</a></li>
        <li className="list-item"><a href="">Order Online</a></li>
        <li className="list-item"><a href="">Login</a></li>
      </ul>
    </nav>
  );
}

export default Nav;
