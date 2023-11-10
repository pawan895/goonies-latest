import { useState, useRef } from 'react'
import './App.css'
import Header from './components/Header'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'

function App() {
  const [count, setCount] = useState(0)
  const ref = useRef()
  return (
    <>

      <Parallax pages={3} ref={ref}>

        <ParallaxLayer
          offset={0}
          speed={2.5}
          style={{
            backgroundImage: 'url("Images/hero.jpg")',
            backgroundSize: 'cover'
          }}
        >
          <Header />
          <p>Layers can contain anything</p>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={2.5}
          style={{
            backgroundImage: 'url("Images/background-min.jpg")',
            backgroundSize: 'cover'
          }}
        >
          
          
        </ParallaxLayer>

       




      </Parallax>

    </>
  )
}

export default App
