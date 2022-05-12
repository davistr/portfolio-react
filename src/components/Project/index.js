import React from "react";
// import { Card } from "reactstrap";
import handlebars from "../../assets/images/raising_the_handlebars.jpg";
import activePreps from "../../assets/images/active-preps.jpg";
import techBlog from "../../assets/images/tech_blog.jpg";
import workdayScheduler from "../../assets/images/workday_scheduler.jpg";
import noteTaker from "../../assets/images/note_taker.jpg";
import budgetTracker from "../../assets/images/budget_tracker.jpg";
import tableTop from "../../assets/images/tabletop_game_finder.jpg";
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

function Project() {
  return (
    <div className="card-container container-fluid">
      <div className="project-card card text-center">
        <div>
          <img
            src={tableTop}
            alt=""
            className="card-img"
            style={{ width: "400px" }}
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">Table-Top Game Finder</h5>
          <div>
            <DiMongodb size={"26px"} />
            <SiExpress size={"26px"} />
            <DiReact size={"26px"} />
            <DiNodejs size={"26px"} />
            <DiCss3 size={"26px"} />
            <DiJavascript1 size={"26px"} />
          </div>
          <a
            href="https://github.com/WBrooks28/tabletop-group-finder"
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-btn"
          >
            View GitHub Repo
          </a>
        </div>
      </div>
      <div className="card project-card text-center">
        <div className="img-div">
          <img src={handlebars} alt="" className="card-img" />
        </div>
        <div className="card-body">
          <h5 className="card-title">Raising the Handelbars</h5>
          <div>
            <AiFillHtml5 size={"26px"} />
            <DiCss3 size={"26px"} />
            <DiJavascript1 size={"26px"} />
            <DiNodejs size={"26px"} />
            <DiMysql size={"26px"} />
            <SiExpress size={"26px"} />
          </div>
          <a
            href="https://github.com/davistr/raising-the-handlebars"
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-btn"
          >
            View GitHub Repo
          </a>
        </div>
      </div>
      <div className="project-card card text-center">
        <div>
          <img
            src={activePreps}
            alt=""
            className="card-img"
            style={{ width: "400px" }}
          />
        </div>
        <div className="card-body">
          <h5 className="card-title">Active Preps</h5>
          <div>
            <AiFillHtml5 size={"26px"} />
            <DiCss3 size={"26px"} />
            <SiBulma size={"26px"} />
            <DiJavascript1 size={"26px"} />
          </div>
          <a
            href="https://github.com/davistr/active-preps"
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-btn"
          >
            View GitHub Repo
          </a>
        </div>
      </div>
      <div className="project-card card text-center">
        <img src={techBlog} alt="" className="card-img" />
        <div className="card-body">
          <h5 className="card-title">The Tech Blog</h5>
          <div>
            <DiJavascript1 size={"26px"} />
            <SiHandlebarsdotjs size={"26px"} />
            <DiNodejs size={"26px"} />
            <SiExpress size={"26px"} />
            <DiMysql size={"26px"} />
          </div>
          <a
            href="https://github.com/davistr/tech-blog"
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-btn"
          >
            View GitHub Repo
          </a>
        </div>
      </div>
      <div className="project-card card text-center">
        <img src={workdayScheduler} alt="" className="card-img" />
        <div className="card-body">
          <h5 className="card-title">Workday Scheduler</h5>
          <div>
            <AiFillHtml5 size={"26px"} />
            <DiCss3 size={"26px"} />
            <DiJavascript1 size={"26px"} />
          </div>
          <a
            href="https://github.com/davistr/workday-scheduler"
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-btn"
          >
            View GitHub Repo
          </a>
        </div>
      </div>
      <div className="project-card card text-center">
        <img
          src={noteTaker}
          alt=""
          className="card-img"
          style={{ height: "175px" }}
        />
        <div className="card-body">
          <h5 className="card-title">Note Taker</h5>
          <div>
            <AiFillHtml5 size={"26px"} />
            <DiCss3 size={"26px"} />
            <DiJavascript1 size={"26px"} />
            <DiNodejs size={"26px"} />
            <SiExpress size={"26px"} />
          </div>
          <a
            href="https://github.com/davistr/note-taker"
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-btn"
          >
            View GitHub Repo
          </a>
        </div>
      </div>
      <div className="project-card card text-center">
        <img
          src={budgetTracker}
          alt=""
          className="card-img"
          style={{ height: "175px" }}
        />
        <div className="card-body">
          <h5 className="card-title">Budget Tracker (PWA)</h5>
          <div>
            <AiFillHtml5 size={"26px"} />
            <DiCss3 size={"26px"} />
            <DiJavascript1 size={"26px"} />
          </div>
          <a
            href="https://github.com/davistr/budget-tracker-PWA"
            target="_blank"
            rel="noopener noreferrer"
            className="portfolio-btn"
          >
            View GitHub Repo
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
