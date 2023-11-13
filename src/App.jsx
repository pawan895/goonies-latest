import { useState } from 'react';
import { Parallax } from 'react-parallax';
import './App.css';
import Header from './components/Header';
import Plx from "react-plx";

function App() {
  const [scale, setScale] = useState(1);



  return (
    <>
      {/* <Header></Header>
        <div style={{
          backgroundImage: "url('Images/hero.jpg')"
        }}>
        <Parallax
          blur={1}
          bgImage="Images/background-min.png"
          bgImageAlt="The background Image"
          strength={100}
          style={{
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transform: `scale(${scale})`,
            transition: 'transform 0.3s ease-in-out',
          }}
          onScroll={handleScroll}
        >
          <img src="Images/logo.png" alt="" height={100} style={{margin: "0 auto"}}/>
        </Parallax>
        </div>
        

        
          <Parallax
            bgImage="Images/hero.jpg"
            bgImageAlt="The background Image"
            strength={200}
            style={{
              height: '100vh',
            }}
          ></Parallax> */}

      <Header></Header>

      <Plx
        parallaxData={[{
          start: 0,
          end: 400,
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
          zIndex: 200

        }}

      >
        <img src="Images/background-min.png" alt="Foreground Image" style={{ width: '100%' }} />


      </Plx>
      <Plx
        parallaxData={[{
          start: 450,
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
        <img src="Images/scroll.gif" alt="Scroll down" style={{ position: 'fixed', bottom: "4vh", left: "50vw", zIndex: 120, height: 60 }} />
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
          height: '100vh'
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
        <img src="Images/coin.png" alt="" width={150}/>
        <img src="Images/coin-3.png" alt="" width={150} />

        <img src="Images/key-min.png" alt="" width={150} />
        <img src="Images/coin-1.png" alt="" width={150} />
        <img src="Images/coin-3.png" alt="" width={150} />


      </Plx>


    </>
  );
}

export default App;
