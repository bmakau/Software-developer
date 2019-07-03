import React, { Component } from "react";
import { Card, CardTitle, CardText, CardActions, Button } from "react-mdl";

export default class AboutMe extends Component {
  render() {
    return (
      <div className="projects-grid">
        <Card
          shadow={0}
          style={{ width: "900px", height: "600px", margin: "auto" }}
        >
          <CardTitle
            expand
            style={{
              color: "#fff",
              background: "url()"
            }}
          >
            About Me
          </CardTitle>
          <CardText>
            <p>
              Hi, I'm Boniface, a software engineer based in Columbus Ohio. With
              over three years of experience, I can help you make your next
              website and software for your business. I am available to work
              remotely and willing to relocate. I am available for hire full
              time, part time and also, per project. I am quick learner, goal
              oriented, team player, willing to learn new technologies and
              problem solving capability.
            </p>
          </CardText>
          <CardActions border>
            <Button colored>View Updates</Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}
