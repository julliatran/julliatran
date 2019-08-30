import React, { Component } from 'react';
import { Grid, Cell, Card, CardText, CardTitle, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import cloud from "./img/clouds.JPG";
import background from "./img/background.JPG";
import RB from './img/rubikspaint.png';
import cnn from './img/cnn.png';
import spaceY from './img/spaceY.png';
import bball from './img/bball.png';
{/*
  <img 
                src={avatar}
                alt="avatar"
                className="avatar-img"
              /> */}


class Landing extends Component {
  render() {
    return (
      <div style={{backgroundImage: `url(${cloud})`,
                   backgroundRepeat: "no-repeat",
                   backgroundSize: "cover",
                   width: '100%', left:"0px", right:"0px"}}> 
        
        <Grid className="landing-grid" >
            
            <Cell col={4} style={{padding: "2em", 
                                  margin:"auto", backgroundImage: `url(${background})`,
                                  height:"350px", backgroundSize:"cover"}}>
                
            </Cell>
            <Cell col={8}  style={{height:"350px"}}>
              <div className="banner-text">
                <h1>I'm Jullia Tran</h1>
                <hr/>
                <p>Python | C | Machine Learning | HTML/CSS | React </p>
              
                <div className="social-links">
                  {/* LinkedIn */}
                  <a href="https://www.linkedin.com/in/jullia-tran-896922184/" 
                    rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-linkedin-square" aria-hidden="true"/>
                  </a>
                  {/* Github */}
                  <a href="https://github.com/julliatran" 
                    rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-github-square" aria-hidden="true"/>
                  </a>
                  {/* YouTube */}
                  <a href="https://www.youtube.com/channel/UCAJyvelCfya76Nk0VLQvWYA?view_as=subscriber"
                    rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-youtube-square" aria-hidden="true"/>
                  </a>
                </div>
                </div>
            </Cell>
        </Grid>
        <Grid noSpacing>
        
        </Grid>
        
      </div>
    );
  }
}
export default Landing;