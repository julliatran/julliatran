import React, { Component } from 'react';
import { Grid, Cell, Button } from 'react-mdl';
import rubiks from '../img/rubikspaint.png';
import Video from './video';

class Rubiks extends Component {
  render() {
    return (
      <div className="ah" style={{width: '80%', margin: 'auto'}} >
        <Grid>
          <Cell col={12} style={{textAlign:'center'}}>
            <h1><strong>Rubiks Paint</strong></h1>
            <div style={{margin: 'auto'}}><Video videoId='WErlUYfhH-k'/></div>
          </Cell>
        </Grid>
        <Grid>
          <Cell col={12}>
            <h3>About</h3>
            <p>
              This project was an end-of-term project for the class 15-112 Fundamentals of Programming & Computer Science. Each student
              has three weeks to complete a project, and is assigned a mentor to guide through the idea and process. Each project must satisfy
              a certain level of algorithmic complexity  
            </p>
            <h3>Challenges</h3>
            <p>
              We came up with a solution that adds more functionality to the existing website. After filling out some 
              parameters about the product they want to buy, their monthly income, family member, our algorithm will first
              suggest to the users differe products that best match the customer's buying ability. Instead of consulting at FE 
              Credit's banks, the users can now browse through the suggested items themselves, therefore FE Credit can save money on 
              customer service.
            </p>
            <h3>Result</h3>
          </Cell>
        </Grid>
        <Grid>
          <Button colored ripple style={{margin: 'auto', textDecoration: 'none'}} href="/projects" >Back</Button> 
          <Button colored ripple style={{margin: 'auto', textDecoration: 'none'}} rel="noopener noreferrer" target='blank'  href="https://github.com/julliatran/rubikspaint">Github</Button>
        </Grid>
        
        
      </div>
    );
  }
}
export default Rubiks; 