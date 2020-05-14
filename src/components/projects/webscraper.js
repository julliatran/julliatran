import React, { Component } from 'react';
import { Grid, Cell, Button } from "react-mdl";
import webs from  '../img/webs/citydata.png';
class Webscraper extends Component {
  render() {
    return (
      <div className="proj">
        <div style={{width:"80%", margin:"auto"}}>
        <Grid>
          <Cell col={12} style={{textAlign:'center', margin: 'auto'}}>
            <h1><strong>Webscraper</strong></h1>
            <h3>Python | BeautifulSoup4 | Pandas | JupyterNB</h3>
            <div className="proj-img">
              <img style ={{alignItems:"center"}} src={webs}/>
            </div>
          </Cell>
        </Grid>
        <Grid>
          <Cell col={12}>
            <p>As a personal project, I built a webscraper to scrape through 
               city-data.com to gather statistics on all cities available in 
               the US. Without an API, I decided to use the beautiful soup liibrary.
               Through looking at the html of the website, I was able to extract 
               a list of all the states, and cities in each state to one by one 
               go through and scrape them.</p>
              
              <h3>Challenges</h3>
              <p>After scraping around 800 cities, I would always get blocked by
                 by the site and couldn't really find a way to get around it. I tried
                 changing my proxy but that also didn't work so I had to wait around
                 10 hours to continue scraping. This process was quite time consuming
                 but in the end, I was still able to scrape through and got what I needed.
              </p>
              <h3>Result</h3>
              <p>In the end, I was able to scrape through almost 7000 cities
                 in the states and collected the data of each city's elevation,
                 condo value, average female age, average male age, land area, 
                 cost of living, median income, population, and population density.
              </p>
              <h3>Next Step</h3>
              <p>I'm planning on running some machine learning models on this 
                datatset to see if there's any trends or predictions. Stay tuned!
              </p>
          </Cell>
        </Grid>
        <Grid>
          <Button colored ripple
                  style={{margin:'auto', textDecoration:'none', color:"black"}} 
                  href="/projects">Back</Button> 
          <Button colored ripple 
                  style={{margin:'auto', textDecoration:'none', color:"black"}}
                  rel="noopener noreferrer" target='blank'
                  href="https://github.com/julliatran/webscrapper/tree/master/Webscrapper">
            Github</Button>
        </Grid>
      </div>
      </div>
    );
  }
} export default Webscraper;