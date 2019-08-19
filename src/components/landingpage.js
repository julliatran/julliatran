import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import avatar from "./img/avatar.jpeg";
import background from "./img/background.JPG";
import { Parallax, ParallaxBanner } from "react-scroll-parallax";
{/*
  <img 
                src={avatar}
                alt="avatar"
                className="avatar-img"
              /> */}

const ParallaxImage = () => (
  <Parallax y={[-20, 20]} tagOuter="figure">
      <img src={background} style={{width: '75%', margin: 'auto'}}/>
  </Parallax>
);

class Landing extends Component {
  render() {
    return (
      <div style={{width: '100%', margin: 'auto'}}> 
        <Grid className="landing-grid">
          <Cell col={12} >
              <img src={background} alt="Picture of Jullia Tran" style={{borderRadius: "10px", width:"75%", position: "relative"}} />
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
      </div>
    );
  }
}
export default Landing;