import React from "react";
import aboutMeImage from "../../assets/images/about_me.jpg";

function About() {
  return (
    <section className="about-container">
      <div className="about-left">
        <div className="photo-div">
          <h1 id="about">About Me</h1>
          <img src={aboutMeImage} className="rounded-circle" alt="cover" />
        </div>
      </div>

      <div className="about-right">
        <div>
          <p>
            <span id="intro">Hi, I'm Tyler and I'm a web developer.</span>{" "}
            Recently earned a certificate in full stack web development from
            University of Richmond with newly developed skills in JavaScript,
            HTML, CSS, Node.js, and React.js. I recently leveraged my skills as
            a full stack web developer by setting up the back end and
            integrating with React on the front end when working on a team of
            four to develop a single-page MERN application. With each new
            development project I aim to employ new technologies and
            methodologies including developing Progressive Web Apps, and
            implementing GraphQL in addition to REST APIs. I am looking forward
            to using my newly developed skills to contribute to a passionate
            development team, and continually strive to create better web
            experiences.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
