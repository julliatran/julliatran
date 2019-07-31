import React, { Component } from 'react';
import { Grid, Cell } from "react-mdl";
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import avatar from '../img/avatar.jpeg';
class Resume extends Component {
  render() {
    return (
      <div> 
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src={avatar}
                alt="avatar"
                style={{height:'300px', padding:'0.5em'}}
              />
            </div>
            <div style={{padding:'2em'}}>
              <h2>Jullia Tran</h2>
              <hr style={{borderTop: '3px solid #833fb2', width:'50%'}}/>
              <p>faksjdhfkasdhfkjadsh</p>
              <hr style={{borderTop: '3px solid #833fb2', width:'50%'}}/>
              <h5>Address</h5>
              <p>5000 Forbes Ave,</p>
              <p>Pittsburgh, PA 15213</p>
              <p>USA</p>
              <h5>Email</h5>
              <p>tranjullia@gmail.com</p>
            </div>
            
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>
            <Education 
              startYear={2018}
              endYear={2022}
              schoolName="Carnegie Mellon University"
              schoolDescription="hjasdflasdkfhalksjdfhlkajhsdflkajh"
            />
            <Education 
              startYear={2014}
              endYear={2018}
              schoolName="Holderness School"
              schoolDescription="hjasdflasdkfhalksjdfhlkajhsdflkajh"
            />
            <hr style={{borderTop: '3px solid #e2297'}} />
            <h2>Experience</h2>
            <Experience
              startYear="May"
              endYear="September 2019"
              jobName="Somotsoft - Software Engineer"
            />
            <hr style={{borderTop: '3px solid #e2297'}}/>
            <h2>Skills</h2>
            <Skills
            />
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Resume;