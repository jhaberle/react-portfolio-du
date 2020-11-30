import React from "react";
import { Card, Button, Row } from "react-bootstrap";
import styled from "styled-components";

const StyledCard = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
  .card {
    margin: 10px;
  }

  Button {
    background-color: lawngreen;
  }
`;

const Projects = () => {
  return (
    <div className="Projects">
      <StyledCard>
        <Row>
          <Card style={{ width: "15rem" }}>
            <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title>Weather App</Card.Title>
              <Card.Text>
                A simple weather app that shows current and forecasted weather
                by city
              </Card.Text>
              <Button
                variant="primary"
                href="https://jhaberle.github.io/Weather-Planner/"
              >
                See the App!
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "15rem" }}>
            <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title>Travel Genie</Card.Title>
              <Card.Text>
                Traveling anytime soon? Travel Genie can help!
              </Card.Text>
              <Button
                variant="primary"
                href="https://jhaberle.github.io/Project-1/"
              >
                See the App!
              </Button>
            </Card.Body>
          </Card>
          <Card style={{ width: "15rem" }}>
            <Card.Img variant="top" src="" />
            <Card.Body>
              <Card.Title>Code Quiz</Card.Title>
              <Card.Text>
                A coding trivia game built with vanilla javascript
              </Card.Text>
              <Button
                variant="primary"
                href="https://jhaberle.github.io/code-quiz/"
              >
                See the App!
              </Button>
            </Card.Body>
          </Card>
        </Row>
      </StyledCard>
    </div>
  );
};

export default Projects;
