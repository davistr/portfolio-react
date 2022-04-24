import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "reactstrap";

function Navigation({ currentPage, handlePageChange }) {
  return (
    <div className="navbar">
      <div className="navbar-container container">
        <div>
          <a id="name" data-testid="link" href="/">
            Tyler Davis
          </a>
        </div>
        <ul className="nav">
          <li className="nav-item">
            <Link
              to="/"
              className={
                currentPage === "About" ? "nav-link active" : "nav-link"
              }
            >
              About Me
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/portfolio"
              className={
                currentPage === "Portfolio" ? "nav-link active" : "nav-link"
              }
            >
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/resume"
              className={
                currentPage === "Resume" ? "nav-link active" : "nav-link"
              }
            >
              Resume
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className={
                currentPage === "Contact" ? "nav-link active" : "nav-link"
              }
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
