import React from "react";

function Navigation() {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <ul id="name">
          <li>
            <a data-testid="link" href="/">
              Tyler Davis
            </a>
          </li>
        </ul>

        <ul className="nav">
          <li className="mx-2">
            <a data-testid="about" href="#about">
              About Me
            </a>
          </li>
          <li className="mx-2">
            <a data-testid="portfolio" href="#portfolio">
              Portfolio
            </a>
          </li>
          <li className="mx-2">
            <a data-testid="contact" href="#contact">
              Contact
            </a>
          </li>
          <li className="mx-2">
            <a data-testid="resume" href="#resume">
              Resume
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
