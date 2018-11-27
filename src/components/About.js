import React from "react";
import { Jumbotron, Card, CardText } from "reactstrap";

const About = props => {
  return (
    <div className="About">
      <a name="about" />
      <Jumbotron
        style={{ minHeight: window.innerHeight, backgroundColor: "white" }}
      >
        <i
          className="fas fa-code"
          style={{
            fontSize: "7em",
            color: "#d1bfa7",
            margin: "20px",
            textAlign: "right"
          }}
        />

        <Card className="text-left gold-card">
          <CardText className="gold-card-text">
            I'm a full-stack web developer and recovering journalist with
            experience in{" "}
            <span className="emphasized">
              <strong>Ruby on Rails</strong>
            </span>
            ,{" "}
            <span className="emphasized">
              <strong>JavaScript</strong>
            </span>{" "}
            and{" "}
            <span className="emphasized">
              <strong>React</strong>
            </span>
            . In my previous life, I worked on a team that was responsible for
            emailing developers when things were broken and discovered I wanted
            to be the one making improvements instead.
          </CardText>
        </Card>
      </Jumbotron>
    </div>
  );
};

export default About;
