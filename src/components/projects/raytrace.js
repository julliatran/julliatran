import React, { Component } from 'react';
import { Grid, Cell, Button } from "react-mdl";
import bevel from  '../img/graphicsGif/bevel.gif';
import collapseEdge from  '../img/graphicsGif/collapseEdge.gif';
import deleteEdge from  '../img/graphicsGif/deleteEdge.gif';
import flipEdge from  '../img/graphicsGif/flipEdge.gif';
import triangulate from  '../img/graphicsGif/triangulate.gif';
import catmull from  '../img/graphicsGif/catmull.gif';
import linear from  '../img/graphicsGif/linear.gif';
import upsample from  '../img/graphicsGif/upsample.gif';
import cowBVH from  '../img/rt/cowBVH.png';
import cowRT from  '../img/rt/cowRT.png';

import lambertian from  '../img/rt/lamb-big.png';
import glass from  '../img/rt/glass-small.png';
import dragon from  '../img/rt/dragon.png';

import fieldE2 from  '../img/rt/fieldE2.png';
import frog from  '../img/rt/frog.png';

import spline from  '../img/graphicsGif/spline.gif';
import wave from  '../img/graphicsGif/wave.gif';
class Webscraper extends Component {
  render() {
    return (
      <div className="proj">
        <div style={{width:"80%", margin:"auto"}}>
        <Grid>
          <Cell col={12} style={{textAlign:'center', margin: 'auto'}}>
            <h1><strong>Scotty3d</strong></h1>
            <h3>Computer Graphics | C++</h3>
            <div style={{margin:"auto", width: '70vw', maxWidth: '800px'}}>
              <div className="res-hiframe">
                <img class="ratio" src="http://placehold.it/90x60" alt="ratio placeholder"/>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/GRJPh_abWNg" 
                title="YouTube video player" frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </div>
            </div>
          </Cell>
        </Grid>
        <Grid>
          <Cell col={12}>
            <p></p>
              <h3>What is Scotty3d?</h3>
              <p> 
                This is a 3D graphics software that implements interactive mesh editing,
                realistic path tracing, and dynamic animation. The implementations for
                these functionalities was done as part of the coursework for 
                15-462/662 Computer Graphics at Carnegie Mellon University.
                The base code can be found <a href="https://github.com/CMU-Graphics/Scotty3D">here.</a>
              </p>
              
              <h3>Mesh Editing</h3>
              <p>
                When in MeshEdit mode, Scotty3D provides a polygon-based 3D modeler 
                with basic subdivision capabilities. Note that MeshEdit (and more broadly, Scotty3D) 
                will only operate on meshes that are manifold (i.e., the union 
                of faces containing any given vertex v is a topological disk). 
              </p>
              <h5>Local Mesh Operations</h5>
              <p>
                My implementation provides support for face bevel actions, edge collapse,
                edge delete, and edge flip as local mesh operations. 
              </p>
            </Cell>
          </Grid>
          <Grid style={{display:"flex",
                      textAlign:"center",
                      justifyContent: "space-around",
                      alignItems: "flex-start"}}>
            <Cell col={3}>
              <figure>
                  <img src={bevel} style={{height:"auto",width:"100%"}} alt="Face bevel action"/>
                  <figcaption>Face bevel action</figcaption>
              </figure>
            </Cell>
            <Cell col={3}>
              <figure>
                  <img src={collapseEdge} style={{height:"auto",width:"100%"}} alt="Edge collapse"/>
                  <figcaption>Edge collapse</figcaption>
              </figure>
            </Cell>
            <Cell col={3}>
              <figure>
                  <img src={deleteEdge} style={{height:"auto",width:"100%"}} alt="Edge delete"/>
                  <figcaption>Edge delete</figcaption>
              </figure>
            </Cell>
            <Cell col={3}>
              <figure>
                  <img src={flipEdge} style={{height:"auto",width:"100%"}} alt="Edge flip"/>
                  <figcaption>Edge flip</figcaption>
              </figure>
            </Cell>
          </Grid>
          <Grid>
            <Cell col={12}>
              <h5>Global Mesh Operation</h5>
              <p>
                For global mesh operations, my implementation support triangulate action,
                linear subdivision, Catmull-Clark subdivision and upsample. 
              </p>
            </Cell>
          </Grid>
          <Grid style={{display:"flex",
                      textAlign:"center",
                      justifyContent: "space-around",
                      alignItems: "flex-start"}}>
            <Cell col={3}>
              <figure>
                  <img src={triangulate} style={{height:"auto",width:"100%"}} alt="Triangulate action"/>
                  <figcaption>Triangulate action</figcaption>
              </figure>
            </Cell>
            <Cell col={3}>
              <figure>
                  <img src={linear} style={{height:"auto",width:"100%"}} alt="Linear subdivision"/>
                  <figcaption>Linear subdivision</figcaption>
              </figure>
            </Cell>
            <Cell col={3}>
              <figure>
                  <img src={catmull} style={{height:"auto",width:"100%"}} alt="Catmull-Clark subdivision"/>
                  <figcaption>Catmull-Clark subdivision</figcaption>
              </figure>
            </Cell>
            <Cell col={3}>
              <figure>
                  <img src={upsample} style={{height:"auto",width:"100%"}} alt="Upsample"/>
                  <figcaption>Upsample</figcaption>
              </figure>
            </Cell>
          </Grid>
          <Grid>
            <Cell col={12}>
              <h3>PathTracer</h3>
              <p>
                The PathTracer mode is a globally illuminated renderer, capable
                of creating images of complex scenes using path tracing.
              </p>
              <h5>Bounding Volume Hierarchy</h5>
              <p>
                The first part of the implementation focuses on providing an 
                efficient implementation of ray-scene geometry queries, using 
                Bounding Volume Hierarchy (BVH).
              </p>
            </Cell>
          </Grid>
          <Grid style={{display:"flex",
                      textAlign:"center",
                      justifyContent: "space-around",
                      alignItems: "flex-start"}}>
            <Cell col={6}>
              <figure>
                  <img src={cowBVH} style={{height:"auto",width:"100%"}} alt="Bounding Volume Hierarchy of a cow"/>
                  <figcaption>Bounding Volume Hierarchy of a cow</figcaption>
              </figure>
            </Cell>
            <Cell col={6}>
              <figure>
                  <img src={cowRT} style={{height:"auto",width:"100%"}} alt="Ray-traced of a cow"/>
                  <figcaption>Ray-traced of a cow</figcaption>
              </figure>
            </Cell>
          </Grid>
          <Grid>
            <Cell col={12}>
              <h5>Materials</h5>
              <p>
                In the second part of my implementation, I added the ability to 
                simulate how light bounces around the scene, which allows
                the renderer to synthesize much higher-quality images.
              </p>
              </Cell>
          </Grid>
          <Grid style={{display:"flex",
                      textAlign:"center",
                      justifyContent: "space-around",
                      alignItems: "flex-start"}}>
            <Cell col={4}>
              <figure>
                  <img src={lambertian} style={{height:"auto",width:"100%"}} alt="Ray-traced of lambertian spheres"/>
                  <figcaption>Ray-traced of lambertian spheres</figcaption>
              </figure>
            </Cell>
            <Cell col={4}>
              <figure>
                  <img src={glass} style={{height:"auto",width:"100%"}} alt="Ray-traced of perfect-mirror and glass spheres"/>
                  <figcaption>Ray-traced of lambertian and glass spheres</figcaption>
              </figure> 
            </Cell>
            <Cell col={4}>
              <figure>
                  <img src={dragon} style={{height:"auto",width:"100%"}} alt="Ray-traced of a gold dragon"/>
                  <figcaption>Ray-traced of a gold dragon</figcaption>
              </figure>
            </Cell>

            <Cell col={6}>
              <figure>
                  <img src={fieldE2} style={{height:"auto",width:"100%"}} alt="Glass sphere with environmental lighting"/>
                  <figcaption>Glass sphere with environmental lighting (This reminds me of "The False Mirror", like that of René Magritte)</figcaption>
              </figure>
            </Cell>
            <Cell col={6}>
              <figure>
                  <img src={frog} style={{height:"auto",width:"100%"}} alt="Glass frog with environmental lighting"/>
                  <figcaption>Glass frog with environmental lighting</figcaption>
              </figure>
            </Cell>
          </Grid> 
          <Grid>
            <Cell col={12}>
              <h3>Animation</h3>
              <h5>Spline Interpolation</h5>
              <p>
                Data points in time can be interpolated by constructing an approximating 
                piecewise polynomial or spline. In this part of the project, I implemented 
                Catmull-Rom spline. A Catmull-Rom spline is a piecewise cubic spline 
                defined purely in terms of the points it interpolates. 
              </p>
              <h5>Physical Simulation</h5>
              <p>
                I implemented an integrator for the (undamped) wave equation across a mesh.
                By calculating the the Discrete Laplacian operator, via the cotan-formula, 
                I first implemented forward Euler. However, forward Euler is not
                numerically stable, so the simulation blow up but it's the expected behavior.
                The symplectic Euler is implemented instead by adding a damping factor.
              </p>
          </Cell>
        </Grid>
        <Grid style={{display:"flex",
                      textAlign:"center",
                      justifyContent: "space-around",
                      alignItems: "flex-start"}}>
            <Cell col={6}>
              <figure>
                  <img src={spline} style={{height:"auto",width:"100%"}} alt="Catmull-Rom spline action"/>
                  <figcaption>Catmull-Rom spline action</figcaption>
              </figure>
            </Cell>
            <Cell col={6}>
              <figure>
                  <img src={wave} style={{height:"auto",width:"100%"}} alt="Symplectic Euler wave action"/>
                  <figcaption>Symplectic Euler wave action</figcaption>
              </figure>
            </Cell>
          </Grid>
        <Grid>
          <Button colored ripple
                  style={{margin:'auto', textDecoration:'none', color:"black"}} 
                  href="/projects">Back</Button> 
          <Button colored ripple 
                  style={{margin:'auto', textDecoration:'none', color:"black"}}
                  rel="noopener noreferrer" target='blank'
                  href="https://github.com/CMU-Graphics/Scotty3D">
            Github</Button>
        </Grid>
      </div>
      </div>
    );
  }
} export default Webscraper;