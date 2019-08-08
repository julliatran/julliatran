import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardText, CardTitle, CardActions, Button, CardMenu, IconButton } from "react-mdl";
import RB from '../img/rubikspaint.png';
import cnn from '../img/cnn.png';
import spaceY from '../img/spaceY.png';
import bball from '../img/bball.png';
class Project extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    /* COMPETITIONS */
    if(this.state.activeTab === 0) {
      return (
        <Grid>
          <Cell col={6}>
            <div className="project-grid">
              <Card shadow={5} style={{width: '500px', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '200px', background: 'url(https://cdn-az.allevents.in/banners/f0db8970-8e2e-11e9-8097-7f22a079d7fe-rimg-w526-h295-gmir.jpg) center / cover'}} ></CardTitle>
                <CardText>
                  <h1><strong>AngelHack Vietnam 2019</strong></h1>
                  <p><strong>NodeJS | HTML/CSS | C++</strong></p>
                  <p>
                    <li>Finalist/Second place in the FE Credit Challenge</li>
                    <li>Created a software customer service solution</li>
                  </p>
                </CardText>
                <CardActions border>
                  <Button colored ripple style={{textDecoration: 'none'}} href="https://github.com/julliatran/AngelHack2019" rel="noopener noreferrer" target='blank'>GitHub</Button>
                  <Button colored ripple style={{textDecoration: 'none'}} href="/angelHack">Learn More</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                </CardMenu>
              </Card>
            </div>
          </Cell>
          <Cell col={6}>
            <div className="project-grid">
              <Card shadow={5} style={{width: '500px', margin: 'auto'}}>
                <img src={bball} height='200px'/>
                <CardText>
                <h1><strong>Hack 112 - Basketball Simulator</strong></h1>
                <p><strong>Python | PyGame | PyKinnect</strong></p>
                  <p>
                    <li>Won "Most Ambitious Project"</li>
                    <li>Top 8 out of around 50 teams</li>
                  </p>
                </CardText>
                <CardActions border>
                  <Button colored ripple style={{textDecoration: 'none'}} href="https://github.com/julliatran/BasketballSimulator" rel="noopener noreferrer" target='blank'>GitHub</Button>
                  <Button colored ripple style={{textDecoration: 'none'}} href="">Learn More</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                </CardMenu>
              </Card>
            </div>
          </Cell>
        </Grid>
      )  
    } // MACHINE LEARNING
    else if(this.state.activeTab === 1) {
      return (
        <Grid>
          <Cell col={6}>
            <div className="project-grid">
              <Card shadow={5} style={{width: '500px', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '200px', background: 'url(https://miro.medium.com/max/1210/1*E7zhhan7Sp7hats4jkKdeA.png) center / cover'}} ></CardTitle>
                <CardText>
                  <h1><strong>VGG16 AutoEncoder</strong></h1>
                  <p>aksjhdkjdfasdakjfhk</p>
                </CardText>
                <CardActions border>
                  <Button colored ripple>GitHub</Button>
                  <Button colored ripple>Learn More</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                </CardMenu>
              </Card>
            </div>
            
          </Cell>
          <Cell col={6}>
            <div className="project-grid">
              <Card shadow={5} style={{width: '500px', margin: 'auto'}}>
                <img src={cnn} height='200px'/>
                <CardText>
                  <h1><strong>CNN AutoEncoder</strong></h1>
                  <p>aksjhdkjdfasdakjfhk</p>
                </CardText>
                <CardActions border>
                  <Button colored ripple>GitHub</Button>
                  <Button colored ripple>Learn More</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                </CardMenu>
              </Card>
            </div>
          </Cell>
        </Grid>
      )
    } // PYTHON - RubiksPaint, Webscraper 
    else if(this.state.activeTab === 2) {
      return (
        <Grid>
          <Cell col={6}>
            <div className="project-grid">
              <Card shadow={5} style={{width: '500px', margin: 'auto'}}>
                <img src={RB} height='200px'/>
                <CardText>
                <h1><strong>Rubiks Paint</strong></h1>
                  <p>
                    <li>One of 10 projects out of around 500 projects</li>
                    <li>Got showcased</li>
                  </p>
                </CardText>
                <CardActions border>
                  <Button colored ripple style={{textDecoration: 'none'}} href="https://github.com/julliatran/rubikspaint" rel="noopener noreferrer" target='blank'>GitHub</Button>
                  <Button colored ripple style={{textDecoration: 'none'}} href="/rubiksPaint">Learn More</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                </CardMenu>
              </Card>
            </div>
          </Cell>
          
          <Cell col={6}>
            <div className="project-grid">
              <Card shadow={5} style={{width: '500px', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '200px', background: 'url(https://www.mapsofworld.com/usa/usa-maps/united-states-map.jpg) center / cover'}} ></CardTitle>
                <CardText>
                  <h1><strong>Webscraper</strong></h1>
                  <p>aksjhdkjdfasdakjfhk</p>
                </CardText>
                <CardActions border>
                  <Button colored ripple>GitHub</Button>
                  <Button colored ripple>Learn More</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                </CardMenu>
              </Card>
            </div>
          </Cell>
        </Grid>
      )
    } // Hardware
    else if(this.state.activeTab === 3) {
      return (
        <Grid>
          <Cell col={12}>
            <div className="project-grid">
              <Card shadow={5} style={{width: '500px', margin: 'auto'}}>
                <img src={spaceY} height='200px'/>
                <CardText>
                  <h1><strong>SpaceY</strong></h1>
                  <p>aksjhdkjdfasdakjfhk</p>
                </CardText>
                <CardActions border>
                  <Button colored ripple>GitHub</Button>
                  <Button colored ripple>Learn More</Button>
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
        <Tabs  activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>Competitions</Tab>
          <Tab>Machine Learning</Tab>
          <Tab>Python</Tab>
          <Tab>Hardware</Tab>
        </Tabs>  

        <div className="content">{this.toggleCategories()}</div>
      </div>
    );
  }
}
export default Project;