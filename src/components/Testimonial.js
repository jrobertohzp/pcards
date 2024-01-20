import React from "react";

function Testimonial() {
  return (
    <div className="testimonial-container">
      <img
        className="testimonial-image"
        src={require("../images/berlioz.jpg")}
        alt="Berlioz pic" />
      <div className="testimonial-text-container">
        <p className="testimonial-name">Berlioz in París</p>
        <p className="testimonial-job">Software Engineer at Carrefour</p>
        <p className="testimonial-text">"I have been working with the team for a few years now and it is always a pleasure. They have an excellent understanding of the business context and can therefore provide highly relevant candidates. They are very responsive and flexible, which is very valuable in the fast-paced world of recruitment. I highly recommend them!"</p>
      </div>
    </div>

  );
}