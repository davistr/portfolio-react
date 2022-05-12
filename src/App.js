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

function App() {
  return (
    <Router basename="/portfolio-react">
      <div>
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/" component={About} />
            <Route exact path="/about" component={About} />
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
