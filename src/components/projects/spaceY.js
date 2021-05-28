import React, { Component } from 'react';
import { Grid, Cell, Button } from "react-mdl";
import poster from "../img/spaceY/poster.jpg"

class SpaceY extends Component {
  render() {
    return (
      <div className="proj">
        <div style={{width:"80%", margin:"auto"}}>
        <Grid>
          <Cell col={12} style={{textAlign:'center', margin: 'auto'}}>
            <h1><strong>SpaceY</strong></h1>
            <h3>Photon Particle IO | PIR Sensor | HTML </h3>
            <div style={{margin:"auto", width: '70%'}}>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/F77k1sSP7SM" 
                title="YouTube video player" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div style={{paddingTop:'1em', maxWidth:"1000px"}} className="proj-img">
                <img src = { poster } alt="poster"/></div>
          </Cell>
        </Grid>
        <Grid>
          <Cell col={12}>
            <p>We participated in the Meeting of the Minds at Carnegie Mellon
                University in May 2019. It was a lot of fun to show case our 
                project with the students and staffs who attended the event.
            </p>
          </Cell>
        </Grid>
        <Grid>
          <Button colored ripple
                  style={{margin:'auto', textDecoration:'none', color:"black"}} 
                  href="/projects">Back</Button> 
          <Button colored ripple 
                  style={{margin:'auto', textDecoration:'none', color:"black"}}
                  rel="noopener noreferrer" target='blank'
                  href="https://github.com/julliatran/spaceY">
            Github</Button>
        </Grid>
        </div>
      </div>
    )
  }
}
export default SpaceY;