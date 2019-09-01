import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardText, 
        CardTitle, CardActions, Button, CardMenu, IconButton } from "react-mdl";
import Video from './video';
import throwing from '../img/hack112/throwing.gif';
import body from '../img/hack112/body.gif';
import team from '../img/hack112/team.JPG';

class Hack112 extends Component {
  render() {
    return (
      <div className="proj" style={{width: '80%', margin: 'auto'}}>
        <Grid>
          <Cell col={12} style={{textAlign:'center'}}>
            <h1><strong>Hack 112 - Basketball Simulator</strong></h1>
            <h3><strong>Python | PyGame | PyKinnect</strong></h3>
            <div style={{margin: 'auto'}}>
              <Video videoId='sthsFyCTXCs'/>
            </div>
          </Cell>
        </Grid>
        <Grid>
          <Cell col={12}>
            <h3>About</h3>
            <p>Basketball Simulator is a Kinect game, made using Pygame. This 
               game allows the user to shoot a basketball through Kinnect. 
            </p>
            <p>This project was made during the Hack 112 competition in 2018.
               The competition goes on for two days, with around 24 hours to 
               code. The game was made using PyGame, with our own algorithm that 
               simulates gravity for the basketball. The ball is attached to the
               player's left or right hand. When the ball is in the player's 
               hand and the hand accelerates to a certain speed, this counts as 
               a throw and so the ball would leave the player's hand in that 
               trajectory and fall down in a parabola path with acceleration.
            </p>
            </Cell>
            <Cell col={12}>
            <div style={{display:'flex', margin:'auto', flexWrap: 'wrap', 
                         justifyContent:"space-between", textAlign:'center'}}>
              <figure style={{fontStyle:'italic', color:'#447374'}}>
                <img className="proj-img "style={{maxWidth:"450px", height:'250px', margin:'auto'}} src={body} ></img>
                <figcaption>(Player's body matching)</figcaption>
              </figure>
              <figure style={{fontStyle:'italic', color:'#447374'}}>
                <img className="proj-img" style={{maxWidth:"450px",height:'250px', margin:'auto'}} src={throwing}></img>
                <figcaption>(Throwing ball)</figcaption>
              </figure>
            </div>
            </Cell>
            <Cell col={12}>
            <h3>Result</h3>
            <p>
              We were one of the 8 teams that won. Even though we didn't place
              in the top 3 teams, we won the "Most Ambitious Prize", also known 
              as the "Penguin Prize", a term coined by Professor Randy Pausch. 
            </p>
            <p>Below is a picture of my team smiling, prize in hand: 
            </p>
            <div>
              <figure style={{textAlign:'center', fontStyle:'italic', color:'#447374'}}>
                <div className="proj-img"><img src={team}></img></div>
                <figcaption>
                  (From left to right: Vikram Bhat, Daniel Cohen, Jullia Tran -
                  me, and Diva Marty)
                </figcaption>
              </figure>
            </div>
          </Cell>
        </Grid>
        <Grid>
          <Button colored ripple
                  style={{margin: 'auto', textDecoration: 'none'}}
                  href="/projects">Back</Button>
          <Button colored ripple
                  style={{margin: 'auto', textDecoration: 'none'}}
                  rel="noopener noreferrer" target='blank'
                  href="https://github.com/julliatran/BasketballSimulator">
            Github</Button>
        </Grid>
      </div>
    );
  }
}
export default Hack112;