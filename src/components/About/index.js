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
            Currently completing University of Richmond full stack web
            development bootcamp, with anticipated graduation of May 2022.
            Experience collaborating with others on full-stack projects
            leveraging various development skills, and contributing in different
            roles. I am looking forward to using my newly developed skills to
            contribute to a passionate development team, and continually strive
            to create better web experiences.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
