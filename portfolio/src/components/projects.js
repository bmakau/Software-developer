import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle><iframe width="560" height="315" src="https://www.youtube.com/embed/9HrwoDLav3U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></CardTitle>
            <CardText>
            We all agree educators are among least motivated professionals. Therefore, Being an i understand the challenges faced by the teachers. One of the challenge is make sure all the students in the class understand the subject matter. Randomizer is an application that enables educators to monitor student participation in a class. Therefore the teacher is able to gauge how well the students understood the concepts. 
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
             </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          
         
        </div>
      )
    } else if(this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle></CardTitle>
            <CardText>
            We all like competing among our friends and family. Wellness Bet helps individuals to compete for whoever has a consistent better sleep hours. Therefore, this improves the health and productivity.  
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
             </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          
         
        </div>
      
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle></CardTitle>
            <CardText>
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
             </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          
         
        </div>
      
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle><iframe width="560" height="315" src="https://www.youtube.com/embed/9HrwoDLav3U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></CardTitle>
            <CardText>
            We all agree educators are among least motivated professionals. Therefore, Being an i understand the challenges faced by the teachers. One of the challenge is make sure all the students in the class understand the subject matter. Randomizer is an application that enables educators to monitor student participation in a class. Therefore the teacher is able to gauge how well the students understood the concepts. 
            </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
             </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          
         
        </div>
      
        
        )
    }
  }
  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
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
    )
  }
}
export default Projects;


