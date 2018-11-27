import React from "react";
import { Card, CardTitle, CardText } from "reactstrap";

const CookbookCard = props => {
  return (
    <Card className="project-card cook-book">
      <div className="card-image">
        <iframe
          title="Cookbook demo"
          width="100%"
          src="https://www.youtube.com/embed/gSKpxNr7-_s"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        />
      </div>
      <CardTitle style={{ padding: "10px" }}>Flatiron Cookbook</CardTitle>
      <CardText className="project-text">
        An application for finding and saving recipes. Built with a Rails API
        backend and React frontend, styled with Semantic-React.
      </CardText>
    </Card>
  );
};

export default CookbookCard;
