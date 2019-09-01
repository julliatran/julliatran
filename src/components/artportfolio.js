import React, { Component } from 'react';
import { Grid, Cell  } from "react-mdl";
import ava from "./img/art/avatar.jpg";
import Gallery from 'react-grid-gallery';
import p0 from "./img/art/0.jpg";
import p1 from "./img/art/1.jpg";
import p2 from "./img/art/2.jpg";
import p3 from "./img/art/3.jpg";
import p4 from "./img/art/4.jpg";
import p5 from "./img/art/5.jpg";
import p6 from "./img/art/6.jpg";
import p7 from "./img/art/7.jpg";
import p8 from "./img/art/8.jpg";
import p9 from "./img/art/9.jpg";
import p10 from "./img/art/10.jpg";
import p11 from "./img/art/11.jpg";
import p12 from "./img/art/12.jpg";
import p13 from "./img/art/13.jpg";
import p14 from "./img/art/14.jpg";
import p15 from "./img/art/15.jpg";
import p16 from "./img/art/16.jpg";
import p17 from "./img/art/17.jpg";
import p18 from "./img/art/18.jpg";
import p19 from "./img/art/19.jpg";
import p20 from "./img/art/20.jpg";
import p21 from "./img/art/21.jpg";
import p22 from "./img/art/22.jpg";
import p23 from "./img/art/23.jpg";
import p24 from "./img/art/24.jpg";
import p25 from "./img/art/25.jpg";
import p26 from "./img/art/26.jpg";
import p27 from "./img/art/27.jpg";
import p28 from "./img/art/28.jpg";
import p29 from "./img/art/29.jpg";


const captionStyle = {
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  maxHeight: "240px",
  overflow: "hidden",
  position: "absolute",
  bottom: "0",
  width: "100%",
  color: "white",
  padding: "2px",
  fontSize: "150%",
  textAlign:"center",
};

const IMAGES =
[{
  src: p0,
  thumbnail: p0,
  thumbnailWidth: 3057,
  thumbnailHeight: 2535,
  caption: "Couch Potato - Oil on Canvas",
},
{
  src: p1,
  thumbnail: p1,
  thumbnailWidth: 2131,
  thumbnailHeight: 1801,
  caption: "Eye See You - Acrylic on Canvas"
},
{
  src: p2,
  thumbnail:p2,
  thumbnailWidth: 2174,
  thumbnailHeight: 2766,
  caption: "Eureka! - Collage and Acrylic on Canvas"
        
},
{
  src: p3,
  thumbnail: p3,
  thumbnailWidth: 2270,
  thumbnailHeight: 2209,
  caption: "Monotone - Oil Paint on Canvas"
},
{
  src: p4,
  thumbnail: p4,
  thumbnailWidth: 2573,
  thumbnailHeight: 3345,
  caption: "Downside Up - Acrylic Paint on Canvas"
},
{
  src: p5,
  thumbnail: p5,
  thumbnailWidth: 1913,
  thumbnailHeight: 2536,
  caption: "Still Life - Oil Paint on Canvas"
},
{
  src: p6,
  thumbnail: p6,
  thumbnailWidth: 2417,
  thumbnailHeight: 3019,
  caption: "Ice Scream - Oil, Ink, and Pencil Colors on Wooden Panel"
},
{
  src: p7,
  thumbnail: p7,
  thumbnailWidth: 1794,
  thumbnailHeight: 2358,
  caption: "A Walk in the Park - Collage, Acrylic, and Pencil Colors on Wooden Panel"
},
{
  src: p8,
  thumbnail: p8,
  thumbnailWidth: 2144,
  thumbnailHeight: 2672,
  caption: "Fish Tank - Pencil Colors, Collage, and Oil Pastel on Wooden Panel"
},
{
  src: p9,
  thumbnail: p9,
  thumbnailWidth: 2347,
  thumbnailHeight: 1773,
  caption: "Bay Breeze - Watercolors and Markers on Wooden Panel"
},
{
  src: p10,
  thumbnail: p10,
  thumbnailWidth: 3463,
  thumbnailHeight: 2745,
  caption: "Record Road - Collage and Oil Paint on Wooden Panel "
},
{
  src: p11,
  thumbnail: p11,
  thumbnailWidth: 2069,
  thumbnailHeight: 2591,
  caption: "Tea Party Olympics - Collage, Oild Paint and Pencil Colors on Wooden Panel"
},
{
  src: p12,
  thumbnail: p12,
  thumbnailWidth: 3134,
  thumbnailHeight: 2332,
  caption: "Rumney - Watercolor on Paper"
},
{
  src: p13,
  thumbnail: p13,
  thumbnailWidth: 2667,
  thumbnailHeight: 1995,
  caption: "Purple Haze - Watercolor and Ink on Paper"
},
{
  src: p14,
  thumbnail: p14,
  thumbnailWidth: 2325,
  thumbnailHeight: 2942,
  caption: "Swing Dancing - Acrylic and Ink on Canvas"
},
{
  src: p15,
  thumbnail: p15,
  thumbnailWidth: 2064,
  thumbnailHeight: 2071,
  caption: "Airplane! - Graphite on Paper"
},
{
  src: p16,
  thumbnail: p16,
  thumbnailWidth: 2526,
  thumbnailHeight: 1885,
  caption: "Have a Cigar - Collage and Acrylic Paint on Wooden Panel"
},
{
  src: p17,
  thumbnail: p17,
  thumbnailWidth: 2120,
  thumbnailHeight: 2826,
  caption: "Orange Crush - Collage and Oil Pain on Canvas"
},
{
  src: p18,
  thumbnail: p18,
  thumbnailWidth: 3222,
  thumbnailHeight: 2424,
  caption: "Here's a Bridge, Get Over It - Oil Paint and Gel Pen on Canvas"
},
{
  src: p19,
  thumbnail: p19,
  thumbnailWidth: 2277,
  thumbnailHeight: 3006,
  caption: "The Alley - Oil Paint and Gel Pen on Canvas"
},
{
  src: p20,
  thumbnail: p20,
  thumbnailWidth: 2538,
  thumbnailHeight: 2730,
  caption: "Pixie Pictation - Acrylic Paint on Canvas"
},
{
  src: p21,
  thumbnail: p21,
  thumbnailWidth: 1974,
  thumbnailHeight: 2625,
  caption: "Animal Farm - Gel Pen, Acrylic on Wooden Panel"
},
{
  src: p22,
  thumbnail: p22,
  thumbnailWidth: 2258,
  thumbnailHeight: 2885,
  caption: "World Goes Round - Collage, Ink, and Acrylic on Wooden Panel"
},
{
  src: p23,
  thumbnail: p23,
  thumbnailWidth: 2239,
  thumbnailHeight: 2872,
  caption: "Din Din! - Collage and Oil Paint on Wooden Canvas"
},
{
  src: p24,
  thumbnail: p24,
  thumbnailWidth: 2263,
  thumbnailHeight: 3550,
  caption: "Fear - Printmaking"
},
{
  src: p25,
  thumbnail: p25,
  thumbnailWidth: 2263,
  thumbnailHeight: 3550,
  caption: "Fear - Printmaking"
},
{
  src: p26,
  thumbnail: p26,
  thumbnailWidth: 2263,
  thumbnailHeight: 3550,
  caption: "Fear - Printmaking"
},
{
  src: p27,
  thumbnail: p27,
  thumbnailWidth: 2263,
  thumbnailHeight: 3550,
  caption: "Fear - Printmaking"
},
{
  src: p28,
  thumbnail: p28,
  thumbnailWidth: 2263,
  thumbnailHeight: 3550,
  caption: "Fear - Printmaking"
},
{
  src: p29,
  thumbnail: p29,
  thumbnailWidth: 2263,
  thumbnailHeight: 3550,
  caption: "Fear - Printmaking"
}
]
{/* Hover */}
const hover = IMAGES.map(i => { i.customOverlay = (<div style={captionStyle}>
                                                   <div>{i.caption}</div>
                                                   </div>);
                         return i });

class Art extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={3} offsetTablet={3} className="left-col">
            <figure className="ava" style={{maxWidth:"300px", textAlign:"center"}}>
              <img src={ava} style={{height:"auto",width:"100%"}}/>
              <h3><strong>My Art Portfolio</strong></h3>
              <p>These are some of the artworks I've created over the years.</p>
              <h3>✿✿✿</h3>
            </figure>               
          </Cell>
          <Cell col={9}>
            <div style={{ display: "block",
                          minHeight: "1px",
                          width: "100%",
                          border: "1px solid #ddd",
                          overflow: "auto"}}>
              <Gallery rowHeight={400}
                      enableImageSelection={false} 
                      images={IMAGES}/>
            </div>
          </Cell>
        </Grid>
        
      </div>
      
    );
  }
}



export default Art;