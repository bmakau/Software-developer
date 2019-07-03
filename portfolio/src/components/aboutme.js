import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


export default class AboutMe extends Component {
  render() {
    return (
      
      
      <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle>ABOUT ME</CardTitle>
            <CardText className='about'>
            
      
      Hi, I'm Boniface, a software engineer based in Columbus Ohio.
       With over three years of experience, I can help you make your next website and software for your business.
       I am available to work remotely and willing to relocate. 
       I am available for hire full time, part time and also, per project.
       I am quick learner, goal oriented, team player, willing to learn new technologies and problem solving capability.

        
  
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
