import React from "react";
import { Jumbotron, Row, Col } from "reactstrap";
import BookClubCard from "../components/BookClubCard";
import CookbookCard from "../components/CookbookCard";
import HabitTrackerCard from "../components/HabitTrackerCard";

const ProjectsContainer = () => {
  return (
    <div className="projects-container">
      <Jumbotron
        style={{ minHeight: window.innerHeight, backgroundColor: "#bd8c7d" }}
      >
        <h1 className="header-right">Projects</h1>
        <Row>
          <Col sm="4" xs="12">
            <BookClubCard className="project" />
          </Col>
          <Col sm="4" xs="12">
            <CookbookCard className="project" />
          </Col>
          <Col sm="4" xs="12">
            <HabitTrackerCard className="project" />
          </Col>
        </Row>
      </Jumbotron>
    </div>
  );
};

export default ProjectsContainer;
