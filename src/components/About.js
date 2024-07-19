import React from 'react'
import Owners from "../images/Mario and Adrian A.jpg";
import Resto from "../images/restaurant.jpg";

function About() {
  return (
    <section className="section4" id='section4'>
        <div className="info2">
          <h2 className="info2">Little Lemon</h2>
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
  )
};

export default About;
