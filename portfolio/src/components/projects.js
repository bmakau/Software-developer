import React, { Component } from "react";
import {
  Tabs,
  Tab,
  Grid,
  Cell,
  Card,
  CardTitle,
  CardText,
  CardActions,
  Button,
  CardMenu,
  IconButton
} from "react-mdl";

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if (this.state.activeTab === 0) {
      return (
        <div className="projects-grid">
          <Card
            shadow={0}
            style={{ width: "900px", height: "600px", margin: "auto" }}
          >
            <CardTitle>
              <iframe
                width="900px"
                height="300px"
                src="https://www.youtube.com/embed/9HrwoDLav3U"
                frameborder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </CardTitle>

            <CardText>
              <p>
                We all agree educators are among least motivated professionals.
                Therefore, Being an i understand the challenges faced by the
                teachers. One of the challenge is make sure all the students in
                the class understand the subject matter. Randomizer is an
                application that enables educators to monitor student
                participation in a class. Therefore the teacher is able to gauge
                how well the students understood the concepts.
              </p>
            </CardText>
            <CardActions border>
              <a
                href="https://lambda-labs-frontend.herokuapp.com"
                target="_blank"
              >
                Randomizer link
              </a>
            </CardActions>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 1) {
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
                background:
                  "url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC"
              }}
            >
              Update
            </CardTitle>
            <CardText>
              <p>This is wellness bet page</p>
            </CardText>
            <CardActions border>
              <Button colored>View Updates</Button>
            </CardActions>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 2) {
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
                background:
                  "url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC"
              }}
            >
              Update
            </CardTitle>
            <CardText>
              <p>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenan
                convallis.
              </p>
            </CardText>
            <CardActions border>
              <Button colored>View Updates</Button>
            </CardActions>
          </Card>
        </div>
      );
    } else if (this.state.activeTab === 3) {
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
                background:
                  "url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC"
              }}
            >
              Update
            </CardTitle>
            <CardText>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenan
                convallis.
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
  render() {
    return (
      <div>
        <Tabs
          activeTab={this.state.activeTab}
          onChange={tabId => this.setState({ activeTab: tabId })}
          ripple
        >
          <Tab>Randomizer APP</Tab>
          <Tab>WellNess Bet</Tab>
          <Tab>Shopping Cart</Tab>
          <Tab>Note App</Tab>
        </Tabs>
        <Grid>
          <Cell col={12}>
            <div className="content">{this.toggleCategories()}</div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Projects;
