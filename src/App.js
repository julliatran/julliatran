import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content, Footer, FooterSection, FooterLinkList } from 'react-mdl';
import Main from'./components/main';
import { Link } from 'react-router-dom';
function App() {
  return (
    <div className="demo-big-content" style ={{width: '100%', margin:'auto'}}>
    <Layout>
      <Header transparent className="header-color" title={<Link style={{textDecoration:'none'}} to="">Title</Link>} scroll>
        <Navigation>
          <Link style={{textDecoration:'none'}} to="/projects" ><strong>PROJECTS</strong></Link>
          <Link style={{textDecoration:'none'}} to="/aboutme"><strong>ABOUT</strong></Link>
          <Link style={{textDecoration:'none'}} to="/resume"><strong>RESUME</strong></Link>
          <Link style={{textDecoration:'none'}} to="/artportfolio"><strong>ART PORTFOLIO</strong></Link>
        </Navigation>
      </Header>
      <Drawer title="Title">
        <Navigation>
          <Link style={{textDecoration:'none'}} to="/projects"><strong>PROJECTS</strong></Link>
          <Link style={{textDecoration:'none'}} to="/aboutme"><strong>ABOUT</strong></Link>
          <Link style={{textDecoration:'none'}} to="/resume"><strong>RESUME</strong></Link>
          <Link style={{textDecoration:'none'}} to="/artportfolio"><strong>ART PORTFOLIO</strong></Link>
        </Navigation>
      </Drawer>
      <Content>
        <div className="page-content" />
        <Main/>
      </Content>
      <Footer className="footer" size="mega">
        <FooterSection type="top">
          <FooterLinkList>
            <div style={{textAlign:'center'}}>
              <h4><strong>Contact me here! </strong></h4>
              <p><strong>tranjullia@gmail.com</strong></p>
            </div>
          </FooterLinkList>
        </FooterSection>
      </Footer>
    </Layout>
  </div>
  );
}

export default App;
