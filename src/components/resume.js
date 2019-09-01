import React, { Component } from 'react';
import { Grid, Cell } from "react-mdl";

import avatar from './img/avatar.jpeg';
class Resume extends Component {
  render() {
    return (
      <div> 
        <Grid>
          <Cell col={4} offsetTablet={1}>
            <div style={{textAlign: 'center'}}>
              <img
                src={avatar}
                alt="avatar"
                style={{height:'400px', padding:'0.5em'}}
              />
            </div>
            <div style={{paddingLeft:'1em'}}>
              <h2>Jullia Tran</h2>
              <hr style={{borderTop: '3px solid #178788', width:'60%'}}/>
              <h5>Address</h5>
              <p>5000 Forbes Ave,</p>
              <p>Pittsburgh, PA 15213</p>
              <p>USA</p>
              <h5>Email</h5>
              <p>tranjullia@gmail.com</p>
            </div>
          </Cell>
          <Cell className="resume-right-col" col={8}>
          <iframe className="proj-img" src="https://drive.google.com/file/d/18EOR70T0fWN2e8UnoS7bZXZfuofxZ7db/preview" width="640" height="480"></iframe>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Resume;