import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Image from 'react-bootstrap/Image';
import coffee from './img/coffee.jpg';
import vsc from './img/vsc.png';

class Projects extends Component {
  render() {
    return (
      <div className="proj" style={{width: '80%', margin: 'auto'}}>
        <Grid></Grid>
        <Grid>
          <Cell col={4}></Cell>
          <Cell col={4}>
            <Image src={coffee} fluid />
          </Cell>
          <Cell col={4}></Cell>
        </Grid>
        <Grid>
          <Cell col={1}></Cell>
          <Cell col={10}>
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
          <Cell col={1}></Cell>
        </Grid>
        <Grid>
          <div className="proj-img" style={{textAlign:"center"}}><img style={{maxWidth:"600px", margin:"auto"}} src={vsc}/></div>
        </Grid>
      </div>
    );
  }
}
export default Projects;