import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import angelHack from '../img/angelHack.png';
class AngelHack extends Component {
  render() {
    return (
      <div className="ah" style={{width: '80%', margin: 'auto'}} >
        <Grid>
          <Cell col={12} style={{textAlign:'center'}}>
            <h1><strong>AngelHack Ho Chi Minh City 2019</strong></h1>
            <img src={angelHack} />
          </Cell>
        </Grid>
        <Grid>
          <Cell col={7} margin='auto' className='ah-left'>
            <p>
              On June 22, 2019, my team of four members participated
               in the Ho Chi Minh Hackathon, held at Fullbright University. There were
               around 50 teams who participated in this year's hackathon. There were 
               multiple challenges from IBM, Amazon and other local companies. 
               We chose to participate in the FE Credits challenge. There are 
               2 sub-challenges for FE Credits: the first challenge is to build a chat-bot to improve
               customer service; the second is to provide a model or solution that will
               improve customer's interractions with digital channels (Facebook, FE Website,...) 
               instead of their physical channel. We chose to tackle the second challenge.
            </p>
            <h3>Identifying the problem</h3>
            <p>
              In order to come up with a solution, we first tried to identify the cause of FE Credit's issue.
              While checking their digital channel (Facebook, Zalo and their website), we realized that
              when a customer raises a question on their page, there would be an auto-reply that directs
              the customer to FE Credit's physical channels (call FE Credit or travel to their office).
            </p>
            <h3>Challenges</h3>
            <p>
              Since we were given a dataset of FE Credit's customers, we planned on running a couple
              machine learning models on the dataset in order to 
            </p>
          </Cell>
          
    
          
        </Grid>
      </div>
    )
  }
}

export default AngelHack; 