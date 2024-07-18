import React from "react";
import food1 from "../images/restauranfood.jpg";
import "../css/Main.css";
import Card from "./Card";
import ReviewCard from "./ReviewCard";
import Salad from "../images/greek salad.jpg";
import Bruchetta from "../images/bruchetta.svg";
import Cake from "../images/lemon dessert.jpg";
import Connor from "../images/connor.png";
import John from "../images/john.jpg";
import Bruce from "../images/brucelee_cahalloffameinductee-1.png";
import Steven from "../images/steven-stamkos-2020-55.jpg";
import Owners from "../images/Mario and Adrian A.jpg";
import Resto from "../images/restaurant.jpg";

const Main = () => {
  return (
    <main>
      <section className="section1">
        <div className="info">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes servred with a modern twist.
          </p>
          <button className="button-reserve">Reserve Table</button>
        </div>
        <div className="image-container">
          <img className="main-img" src={food1} alt="food" />
        </div>
      </section>
      <section className="section2">
        <div className="section2">
          <h1>Specials</h1>
          <button className="button-reserve">Online Menu</button>
        </div>
      </section>
      <section className="section2">
        <Card
          imageSrc={Salad}
          title="Greek Salad"
          text="The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons."
        />
        <Card
          imageSrc={Bruchetta}
          title="Bruchetta"
          text="Our Bruschetta is made from homemade grilled bread that has been smeared with garlic and seasoned with salt and olive oil. Topped with fresh vegetables."
        />
        <Card
          imageSrc={Cake}
          title="Lemon Cake"
          text="This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined."
        />
      </section>
      <section className="section3">
        <h1 className="testimonials">Testimonials</h1>
        <div className="review-container">
          <ReviewCard
            imageSrc={Bruce}
            name="Bruce Lee"
            rating="5"
            review='"Great food"'
          />
          <ReviewCard
            imageSrc={John}
            name="John Travolta"
            rating="5"
            review='"Amazing dinner experience"'
          />
          <ReviewCard
            imageSrc={Connor}
            name="Connor Mcdavid"
            rating="5"
            review='"Almost better then hockey"'
          />
          <ReviewCard
            imageSrc={Steven}
            name="Steven Stamkos"
            rating="5"
            review='"Greek salad was great"'
          />
        </div>
      </section>
      <section className="section4">
        <div className="info2">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            Proident Lorem culpa ad officia ullamco id ut ea nisi magna
            adipisicing anim anim. Do amet ad tempor ipsum aute velit sit nisi
            pariatur non consequat ex Lorem ex. Id aliquip irure quis nostrud.
            Veniam minim dolore consequat anim voluptate nisi nulla cupidatat.{" "}
          </p>
        </div>
        <div className="image-contianer2">
          <img src={Owners} id="chefs" alt="Chefs" className="image" />
          <img src={Resto} id="resto" alt="Resto" className="image" />
        </div>
      </section>
    </main>
  );
};

export default Main;
