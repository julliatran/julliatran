import React, { Component } from 'react';
import { Grid, Cell, Button } from 'react-mdl';
import rubiks from '../img/rubikspaint.png';
import Video from './video';

class Rubiks extends Component {
  render() {
    return (
      <div className="ah" style={{width: '80%', margin: 'auto'}}>
        <Grid>
          <Cell col={12} style={{textAlign:'center'}}>
            <h1><strong>Rubiks Paint</strong></h1>
            <div style={{margin: 'auto', width:'900px',height:'600px'}}>
              <Video videoId='WErlUYfhH-k'/>
            </div>
          </Cell>
        </Grid>
        <Grid>
          <Cell col={12}>
            <h3>About</h3>
            <iframe style={{margin: 'auto',
                            float:'right',
                            top: 0,
                            left: 0,
                            width: "400px",
                            height: "250px"}} 
                            src={`https://www.youtube.com/embed/oApRG1qsmDA`} 
                            frameBorder="0"/>
            <p>
              This project was an end-of-term project for the class 15-112 
              Fundamentals of Programming & Computer Science. Each student
              has three weeks to complete a project, in which the project 
              must satisfy a certain level of algorithmic complexity and 
              demonstrate their understanding of the materials presented in the 
              class.
            </p>
            <p>
              Originally, I was going to create a rubiks cube solver. However, 
              through a quick research, I realized that a lot of the people who 
              took the class already did this idea for their project. At the 
              time, I was interested in pixel art and came across videos like 
              this one on the right.
            </p>
            <p>
              In the end, I chose to create Rubiks Paint. Rubiks Paint allows 
              the user to "paint" an imported .jpg image using only rubiks 
              cube. The program will show the user how the cube should be 
              rotated with a 3D cube on screen, rotating the solution. The user 
              can hit spacebar to loop through the moves or select the speed to 
              slow down to easily follow the solutions.
            </p>
            <br style={{clear:"both"}} />
            <h3>Challenges</h3>
            <p>
              The main challenge I faced was coming up with the algorithm. 
              There were a lot of code to solve the rubiks cube but there were 
              not any code available for the backward algorithm. I had to buy 
              a rubiks cube and use it as a reference point. My algorithm would 
              search for a target color in the layer that is the easiest first, 
              and would solve it acording to the position of the target piece.
            </p>
            <p>
              I also faced the challenge of learning how to use Panda3d library.
              There weren't a lot of forums or threads of errors when using 
              Panda3d at the time so I really had to stick to the documentations
              provided on their website.
            </p>
            <p>
              Another challenge I faced was manipulating the image so that the 
              image inserted by the user can be processed to show the correct
              amount of pixels (since each pixel represents a square on the 
              rubiks cube) and has only 6 colors. I used scipy and numpy library
              for this part.
            </p>
            <h3>Result</h3>
            <p>
              After I submitted my project, I was invited to showcase my work, 
              along with 9 other people in front of both sections of the class
              consisting of around 500 people. I didn't end up winning but 
              it was a really cool experience.
            </p>
          </Cell>
        </Grid>
        <Grid>
          <Button colored ripple
                  style={{margin: 'auto', textDecoration: 'none'}} 
                  href="/projects">Back</Button> 
          <Button colored ripple 
            style={{margin: 'auto', textDecoration: 'none'}}
            rel="noopener noreferrer" target='blank'
            href="https://github.com/julliatran/rubikspaint">Github</Button>
        </Grid>
        
        
      </div>
    );
  }
}
export default Rubiks; 