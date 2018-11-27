import React from "react";
import { Card, CardTitle, CardText } from "reactstrap";

const HabitTrackerCard = props => {
  return (
    <Card className="project-card habit-tracker">
      <div className="card-image">
        <iframe
          title="Habit Tracker demo"
          width="100%"
          src="https://www.youtube.com/embed/KeW_IQzL-3I"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        />
      </div>
      <CardTitle style={{ padding: "10px" }}>Habit Tracker</CardTitle>
      <CardText className="project-text">
        An application for finding and saving recipes. Built with a Rails API
        backend and vanilla JS frontend, styled using Semantic UI.
      </CardText>
    </Card>
  );
};

export default HabitTrackerCard;
