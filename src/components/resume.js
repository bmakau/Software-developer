import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img src="imageb.JPG" alt="Profile" style={{ height: "200px" }} />
            </div>

            <h2 style={{ paddingTop: "2em" }}>Boniface Makau</h2>
            <h4 style={{ color: "grey" }}>Software Engineer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              Skilled in both frontend and backend development. Front end
              development technologies include HTML, CSS, Javascript, react js,
              redux and LESS. The backend development skills are Python, Java,
              Django, Spring, Express, Mongoose, MySQL, and Node Js.
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />

            <h5>Phone</h5>
            <p>(614)772-7182</p>
            <h5>Email</h5>
            <p>bonifacemtk15@yahoo.com</p>

            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Experience</h2>
            <Experience
              startYear={2016}
              endYear={2019}
              jobName="Software Developer"
              jobDescription="Development of Web development curriculum.
              Provide ongoing maintenance, support, and enhancements in existing systems and platforms.
              Helped students develop and design websites.
              Helped students to debug their code.
              Provide recommendations for continuous improvements.
              Managed 40 students.
              Technology used : JavaScript, HTML 5,CSS and SQL"
            />
            <Experience
              startYear={2018}
              endYear={2019}
              jobName="Software Engineer"
              jobDescription="6-month Computer Science and Software Development Program.
                Completed all curriculum coursework including; React,  Redux, Node, Express, MongoDB, mocha, chai, Python, Django,
                C, JavaScript, Mongoose, and SQL. 
                Hands on experience with Frontend and Backend development.
                Skilled in the deployment of the projects on Heroku and MLab.
                Analyze, design and develop tests. 
                Utilized agile software development and Git workflow on all projects."
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Skills</h2>
            <Skills skill="javascript" progress={100} />
            <Skills skill="HTML/CSS" progress={100} />
            <Skills skill="NodeJS" progress={90} />
            <Skills skill="React" progress={100} />
            <Skills skill="Java" progress={100} />
            <Skills skill="Spring" progress={90} />
            <Skills skill="Python" progress={50} />
            <Skills skill="Redux" progress={85} />
            <h2>Education</h2>
            <Education
              startYear={2004}
              endYear={2008}
              schoolName="Kenyatta University"
              schoolDescription="Bachelor of Science (Biochemistry)"
            />

            <hr style={{ borderTop: "3px solid #e22947" }} />
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Resume;
