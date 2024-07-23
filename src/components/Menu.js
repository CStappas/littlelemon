import React from 'react'
import Salad from "../images/greek salad.jpg";
import Bruchetta from "../images/bruchetta.svg";
import Cake from "../images/lemon dessert.jpg";
import Card from './Card';

export default function Menu() {
  return (
    <>
    <section className="section2" id='section2'>
        <h1>Specials</h1>
        <button className="button-reserve">Online Menu</button>
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
    </>
  );
};
