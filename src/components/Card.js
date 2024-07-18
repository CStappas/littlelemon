import React from "react";
import "../css/Card.css"; // Import your CSS file

const Card = ({ imageSrc, title, text }) => {
  return (
    <div className="card">
      <img src={imageSrc} alt={title} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{title}</h3>
        <p className="card-text">{text}</p>
        <button className="button2">Order for Delivery</button>
      </div>
    </div>
  );
};

export default Card;
