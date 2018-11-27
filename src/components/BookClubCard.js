import React from "react";
import { Card, CardTitle, CardText } from "reactstrap";

const BookClubCard = props => {
  return (
    <Card className="project-card book-club">
      <div className="card-image">
        <iframe
          title="Book Club demo"
          width="100%"
          src="https://www.youtube.com/embed/bkCJCK8nF2Y"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        />
      </div>
      <CardTitle style={{ padding: "10px" }}>Book Club</CardTitle>
      <CardText className="project-text">
        A single page web application for book club management. Built with a
        Rails API backend and React/Redux frontend, styled with Ant Design.
      </CardText>
    </Card>
  );
};

export default BookClubCard;
