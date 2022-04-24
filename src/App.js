import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import About from "./components/About";
import ContactForm from "./components/Contact";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Portfolio from "./components/Portfolio";
import Project from "./components/Project";
import Resume from "./components/Resume";
import { Bar } from "react-chartjs-2";

function App() {
  const data = {
    labels: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    datasets: [
      {
        label: "Hours Studied in Geeksforgeeks",
        data: [2, 5, 7, 9, 7, 6, 4],
        fill: true,
        backgroundColor: "rgba(6, 156,51, .3)",
        borderColor: "#02b844",
      },
    ],
  };

  return (
    <Router>
      <div>
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/" component={About} />
            <Route exact path="/portfolio" component={Portfolio} />
            <Route exact path="/resume" component={Resume} />
            <Route exact path="/contact" component={ContactForm} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
