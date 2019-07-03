import React, { Component } from 'react'
import {Grid, Cell} from 'react-mdl';

export default class LandingPage extends Component {
  render() {
    return (
      <div style={{width:'100%', margin:'auto'}}>
      <Grid className="landing-grid">
        <Cell col={12}>
        <img
        src="imageb.JPG"
        alt="my picture profile"
        className="image1"
         />
         <div className="banner">
         <h1>Software Engineer</h1>
         <hr />
         <p>Java | JavaScript | React | Redux | Spring | Node Js | MYSQL</p>
         <div className="social-Media">
         <a href="https://www.linkedin.com/in/boniface-makau-12a080107/" rel= "noopener noreferrer" target="_blank" >
         <i class="fa fa-linkedin-square" aria-hidden="true"></i>

         </a>
         <a href="https://github.com/bmakau" rel= "noopener noreferrer" target="_blank" >
         <i class="fa fa-github-square" aria-hidden="true"></i>

         </a>
         </div>

         </div>
        
        </Cell>
        
    </Grid>
        
      </div>
    )
  }
}
