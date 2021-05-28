import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Image from 'react-bootstrap/Image';
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
              <img src={coffee}/>
            </div>
          </Cell>
        </Grid>
        <Grid className="landing-grid">
          <Cell col={12}>
            <h1><strong>Hello! I'm Jullia Tran.</strong></h1>
            <p>I'm from Ho Chi Minh City, Vietnam, and I'm currently a sophomore
              at Carnegie Mellon University studying Electrical and Computer
              Engineering. For highschool, I went to Holderness School. 
            </p>
            <p>My interests include computers, graphics, and visual arts. In my
              free time, I enjoy traveling, rock climbing, playing squash, and eating.</p>
            <h3>Why this website was built</h3>
            <p>I wanted to create a space in which I can better explain and 
               document my growth as a student as my career progresses. I also 
               just want to have a website to display my artworks that I worked 
               on throughout the year because otherwise, they are just left stashed
               away in my home.
            </p>
            <h3>How this website was built</h3>
            <p>I built this website using React. The main library I used for the
              interface is react-mdl. I used react-router-dom for routing between
              pages. For my art portfolio, I used react-grid-gallery for the grid
              layout.
            </p>
            <p>I used Visual Studio Code to write this website. I usually use Sublime
              to code but I soon realized that navigating between files was quite
              difficult in Sublime.
            </p>
          </Cell>
        </Grid>
        <Grid>
          <Cell col={12}>
          <div className="proj-img">
              <span className="helper"></span>
              <img src={vsc}/>
            </div>
          </Cell>
        </Grid>
        </div>
        </div>
    );
  }
}
export default Projects;