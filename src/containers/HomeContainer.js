import React, { Component } from "react";
import { Jumbotron } from "reactstrap";
import About from "../components/About";
import ProjectsContainer from "./ProjectsContainer";
import Contact from "../components/Contact";

class HomeContainer extends Component {
  render() {
    return (
      <div className="home-container">
        <Jumbotron
          style={{
            height: window.innerHeight,
            backgroundColor: "#8e8e90"
          }}
        >
          <h1 className="bigName">Aubree Abril</h1>
          <h1 className="subhead">Web Developer</h1>
          <Contact />
        </Jumbotron>
        <About />
        <ProjectsContainer />
      </div>
    );
  }
}

export default HomeContainer;
