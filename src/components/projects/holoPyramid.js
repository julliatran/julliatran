import React, { Component } from 'react';
import { Grid, Cell, Button } from "react-mdl";

import duckH from  '../img/holoPyramid/hologram.gif';
import rubik from  '../img/holoPyramid/rubik.png';
import scale from  '../img/holoPyramid/scale.png';
import duck from  '../img/holoPyramid/duck.png';
import diagram from  '../img/holoPyramid/diagram.png';
import team from  '../img/holoPyramid/capstoneTeammates.png';
class SpaceY extends Component {
  render() {
    return (
      <div className="proj">
        <div style={{width:"80%", margin:"auto"}}>
        <Grid>
          <Cell col={12} style={{textAlign:'center', margin: 'auto'}}>
            <h1><strong>HoloPyramid</strong></h1>
            <h3>SystemVerilog | FPGA | Real-time Video Feed</h3>
            <div style={{margin:"auto", width: '70%'}}>
              <iframe title="Final capstone video" src="https://drive.google.com/file/d/1zBweCyetnJsGK0QYL23omE9ijamcvmz0/preview" width="640" height="480"></iframe>
            </div>
            <div style={{paddingTop:'1em', maxWidth:"1000px"}} className="proj-img">
              <iframe title="Final capstone poster" src="https://drive.google.com/file/d/1RN5bl7wmo3VjGVxGsRmIVRC5EjChgVBI/preview" width="700" height="480"></iframe>
            </div>
          </Cell>
        </Grid>
        <Grid>
          <Cell col={12}>
            <h3>What is HoloPyramid?</h3>
            <p>
              Holograms and holographic illusions seem the realm of science fiction,
              but the technology is here, and only a phone app and a DIY plastic pyramid 
              away–essentially, holographic illusions are currently largely used for 
              entertainment, gimmicks, and at a relatively small scale.
            </p>
            <p>
              Our goal is to leverage this existing technology to create a highly 
              useful and immersive presentation tool: a holographic pyramid that 
              displays a scaled up 3D illusion of a smaller object from a local studio. 
              Furthermore, this presentation tool would display the object using a 
              real-time video feed, thus providing a level of interaction not possible
              with digital renders or simple photos; the presenter would be able 
              to easily move the object and also to display moving objects, with 
              no overhead of preparation or rendering time. Thus, our product would 
              be invaluable for archeological researchers and scientists, who may 
              need to show an artifact or small piece of equipment to a large audience. 
              Our design goals are key characteristics necessary for a high-quality 
              presentation tool: video frame quality and resolution, enlargement 
              of presented objects, low latency, stable timing, and success of 
              the three dimensional illusion.
            </p>
            <p>
              This project was created as part of our capstone class at Carnegie Mellon University, 18-500,
              in spring of 2021.
            </p>
          </Cell>
        </Grid>
        <Grid style={{display:"flex",
                      textAlign:"center",
                      justifyContent: "space-around",
                      alignItems: "flex-start"}}>
          <Cell col={12}>
            <figure>
                <img src={duckH} style={{height:"auto",width:"100%", maxWidth:"600px"}} alt="Hologram of a rubber duck, multiple sides"/>
                <figcaption>Hologram of a rubber duck, multiple sides</figcaption>
            </figure>
          </Cell>
        </Grid>
        <Grid>
          <Cell col={12}>
            <h3>High-level Solution Approach</h3>
            <p>
              This project make use of four OV7670 cameras, communicating and controlled using 
              an FPGA. The input from the camera is decoded inside the FPGA (image decoder), then stored
              into four buffers of embedded ram (one for each camera). These buffers then are combined into a frame.
              This frame is then processed with our image signal processing module where chroma key (background-removal) is implemented.
              After the frame is processed, the output is fed into our VGA protocol module and output into our display (50" TV) through a VGA DAC.
            </p>
            <p>
              The OV7670 cameras live in our live studio, where lighting and the
              displayed object can be interacted with. This live studio also house
              the FPGA. The TV displays has our in-house pyramid design sitting on top 
              in the center of the TV. The TV and the pyramid is where the illusion of the
              hologram appears, and where live-feed of interactions between the presenter
              and the object is shown.
            </p>
          </Cell>
        </Grid>
        <Grid style={{display:"flex",
                      textAlign:"center",
                      justifyContent: "space-around",
                      alignItems: "flex-start"}}>
          <Cell col={12}>
            <figure>
                <img src={diagram} style={{height:"auto",width:"100%", maxWidth:"600px"}} alt="Diagram of our solution approach"/>
                <figcaption>Diagram of our solution approach</figcaption>
            </figure>
          </Cell>
        </Grid>
        <Grid>
          <Cell col={12}>
            <h3>More Information</h3>
            <p>
              More information about our project can be found <a href="http://course.ece.cmu.edu/~ece500/projects/s21-teamc4/">here.</a>
              This site includes our final project presentation, and documentations, as well as our weekly status report.
            </p>
          </Cell>
        </Grid>
        <Grid style={{display:"flex",
                      textAlign:"center",
                      justifyContent: "space-around",
                      alignItems: "flex-start"}}>
          <Cell col={4}>
            <figure>
                <img src={rubik} style={{height:"auto",width:"100%", maxWidth:"600px"}} alt="Hologram of a rubiks cube"/>
                <figcaption>Hologram of a rubiks cube</figcaption>
            </figure>
          </Cell>
          <Cell col={4}>
            <figure>
                <img src={scale} style={{height:"auto",width:"100%", maxWidth:"600px"}}
                alt="Hologram of a rubber duck next to actual size of ruber duck for scale purposes"/>
                <figcaption>Hologram of a rubber duck next to actual size of ruber duck for scale purposes</figcaption>
            </figure>
          </Cell>
          <Cell col={4}>
            <figure>
                <img src={duck} style={{height:"auto",width:"100%", maxWidth:"600px"}} alt="Hologram of a of a rubber duck from the side"/>
                <figcaption>Hologram of a of a rubber duck from the side</figcaption>
            </figure>
          </Cell>
        </Grid>
        <Grid>
          <Cell col={12}>
            <h3>Our Team</h3>
          </Cell>
        </Grid>
        <Grid style={{display:"flex",
                      textAlign:"center",
                      justifyContent: "space-around",
                      alignItems: "flex-start"}}>
          <Cell col={12}>
            <figure>
                <img src={team} style={{height:"auto",width:"100%", maxWidth:"600px"}} alt="Our Team"/>
                <figcaption>Our Team (top-left: Jullia Tran, top-right: Grace An, bottom: Breyden Wood)</figcaption>
            </figure>
          </Cell>
        </Grid>
        <Grid>
          <Button colored ripple
                  style={{margin:'auto', textDecoration:'none', color:"black"}} 
                  href="/projects">Back</Button> 
          <Button colored ripple 
                  style={{margin:'auto', textDecoration:'none', color:"black"}}
                  rel="noopener noreferrer" target='blank'
                  href="https://github.com/julliatran/c4HoloPyramid">
            Github</Button>
        </Grid>
        </div>
      </div>
    )
  }
}
export default SpaceY;