import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import coffee from './img/coffee.jpg';
import vsc from './img/vsc.png';

class Projects extends Component {
  render() {
    return (
      <div className="proj">
        <div style={{width:"80%", margin:"auto"}}>
        <Grid >
          <Cell col={12}>
            <div className="proj-img">
              <span className="helper"></span>
              <img src={coffee}  style={{width:"80%", maxWidth:"400px"}} max alt="profile"/>
            </div>
          </Cell>
        </Grid>
        <Grid className="landing-grid">
          <Cell col={12}>
            <h1><strong>Hello! I'm Jullia Tran.</strong></h1>
            <p>I grew up in Ho Chi Minh City, Vietnam and went to high school and college in the United States.
            </p>
            <p>My interests include technology and visual arts. In my
              free time, I enjoy traveling, rock climbing, playing squash, and eating.</p>
            <h3>Why was this website built?</h3>
            <p>I wanted to create a space where I can better explain some of the projects
               I've worked on. I also want to display some of my artworks.
            </p>
            <h3>How was this website built?</h3>
            <p>I built this website using React. The main library I used for the
              interface is react-mdl. I used react-router-dom for routing between
              pages. For my art portfolio, I used react-grid-gallery for the grid
              layout.
            </p>
          </Cell>
        </Grid>
        <Grid>
          <Cell col={12}>
          <div className="proj-img">
              <span className="helper"></span>
              <img src={vsc} alt="code of the website"/>
            </div>
          </Cell>
        </Grid>
        </div>
        </div>
    );
  }
}
export default Projects;