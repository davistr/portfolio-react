import React from "react";
import { BsGithub } from "react-icons/bs";
import { AiFillLinkedin, AiFillFacebook } from "react-icons/ai";

function Footer() {
  return (
    <footer>
      <div>
        <ul className="icons">
          <li>
            <BsGithub size={"36px"} />
          </li>
          <li>
            <AiFillLinkedin size={"36px"} />
          </li>
          <li>
            <AiFillFacebook size={"36px"} />
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
