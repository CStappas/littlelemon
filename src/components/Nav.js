import React, { useState, useEffect } from "react";
import "../css/Nav.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import Logo from "../images/Logo.svg";

function Nav() {
  const [hidden, setHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <nav className={`nav ${hidden ? "hidden" : ""}`} id="nav">
      <HashLink to="/#header" className="logo-container">
        <img src={Logo} alt="Logo" className="logo" />
      </HashLink>

      <ul className="nav-list">
        <li className="list-item">
          <HashLink to="/#header">Home</HashLink>
        </li>
        <li className="list-item">
          <HashLink smooth to="/#section4">
            About
          </HashLink>
        </li>
        <li className="list-item">
          <Link to="/booking">Reservation</Link>
        </li>
        <li className="list-item">
          <HashLink smooth to="/#section2">
            Order Online
          </HashLink>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
