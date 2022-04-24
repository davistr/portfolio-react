import React from "react";
// import { Card } from "reactstrap";
import handlebars from "../../assets/images/raising_the_handlebars.jpg";
import activePreps from "../../assets/images/active-preps.jpg";
import techBlog from "../../assets/images/tech_blog.jpg";
import workdayScheduler from "../../assets/images/workday_scheduler.jpg";
import noteTaker from "../../assets/images/note_taker.jpg";
import budgetTracker from "../../assets/images/budget_tracker.jpg";

function Project() {
  return (
    <div className="card-container container-fluid">
      <div className="card project-card text-center">
        <img src={handlebars} alt="" className="card-img" />
        <h5 className="card-title">Raising the Handelbars</h5>
        <a
          href="https://github.com/davistr/raising-the-handlebars"
          target="_blank"
          rel="noopener noreferrer"
          className="portfolio-btn"
        >
          View GitHub Repo
        </a>
      </div>
      <div className="project-card card text-center">
        <img src={activePreps} alt="" className="card-img" />
        <div className="card-body">
          <h5 className="card-title">Active Preps</h5>
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
        <img src={noteTaker} alt="" className="card-img" />
        <div className="card-body">
          <h5 className="card-title">Note Taker</h5>
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
        <img src={budgetTracker} alt="" className="card-img" />
        <div className="card-body">
          <h5 className="card-title">Budget Tracker</h5>
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
