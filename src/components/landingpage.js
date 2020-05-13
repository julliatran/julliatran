import React, { Component } from 'react';
import { Grid, Cell, Card, CardText, CardTitle, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import cloud from "./img/clouds.JPG";
import background from "./img/background.JPG";

{/*<Cell col={4} style={{padding: "2em", 
                                  margin:"auto", backgroundImage: `url(${background})`,
                                  height:"350px", backgroundSize:"cover"}}>
            </Cell>*/}

class Landing extends Component {
  render() {
    return (
      <div className="landing-page">
        
        {/*<Grid className="landing-grid" style={{margin:"auto"}}>
            <Cell offsetTablet={2} offsetDesktop={4}>
              <div className="proj-img">
                <img src={background} style={{maxHeight: "530px"}}/>
              </div>
            </Cell>
    </Grid> style={{backgroundImage: `url(${cloud})`,
                   backgroundRepeat: "no-repeat",
                   backgroundSize: "cover",
                   width: '100%', left:"0px", right:"0px", margin:"auto", textAlign:"center"}}*/}
        <Grid style={{margin:"auto"}} className="landing-grid">
          <Cell col={6}>
            <div className="proj-img">
                <img src={background}/>
            </div>
          </Cell>
          <Cell col={6}>
            <div className="banner-text">
              <h1>I'm Jullia Tran</h1>
              <hr/>
              <p>Python | C | Machine Learning | HTML/CSS | React </p>
              <h1>
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
                </h1>
            </div>
          </Cell>
        </Grid>
        {/*<Grid><Cell hideDesktop={true} hideTablet={true} style={{padding:'6em'}}></Cell></Grid>*/}
        
      </div>
    );
  }
}
export default Landing;