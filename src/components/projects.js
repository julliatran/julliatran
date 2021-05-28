import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardText, CardTitle, CardActions, Button, CardMenu, IconButton } from "react-mdl";
import RB from './img/rubikspaint.png';
import cnn from './img/cnn.png';
import spaceY from './img/spaceY.png';
import bball from './img/bball.png';
import webs from './img/webs/citydata.png';

const CellElem = props => 
    <Cell col={props.cellSz} offsetTablet={1}>
      <div className="project-grid">
        <Card shadow={5} style={{width: '500px', margin: 'auto',  borderRadius: "10px"}}>
          <CardTitle style={{color: '#fff', height: '200px', 
            background: `url(${props.titleBg}) center / cover`}}>
          </CardTitle>
          <CardText>
            <h1><strong>{props.title}</strong></h1>
            <p><strong>{props.langs}</strong></p>
            <p>
              { props.bullets.map((bullet) => { return <li> {bullet} </li>}) }
            </p>
          </CardText>
          <CardActions border>
          {props.githubLink &&
            <Button colored ripple style={{textDecoration: 'none'}}
                    href= {props.githubLink} 
                    rel="noopener noreferrer" target='blank'>
                      GitHub</Button>}
            {props.detailsLink &&
            <Button colored ripple style={{textDecoration: 'none'}}
             href={props.detailsLink}>Learn More</Button>}
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
          </CardMenu>
        </Card>
      </div>
    </Cell>;

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    // PYTHON - RubiksPaint, Webscraper 
    if(this.state.activeTab === 0) {
      return (
        <Grid>
          {/* TODO: change this content */}
          <CellElem cellSz = "4"
                    titleBg="https://miro.medium.com/max/1210/1*E7zhhan7Sp7hats4jkKdeA.png"
                    title ="Ray Tracer"
                    langs = "C++ | Computer Graphics"
                    bullets={["Implemented a modern package for 3D modeling, rendering, and animation similar to 3D tools Maya and Blender", "Developed an efficient implementation of ray-scene geometry queries with multi-bounce light and environmental light support"]}
                    detailsLink="raytrace"
                    />
          <CellElem cellSz = "4"
                    titleBg={RB}
                    title ="Rubiks Paint"
                    langs = "Python | Panda3D | NumPy | SciPy"
                    bullets={["One of 10 projects that got chosen out of around 500 projects", "Showcased at Carnegie Mellon University 15-112 Fall 2018 class"]}
                    githubLink="https://github.com/julliatran/rubikspaint"
                    detailsLink="rubiksPaint"
                    />
          <CellElem cellSz = "4"
                    titleBg={webs}
                    title ="Webscraper"
                    langs = "Python | BeautifulSoup4 | Pandas | JupyterNB"
                    bullets={["Webscrapes through city-data.com to collect data from almost 7000 cities in the US"]}
                    githubLink="https://github.com/julliatran/webscrapper/tree/master/Webscrapper"
                    detailsLink="webscraper"
                    />

        </Grid>
      )}
    /* COMPETITIONS */
    else if(this.state.activeTab === 1) {
      return (
        <Grid >
          <CellElem cellSz = "6"
                    titleBg="https://cdn-az.allevents.in/banners/f0db8970-8e2e-11e9-8097-7f22a079d7fe-rimg-w526-h295-gmir.jpg" 
                    title ="AngelHack Vietnam 2019"
                    langs="NodeJS | HTML/CSS | C++"
                    bullets={["Finalist/Second place in the FE Credit Challenge", "Created a software customer service solution"]}
                    githubLink="https://github.com/julliatran/AngelHack2019"
                    detailsLink="angelHack"/>
          <CellElem cellSz = "6"
                    titleBg={bball} 
                    title ="Hack 112 - Basketball Simulator"
                    langs="Python | PyGame | PyKinnect"
                    bullets={["Won 'Most Ambitious Project'", "Top 8 out of around 50 teams"]}
                    githubLink="https://github.com/julliatran/BasketballSimulator"
                    detailsLink="hack112"/>
        
        </Grid>                  
      )}
    // MACHINE LEARNING
    else if(this.state.activeTab === 2) {
      return (
        <Grid >
          <CellElem cellSz = "6"
                    titleBg="https://miro.medium.com/max/1210/1*E7zhhan7Sp7hats4jkKdeA.png"
                    title ="VGG16 AutoEncoder"
                    bullets={["Implemented and tested using Keras", "Used pretrained VGG16 model and built a decoder to test on eddy currents dataset for feature extractions"]}
                    githubLink="https://github.com/julliatran/autoencoders/blob/master/vgg16.ipynb"
                    />
          <CellElem cellSz = "6"
                    titleBg={cnn}
                    title ="CNN AutoEncoder"
                    bullets={["Implemented and tested using Keras", "Built the model to test on eddy currents dataset for feature extractions"]}
                    githubLink="https://github.com/julliatran/autoencoders/blob/master/cnn.ipynb"
                    />
        </Grid>
      )}
    
    // Hardware
    else if(this.state.activeTab === 3) {
      return (
        
        <Grid>
          <Cell col={12}>
            <div className="project-grid">
              <Card shadow={5} style={{width: '500px', margin: 'auto',  borderRadius: "10px"}}>
                <img src={spaceY} height='200px'/>
                <CardText>
                  <h1><strong>SpaceY</strong></h1>
                  <p><strong>Photon Particle IO | PIR Sensor | HTML</strong></p>
                  <p>
                    <li>Participated in the Meeting of the 
                        Minds at CMU in May 2019</li>
                  </p>
                </CardText>
                <CardActions border>
                  <Button colored ripple rel="noopener noreferrer" target='blank'
                          href="https://github.com/julliatran/spaceY">GitHub</Button>
                  <Button colored ripple style={{textDecoration: 'none'}}
                          href="/spaceY">Learn More</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                </CardMenu>
              </Card>
            </div>
          </Cell>
        </Grid>
      )
    }
  }

  render() {
    return (
      <div className="category-tabs">
        <Tabs style ={{background:"white", paddingLeft:"6%"}} activeTab={this.state.activeTab} 
               onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>.py/C++</Tab>
          <Tab>Hacks</Tab>
          <Tab>ML</Tab>
          <Tab>Hardware</Tab>
        </Tabs>  
        <div className="content">{this.toggleCategories()}</div>
      </div>
    );
  }
}
export default Project;