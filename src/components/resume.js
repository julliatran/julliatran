import React, { Component } from 'react';
import { Grid, Cell } from "react-mdl";

import avatar from './img/avatar.jpeg';
class Resume extends Component {
  render() {
    return (
      <div> 
        <Grid>
          <Cell col={4}>
            <div className="proj-img">
              <span className="helper"></span>
              <img src={avatar} alt="avatar"/>
            
            <div>
              <h2>Jullia Tran</h2>
              <hr style={{borderTop: '3px solid #178788', width:'60%', margin:"auto"}}/>
              <h5>Address</h5>
              <p>5000 Forbes Ave,</p>
              <p>Pittsburgh, PA 15213</p>
              <p>USA</p>
              <h5>Email</h5>
              <p>tranjullia@gmail.com</p>
            </div>
            </div>
          </Cell>
          <Cell className="res-right-col" col={8}>
              <div className="res-hiframe">
                <img class="ratio" src="http://placehold.it/17x22" alt="iframe placeholder"/>
                <iframe title="Resume pdf" src="https://drive.google.com/file/d/18EOR70T0fWN2e8UnoS7bZXZfuofxZ7db/preview" width="auto" height="100%"></iframe>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}
export default Resume;