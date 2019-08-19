import React, { Component } from 'react';
import { Grid, Cell, Button } from 'react-mdl';
import angelHack from '../img/angelHack.png';
import fb1 from '../img/AH/fb1.png';
import fb2 from '../img/AH/fb2.png';
import ppt from '../img/AH/ppt.png';
import interface_ from '../img/AH/interface.jpg';
import finalist from '../img/AH/finalist.jpg';
import mentor from '../img/AH/mentor.jpg';
import work from '../img/AH/work.jpg';

class AngelHack extends Component {
  render() {
    return (
      <div className="proj" style={{width: '80%', margin: 'auto'}}>
        <Grid>
          <Cell col={12} style={{textAlign:'center'}}>
            <h1><strong>AngelHack Ho Chi Minh City 2019</strong></h1>
            <h3><strong>NodeJS | HTML/CSS | C++</strong></h3>
            <img src={angelHack}/>
          </Cell>
        </Grid>
        <Grid>
          <Cell col={12}>
            <img src={ppt} height="200px" 
                style={{float: 'right', margin: '0px 0px 15px 15px'}}/>
            <p>
              On June 22, 2019, my team of four members participated
              in the Ho Chi Minh Hackathon, held at Fullbright University. 
              There were around 50 teams who participated in this year's 
              hackathon. There were multiple challenges from IBM, Amazon and 
              other local companies. We chose to participate in the FE Credits 
              challenge. There are 2 sub-challenges for FE Credits: the first 
              challenge is to build a chat-bot to improve customer service; the 
              second is to provide a model or solution that will improve 
              customer's interractions with digital channels 
              (Facebook, FE Website,...) instead of their physical channel. 
              We chose to tackle the second challenge.
            </p>
            <br style={{clear:"both"}} />
            <h3>What We Noticed at First...</h3>
            <figure style={{float: 'right',
                            margin: '0px 0px 15px 15px',
                            fontStyle:'italic',
                            textAlign:'center',
                            color:'#447374'}}>
              <img src={fb1} height="100px"/>
              <img src={fb2} height="100px"/>
              <figcaption>(Similar customer's questions we found)</figcaption>
            </figure>
            <p>
              In order to come up with a solution, we first tried to identify 
              the cause of FE Credit's issue. We found a lot of comments like 
              this one on their Facebook page: “I want to buy a satria 
              motorbike, how much should I loan?” The current solution is to 
              answer this question mainly through their physical channel, 
              either call or travel to their office.
            </p>
            <br style={{clear:"both"}} />
            <h3>Problems We Identified</h3>
            <p>
              With FE Credit's current website, it's hard to determine 
              irresponsible customers. We have no idea whether the customer is 
              borrowing too much or too little. This in turn affect 
              profitability because irresponsible customers might not be able 
              to pay FE Credit back. Also, users need to approach a different 
              party to do research on ideal loans and prices of that products.
            </p>
            <figure style={{float: 'right', margin: '0px 0px 15px 15px',
                    textAlign:'center', fontStyle:'italic', color:'#447374'}}>
              <img src={interface_} height="500px" />
              <figcaption>(Our solution's interface)</figcaption>
            </figure>
            <h3>Our Solution</h3>
            <p>
              We came up with a solution that adds more functionality to the 
              existing website. After filling out some parameters about the 
              product they want to buy, their monthly income, family member, 
              our algorithm will first suggest to the users differe products 
              that best match the customer's buying ability. Instead of 
              consulting at FE Credit's banks, the users can now browse through 
              the suggested items themselves, therefore FE Credit can save 
              money on customer service. 
            </p>
            <p>
              As there is a direct correlation between the amount of steps and 
              customer drop off, we’re reducing those steps by allowing the 
              consumers to stay on FE Credit’s page instead of leaving and 
              doing their own research. We can now track customers’ activities 
              and time to add onto the customers’ dataset and determine if they 
              are trustworthy.
            </p>
            
            <h3>Our Next Step</h3>
            <p>
              For our next step, we can integrate Nucene and Elastic to 
              accommodate bigger product dataset. More features can be added 
              to improve model accuracy of targeted customer. We would also be 
              able to sell product ads. Through knowing more about what the 
              customers want, we can better advertise more products that fit 
              the customer's needs, hence increasing the amount of customers 
              seeking for FE Credit's loan. This, in turn, creates a cycle in 
              which FE Credit can keep improving.
            </p>
            <h3>The Result</h3>
            <p>
              We were part of 3 teams selected for this challenge, and one of 
              14 teams for all challenges to become the finalists. We didn't end 
              up winning in the end for our challenge. However, FE Credit did 
              reach out to us. Maybe they will implement our solution after all.  
            </p>
          </Cell>
        </Grid>
        <Grid >
          <Cell  col={12} >
            <div style={{display:'flex', margin:'auto', flexWrap: 'wrap', 
                         justifyContent:"space-between", fontStyle:'italic', 
                         textAlign:'center', color:'#447374'}}>
              <figure>
                <img src={mentor} height='200px' alt="Talking to mentor" style={{position:"relative"}}/>
                <figcaption>(My group talking to our mentor)</figcaption>
              </figure>
              <figure>
                <img src={work} height='200px' alt="Hard at work" style={{position:"relative"}}/>
                <figcaption>(We were hard at work)</figcaption>
              </figure>
             
              <figure>
                <img src={finalist}height='200px' style={{position:"relative"}}/>
                <figcaption>(Our finalist-pitch)</figcaption>
              </figure>
              
            </div>
          </Cell>
          <Button style={{margin:'auto', textDecoration: 'none'}} 
                  href="/projects" >Back</Button> 
          <Button colored ripple 
                  style={{margin: 'auto', textDecoration: 'none'}}
                  rel="noopener noreferrer" target='blank'
                  href="https://github.com/julliatran/AngelHack2019">
                    Github</Button>
        </Grid> 
      </div>
    )
  }
}

export default AngelHack; 