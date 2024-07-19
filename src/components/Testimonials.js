import React from 'react'
import ReviewCard from './ReviewCard'
import Connor from "../images/connor.png";
import John from "../images/john.jpg";
import Bruce from "../images/brucelee_cahalloffameinductee-1.png";
import Steven from "../images/steven-stamkos-2020-55.jpg";

export default function Testimonials() {
  return (
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
  )
}
