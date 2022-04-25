import React from "react";
import { BsGithub, BsStackOverflow } from "react-icons/bs";
import { AiFillLinkedin } from "react-icons/ai";

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <ul>
          <li>
            <a
              href="https://github.com/davistr/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsGithub size={"42px"} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/tylerdavis-profile/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <AiFillLinkedin size={"42px"} />
            </a>
          </li>
          <li>
            <a
              href="https://stackoverflow.com/users/17331067/tyler-davis"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BsStackOverflow size={"42px"} />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
