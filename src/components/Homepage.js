import React from 'react'
import food1 from "../images/restauranfood.jpg";
import { useNavigate } from 'react-router-dom';


export default function Homepage() {
  const navigate = useNavigate();
  
  const goToAboutPage = () => {
    navigate('/booking');
  };
  return (
    <section className="section1">
        <div className="info">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes servred with a modern twist.
          </p>
          <button className="button-reserve" onClick={goToAboutPage}>Reserve Table</button>
        </div>
        <div className="image-container">
          <img className="main-img" src={food1} alt="food" />
        </div>
      </section>
  )
}
