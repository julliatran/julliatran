import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content, Footer, FooterSection, FooterLinkList } from 'react-mdl';
import Main from'./components/main';
import { Link} from 'react-router-dom';

function App() {
  return (
    <div style ={{width: '100%', margin:'auto'}}>
    <Layout>
      <Header transparent className="header-color" 
              title={<Link style={{textDecoration:'none', color:"white", fontSize:"18px"}} 
                      to=""><strong>Jullia Tran</strong></Link>} scroll>
        <Navigation>
          <Link style={{textDecoration:'none'}} to="/projects" ><strong>PROJECTS</strong></Link>
          <Link style={{textDecoration:'none'}} to="/aboutme"><strong>ABOUT</strong></Link>
          <Link style={{textDecoration:'none'}} to="/resume"><strong>RESUME</strong></Link>
          <Link style={{textDecoration:'none'}} to="/artportfolio"><strong>ART PORTFOLIO</strong></Link>
        </Navigation>
      </Header>
      <Drawer title={<Link style={{textDecoration:'none', color:"grey", fontSize:"18px"}} to=""><strong>Home</strong></Link>}>
        <Navigation>
          <Link style={{textDecoration:'none'}} to="/projects"><strong>PROJECTS</strong></Link>
          <Link style={{textDecoration:'none'}} to="/aboutme"><strong>ABOUT</strong></Link>
          <Link style={{textDecoration:'none'}} to="/resume"><strong>RESUME</strong></Link>
          <Link style={{textDecoration:'none'}} to="/artportfolio"><strong>ART PORTFOLIO</strong></Link>
        </Navigation>
      </Drawer>
      <Content className="page-content">
          <Main></Main>
      </Content>
      <Footer className="footer" size="mega">
        <FooterSection type="middle">
          <FooterLinkList>
            <div style={{textAlign:'center'}}>
              <p><strong>Contact me here!</strong></p>
              <h4><strong>tranjullia@gmail.com</strong></h4>
            </div>
            <div style={{textAlign:'center'}} className="footer-social-links">
                  {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/jullia-tran-896922184/" 
                rel="noopener noreferrer" target="_blank">
                <i className="fa fa-linkedin-square" aria-hidden="true"/>
              </a>
              {/* Github */}
              <a href="https://github.com/julliatran" 
                rel="noopener noreferrer" target="_blank">
                <i className="fa fa-github-square" aria-hidden="true"/>
              </a>
              {/* YouTube */}
              <a href="https://www.youtube.com/channel/UCAJyvelCfya76Nk0VLQvWYA?view_as=subscriber"
                rel="noopener noreferrer" target="_blank">
                <i className="fa fa-youtube-square" aria-hidden="true"/>
              </a>
            </div>
          </FooterLinkList>
        </FooterSection>
      </Footer>
    </Layout>
  </div>
  );
}

export default App;
