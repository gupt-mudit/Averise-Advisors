import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Navbar} from "./components/Navbar.jsx";
import {Hero} from "./components/Hero.jsx";
import {About} from "./components/About.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
      <>
          <div className="main">
          <Navbar/>
          <Hero/>
          </div>
          <div>
              <About/>
              <hr className="bg-gray-300 h-px border-0 mx-24"/>
          </div>
          <About/>

      </>
  )
}

export default App
