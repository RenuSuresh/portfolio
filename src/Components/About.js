import React from "react";
import "./About.css";
function About({ data }) {
  return (
    <section id="about" className="about">
      <div className="about__row">
        <div className="about__img">
          <img
            src="https://i.pinimg.com/originals/56/66/78/5666780d13017978fafff10a601eb532.jpg"
            alt="profile picture"
            className="about__profile"
          />
        </div>
        <div className="about__details">
          <h2>About Me</h2>
          <p>{data.bio}</p>
        </div>
      </div>
    </section>
  );
}

export default About;
