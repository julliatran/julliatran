import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardText, 
        CardTitle, CardActions, Button, CardMenu, IconButton } from "react-mdl";
import Video from './video';
import poster from "../img/spaceY/poster.jpg"
//F77k1sSP7SM
class SpaceY extends Component {
  render() {
    return (
      <div className="proj" style={{width: '80%', margin: 'auto'}}>
        <Grid>
          <Cell col={12} style={{textAlign:'center', margin: 'auto'}}>
            <h1><strong>SpaceY</strong></h1>
            <h3>Photon Particle IO | PIR Sensor | HTML </h3>
            <div style={{margin: 'auto'}}>
              <Video videoId='F77k1sSP7SM'/>
            </div>
            <div style={{paddingTop:'1em'}}>
                <img style={{width:'900px'}} src = { poster }/></div>
            <p>We participated in the Meeting of the Minds at Carnegie Mellon
                University in May 2019. It was a lot of fun to show case our 
                project with the students and staffs who attended the event.
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
                  href="https://github.com/julliatran/spaceY">
            Github</Button>
        </Grid>
      </div>
    )
  }
}
export default SpaceY;