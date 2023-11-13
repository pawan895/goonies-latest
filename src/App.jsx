import { useState } from 'react';
import { Parallax } from 'react-parallax';
import './App.css';
import Header from './components/Header';
import Grid from './components/Grid';
import Plx from "react-plx";

function App() {
  const [scale, setScale] = useState(1);



  return (
    <>


      <Header></Header>

      <Plx
        parallaxData={[{
          start: 0,
          end: "300",
          properties: [
            {
              startValue: 1,
              endValue: 2,
              property: "scale",
            },
          ],
        },
        {
          start: 400,
          duration: 100,
          properties: [
            {
              startValue: 1,
              endValue: 0,
              property: "opacity"
            }
          ]
        }
        ]}
        style={{
          position: 'fixed',
          width: '100%',
          zIndex: 1

        }}

      >
        <img src="Images/background-min.png" alt="Foreground Image" style={{ width: '100%' }} />


      </Plx>
      <Plx
        parallaxData={[{
          start: 550,
          end: 700,
          properties: [
            {
              startValue: "#ff0000",
              endValue: "#000000",
              property: "bacgroundColor",
            },
          ],
        },
        {
          start: 500,
          duration: 200,
          properties: [{
            startValue: 1,
            endValue: 0,
            property: 'opacity'
          }]
        },
        {
          start: 500,
          duration: 200,
          properties: [{
            startValue: "#ffffff",
            endValue: "#000000",
            property: 'backgroundColor'
          }]
        }
        ]}>
        <img src="Images/hero.jpg" alt="bakground Image" />
        <img src="Images/scroll.gif" alt="Scroll down" style={{ position: 'fixed', bottom: "4vh", left: "47vw", zIndex: 120, height: 60 }} />
      </Plx>


      <Plx
        parallaxData={[
          {
            start: 0,
            end: 300,
            properties: [
              {
                startValue: 1,
                endValue: 0,
                property: "opacity"
              }
            ]
          }
        ]}
        style={{
          position: "fixed",
          left: '32vw',
          top: "20vw",
          width: "100%"
        }}

      >
        <img src="Images/logo.png" alt="" style={{ width: "30vw" }} />
      </Plx>

      <Plx
        parallaxData={[
          {
            start: 0,
            end: 800,
            properties: [
              {
                startValue: 0,
                endValue: 1,
                property: "opacity"
              }
            ]
          },
          {
            start: 500,
            duration: 300,
            properties: [
              {
                startValue: 1,
                endValue: 0,
                property: "opacity"
              }
            ]
          }

        ]}
        style={{
          position: "fixed",
          left: '30vw',
          top: "17vw",
          width: "100%"
        }}

      >
        <div className='hero-content'>
          <h1>Plot</h1>
          <br />
          <p>Facing foreclosure of their homes in the Goon Docks area of Astoria, Oregon to an expanding country club, a group of children who call themselves "the Goonies" gather for a final weekend together.</p>

        </div>
      </Plx>


      <Plx
        parallaxData={[
          {
            start: self,
            end: 300,
            properties: [
              {
                startValue: 0.3,
                endValue: 1,
                property: "opacity"
              }
            ]
          }

        ]}
        style={{
          backgroundColor: '#fffff',
          height: '100vh',
          position: 'relative',
          zIndex: 2
        }}
      >
        <div className='characters'>
          <div>
            <img src="Images/guyLookingCoin.jpg" alt="" srcset="" />
            <div className='text-overlay'><h1>Micky</h1></div>
          </div>
          <div>
            <img src="Images/fatguyLiftingShirt.jpg" alt="" srcset="" />
            <div className='text-overlay'><h1>Chunk</h1></div>
          </div>
          <div>
            <img src="Images/personHoldingBelt.jpg" alt="" srcset="" />
            <div className='text-overlay'><h1>Data</h1></div>
          </div>
          <div>
            <img src="Images/person-bake.jpg" alt="" srcset="" />
            <div className='text-overlay'><h1>Mouth</h1></div>
          </div>

        </div>
      </Plx>
      <div>

      </div>
      <Plx
        parallaxData={[{
          start: 0,
          end: 400,
          properties: [
            {
              startValue: 0,
              endValue: 360,
              property: "translate",
            },
          ],
        }
        ]}
        style={{
          zIndex: 200,
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img src="Images/coin.png" alt="" width={150} />
        <img src="Images/coin-3.png" alt="" width={150} />
        <img src="Images/key-min.png" alt="" width={150} />
        <img src="Images/coin-1.png" alt="" width={150} />
        <img src="Images/coin-3.png" alt="" width={150} />


      </Plx>
      <Plx
        parallaxData={[{
          start: 0,
          end: 400,
          properties: [
            {
              startValue: 0,
              endValue: 360,
              property: "translate",
            },
          ],
        }
        ]}
        style={{
          height: '100vh',

        }}
      >
        <div class="grid-container">
          <div class="grid-item">Item 1</div>
          <div class="grid-item">Item 2</div>
          <div class="grid-item">Item 3</div>
          <div class="grid-item">Item 4</div>
          <div class="grid-item">Item 5</div>
          <div class="grid-item">Item 6</div>
          <div class="grid-item">Item 7</div>
        </div>


      </Plx>


      <Plx
        parallaxData={[{
          start: 1800,
          end: 2000,
          properties: [
            {
              startValue: 0,
              endValue: 1,
              property: "scale",
            },
          ],
        }
        ]}

        style={{
          height: '100vh',
          width: '100vw',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          margin: '0 auto',
          zIndex: 10,
          position: 'relative',
          top: '40%',
          left: '40%',
          transform: "translate(-50 %, -50 %)",
          filter: 'grayscale(100%)'

        }}
      >
        <img src="Images/skull.png" alt="" width={'20%'} style={{ filter: 'grayscale(100%)' }} />
        <img src="Images/last-part.png" alt="" width={'30%'} />
      </Plx>
      <Plx
        parallaxData={[{
          start: 1800,
          end: 2000,
          properties: [
            {
              startValue: 0,
              endValue: 1,
              property: "scale",
            },
          ],
        }
        ]}>

        <Grid></Grid>

      </Plx>
      <Plx
        parallaxData={[{
          start: 1800,
          end: 2000,
          properties: [
            {
              startValue: 0,
              endValue: 1,
              property: "scale",
            },
          ],
        }
        ]}
        style={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          height: '100vh',
          textAlign: 'center'
        }}
      >
        <div>
          <h1>The goonies Latest</h1>
          <br />
          <h3>Made by Pawan</h3>
        </div>


      </Plx>



    </>
  );
}

export default App;
