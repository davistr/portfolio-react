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
            Cupiditate odio quisquam nesciunt impedit nulla. Sed hic laboriosam
            corporis eligendi. Excepturi nisi praesentium voluptatibus
            necessitatibus illo ducimus consequuntur maiores harum animi. Lorem
            ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate odio
            quisquam nesciunt impedit nulla. Lorem ipsum dolor sit amet
            consectetur, adipisicing elit. Cupiditate odio quisquam nesciunt
            impedit nulla.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
