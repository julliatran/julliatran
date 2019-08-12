import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import Aboutme from './aboutme';
import Projects from './projects';
import Art from './artportfolio';
import Resume from './resume'; 
import AngelHack from './projects/angelHack';
import Rubiks from './projects/rubiks';
import Hack112 from './projects/hack112';
import SpaceY from './projects/spaceY';

const Main = () => {
  return (
  <Switch>
    <Route exact path="/" component={ LandingPage }></Route>
    <Route exact path="/aboutme" component={ Aboutme }></Route>
    <Route exact path="/projects" component={ Projects }></Route>
    <Route exact path="/resume" component={ Resume }></Route>
    <Route exact path="/artportfolio" component={ Art }></Route>
    <Route exact path="/angelHack" component={ AngelHack }></Route>
    <Route exact path="/rubiksPaint" component={ Rubiks }></Route>
    <Route exact path="/hack112" component={ Hack112 }></Route>
    <Route exact path="/spaceY" component={ SpaceY }></Route>
  </Switch>
  ); 
}

export default Main;