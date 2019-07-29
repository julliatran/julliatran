import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LandingPage from './landingpage';
import Aboutme from './aboutme';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume'; 

const Main = () => {
  return (
  <Switch>
    <Route exact path="/" component={ LandingPage }></Route>
    <Route exact path="/aboutme" component={ Aboutme }></Route>
    <Route exact path="/contact" component={ Contact }></Route>
    <Route exact path="/projects" component={ Projects }></Route>
    <Route exact path="/resume" component={ Resume }></Route>
  </Switch>
  ); 
}

export default Main;