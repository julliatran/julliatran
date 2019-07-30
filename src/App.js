import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from'./components/main';
import { Link } from 'react-router-dom';
function App() {
  return (
    <div className="demo-big-content" style ={{width: '100%', margin:'auto'}}>
    <Layout>
      <Header transparent className="header-color" title={<Link to="">Title</Link>} scroll>
        <Navigation >
          <Link to="/projects" ><strong>PROJECTS</strong></Link>
          <Link to="/aboutme"><strong>ABOUT ME</strong></Link>
          <Link to="/resume"><strong>RESUME</strong></Link>
          <Link to="/artportfolio"><strong>ART PORTFOLIO</strong></Link>
          <Link to="/contact"><strong>CONTACT</strong></Link>
        </Navigation>
      </Header>
      <Drawer title="Title">
        <Navigation>
          <Link to="/projects"><strong>PROJECTS</strong></Link>
          <Link to="/aboutme"><strong>ABOUT ME</strong></Link>
          <Link to="/resume"><strong>RESUME</strong></Link>
          <Link to="/artportfolio"><strong>ART PORTFOLIO</strong></Link>
          <Link to="/contact"><strong>CONTACT</strong></Link>
        </Navigation>
      </Drawer>
      <Content>
        <div className="page-content" />
        <Main/>
      </Content>
    </Layout>
  </div>
  );
}

export default App;
