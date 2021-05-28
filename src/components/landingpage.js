import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import background from "./img/background.JPG";

class Landing extends Component {
  render() {
    return (
      <div className="landing-page">     
        <Grid style={{margin:"auto"}} className="landing-grid">
          <Cell col={4}>
            <div className="proj-img">
              <span className="helper"></span>
              <img src={background} alt="background"/>
            </div>
              
          </Cell>
          <Cell col={8}>
            <div className="banner-text">
              <div className="v-align">
                <h1>I'm Jullia Tran</h1>
                <hr/>
                <p>Python | C | System Verilog | Webapps </p>
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
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Landing;