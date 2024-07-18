import React from "react";
import Logo from "../images/Logo .svg";
import "../css/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div>
        <img className="image-footer" src={Logo} />
      </div>
      <div>
        <h5>Navigation</h5>
        <ul className="ul-footer">
          <li>
            <button className="button-footer">Home</button>
          </li>
          <li>
            <button className="button-footer">About</button>
          </li>
          <li>
            <button className="button-footer">Menu</button>
          </li>
          <li>
            <button className="button-footer">Reservations</button>
          </li>
          <li>
            <button  className="button-footer">Order Online</button>
          </li>
          <li>
            <button className="button-footer">Login</button>
          </li>
        </ul>
      </div>
      <div>
        <h5>Socials</h5>
        <ul className="ul-footer">
          <li><button className="button-footer">Facebook</button></li>
          <li><button className="button-footer">Myspace</button></li>
          <li><button className="button-footer">Instagram</button></li>
          <li><button className="button-footer">Tiktok</button></li>
          <li><button className="button-footer">X</button></li>
          <li><button className="button-footer">Youtube</button></li>
        </ul>
      </div>
      <div>
        <h5>Contact</h5>
        <ul className="ul-footer">
          <li>Address</li>
          <li>514-293-1902</li>
          <li>littlelemon@gmail.com</li>
        </ul>
      </div>
    </footer>
  );
};
export default Footer;
