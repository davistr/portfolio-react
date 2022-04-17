import React from "react";
import aboutMeImage from "../../assets/images/about_me.jpg";

function About() {
  return (
    <div className="row">
      <div className="col about-div-left">
        <h1 id="about">About Me</h1>
        <img src={aboutMeImage} className="rounded-circle" alt="cover" />
      </div>
      <div className="col about-div-right">
        <p>
          Hi, my name is Tyler! I am an aspiring full-stack web
          developer...Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Cupiditate odio quisquam nesciunt impedit nulla. Sed hic laboriosam
          corporis eligendi. Excepturi nisi praesentium voluptatibus
          necessitatibus illo ducimus consequuntur maiores harum animi. Lorem
          ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate odio
          quisquam nesciunt impedit nulla. Sed hic laboriosam corporis eligendi.
          Excepturi nisi praesentium voluptatibus necessitatibus illo ducimus
          consequuntur maiores harum animi. Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Cupiditate odio quisquam nesciunt
          impedit nulla. Sed hic laboriosam corporis eligendi.
        </p>
      </div>
    </div>
  );
}

export default About;
