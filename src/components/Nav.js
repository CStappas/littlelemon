import React from "react";
import "../css/Nav.css";
import { Link } from 'react-router-dom';
import AnchorLink from "react-anchor-link-smooth-scroll";

function Nav() {
  return (
    <nav className="nav" id="nav">
      <ul className="nav-list">
        <li className="list-item"><Link to="/">Home</Link></li>
        <li className="list-item"><AnchorLink href="#section4">About</AnchorLink></li>
        <li className="list-item"><Link to="/booking">Reservation</Link></li>
        <li className="list-item"><Link to="">Order Online</Link></li>
        <li className="list-item"><Link to="">Login</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;
