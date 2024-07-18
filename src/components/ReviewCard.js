import React from "react";
import "../css/ReviewCard.css"; // Import your CSS file

const ReviewCard = ({ imageSrc, name, rating, review }) => {
  return (
    <div className="review-card">
      <img src={imageSrc} alt={name} className="review-image" />
      <div className="review-content">
        <h3 className="review-name">{name}</h3>
        <div className="review-rating">Rating: {rating}/5</div>
        <p className="review-text">{review}</p>
      </div>
    </div>
  );
};

export default ReviewCard;