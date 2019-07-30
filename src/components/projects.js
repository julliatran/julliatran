import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardText, CardTitle, CardActions, Button, CardMenu, IconButton } from "react-mdl";
import AH from '../img/angelHack.png'

class Project extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    const img = {'image': AH}
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
                  <p>aksjhdkjdfasdakjfhk</p>
                </CardText>
                <CardActions border>
                  <Button colored ripple>GitHub</Button>
                  <Button colored ripple>Learn More</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton ripple name="share" />
                </CardMenu>
              </Card>
            </div>
            
          </Cell>
          <Cell col={6}>
            <div className="project-grid">
              <Card shadow={5} style={{width: '500px', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '200px', background: 'url(https://cdn-az.allevents.in/banners/f0db8970-8e2e-11e9-8097-7f22a079d7fe-rimg-w526-h295-gmir.jpg) center / cover'}} ></CardTitle>
                <CardText>
                <h1><strong>Hack 112</strong></h1>
                  <p>aksjhdkjdfasdakjfhk</p>
                </CardText>
                <CardActions border>
                  <Button colored ripple>GitHub</Button>
                  <Button colored ripple>Learn More</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton ripple name="share" />
                </CardMenu>
              </Card>
            </div>
          </Cell>
        </Grid>
      )  
    } /* MACHINE LEARNING */
    else if(this.state.activeTab === 1) {
      return (
        <Grid>
          <Cell col={6}>
            <div className="project-grid">
              <Card shadow={5} style={{width: '500px', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '200px', background: 'url(https://cdn-az.allevents.in/banners/f0db8970-8e2e-11e9-8097-7f22a079d7fe-rimg-w526-h295-gmir.jpg) center / cover'}} ></CardTitle>
                <CardText>
                  <h1><strong>VGG16 AutoEncoder</strong></h1>
                  <p>aksjhdkjdfasdakjfhk</p>
                </CardText>
                <CardActions border>
                  <Button colored ripple>GitHub</Button>
                  <Button colored ripple>Learn More</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton ripple name="share" />
                </CardMenu>
              </Card>
            </div>
            
          </Cell>
          <Cell col={6}>
            <div className="project-grid">
              <Card shadow={5} style={{width: '500px', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '200px', background: 'url(https://cdn-az.allevents.in/banners/f0db8970-8e2e-11e9-8097-7f22a079d7fe-rimg-w526-h295-gmir.jpg) center / cover'}} ></CardTitle>
                <CardText>
                  <h1><strong>CNN AutoEncoder</strong></h1>
                  <p>aksjhdkjdfasdakjfhk</p>
                </CardText>
                <CardActions border>
                  <Button colored ripple>GitHub</Button>
                  <Button colored ripple>Learn More</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton ripple name="share" />
                </CardMenu>
              </Card>
            </div>
          </Cell>
        </Grid>
      )
    } /* PYTHON - RubiksPaint, Webscraper */
    else if(this.state.activeTab === 2) {
      return (
        <Grid>
          <Cell col={6}>
            <div className="project-grid">
              <Card shadow={5} style={{width: '500px', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '200px', background: 'url(https://cdn-az.allevents.in/banners/f0db8970-8e2e-11e9-8097-7f22a079d7fe-rimg-w526-h295-gmir.jpg) center / cover'}} ></CardTitle>
                <CardText>
                  <h1><strong>RubiksPaint</strong></h1>
                  <p>aksjhdkjdfasdakjfhk</p>
                </CardText>
                <CardActions border>
                  <Button colored ripple>GitHub</Button>
                  <Button colored ripple>Learn More</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton ripple name="share" />
                </CardMenu>
              </Card>
            </div>
            
          </Cell>
          <Cell col={6}>
            <div className="project-grid">
              <Card shadow={5} style={{width: '500px', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '200px', background: 'url(https://cdn-az.allevents.in/banners/f0db8970-8e2e-11e9-8097-7f22a079d7fe-rimg-w526-h295-gmir.jpg) center / cover'}} ></CardTitle>
                <CardText>
                  <h1><strong>Webscraper</strong></h1>
                  <p>aksjhdkjdfasdakjfhk</p>
                </CardText>
                <CardActions border>
                  <Button colored ripple>GitHub</Button>
                  <Button colored ripple>Learn More</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton ripple name="share" />
                </CardMenu>
              </Card>
            </div>
          </Cell>
        </Grid>
      )
    } /* HARDWARE */
    else if(this.state.activeTab === 3) {
      return (
        <Grid>
          <Cell col={12}>
            <div className="project-grid">
              <Card shadow={5} style={{width: '600px', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '200px', background: 'url(https://cdn-az.allevents.in/banners/f0db8970-8e2e-11e9-8097-7f22a079d7fe-rimg-w526-h295-gmir.jpg) center / cover'}} ></CardTitle>
                <CardText>
                  <h1><strong>SpaceY</strong></h1>
                  <p>aksjhdkjdfasdakjfhk</p>
                </CardText>
                <CardActions border>
                  <Button colored ripple>GitHub</Button>
                  <Button colored ripple>Learn More</Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton ripple name="share" />
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
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
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