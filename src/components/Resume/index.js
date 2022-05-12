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
import { SiExpress, SiBulma, SiHandlebarsdotjs } from "react-icons/si";

function Resume() {
  return (
    <section className="resume-container">
      <div className="resume">
        <h1>
          Download my {}
          <span>
            <a href="../../../public/Resume_DavisT.docx.pdf" download>
              resume!
            </a>
          </span>
        </h1>
      </div>
      <div className="resume-left">
        <div>
          <h1 className="skills-title">Front End Skills</h1>
        </div>
        <div>
          <ul>
            <li>
              <span>
                <AiFillHtml5 size={"32px"} />
              </span>
              HTML
            </li>
            <li>
              <span>
                <DiCss3 size={"32px"} />
              </span>
              CSS
            </li>
            <li>
              <span>
                <DiReact size={"32px"} />
              </span>
              React
            </li>
            <li>
              <span>
                <BsFillBootstrapFill size={"32px"} />
              </span>
              Bootstrap
            </li>
            <li>
              <span>
                <SiBulma size={"32px"} />
              </span>
              Bulma
            </li>
            <li>
              <span>
                <SiHandlebarsdotjs size={"32px"} />
              </span>
              Handlebars
            </li>
          </ul>
        </div>
      </div>
      <div className="resume-right">
        <div>
          <h1 className="skills-title">Back End Skills</h1>
        </div>
        <div>
          <ul>
            <li>
              <span>
                <DiJavascript1 size={"32px"} />
              </span>
              JavaScript
            </li>
            <li>
              <span>
                <DiNodejs size={"32px"} />
              </span>
              Node.js
            </li>
            <li>
              <span>
                <SiExpress size={"32px"} />
              </span>
              Express
            </li>
            <li>
              <span>
                <DiMysql size={"32px"} />
              </span>
              MySQL
            </li>
            <li>
              <span>
                <DiMongodb size={"32px"} />
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
