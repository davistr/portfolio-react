import Bootstrap from "bootstrap";
import React from "react";
import { Bar } from "react-chartjs-2";
import { AiFillHtml5 } from "react-icons/ai";
import {
  DiCss3,
  DiReact,
  DiJavascript1,
  DiNodejs,
  DiMysql,
  DiMongodb,
} from "react-icons/di";
import { BsFillBootstrapFill } from "react-icons/bs";
import { SiExpress } from "react-icons/si";

function Resume() {
  return (
    <section className="resume-container">
      <div>
        <h1>Download my resume!</h1>
      </div>
      <div className="resume-left">
        <div>
          <h1>Front End Skills</h1>
        </div>
        <div>
          <ul>
            <li>
              <span>
                <AiFillHtml5 size={"16px"} />
              </span>
              HTML
            </li>
            <li>
              <span>
                <DiCss3 size={"16px"} />
              </span>
              CSS
            </li>
            <li>
              <span>
                <DiReact size={"16px"} />
              </span>
              React
            </li>
            <li>
              <span>
                <BsFillBootstrapFill size={"16px"} />
              </span>
              Bootstrap
            </li>
          </ul>
        </div>
      </div>
      <div className="resume-right">
        <div>
          <h1>Back End Skills</h1>
        </div>
        <div>
          <ul>
            <li>
              <span>
                <DiJavascript1 size={"16px"} />
              </span>
              JavaScript
            </li>
            <li>
              <span>
                <DiNodejs size={"16px"} />
              </span>
              Node.js
            </li>
            <li>
              <span>
                <SiExpress size={"16px"} />
              </span>
              Express
            </li>
            <li>
              <span>
                <DiMysql size={"16px"} />
              </span>
              MySQL
            </li>
            <li>
              <span>
                <DiMongodb size={"16px"} />
              </span>
              MongoDB
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Resume;
