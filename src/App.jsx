import React from 'react'

import './index.css'

import { BrowserRouter } from 'react-router-dom'
import About from "./components/About"
import Contact from "./components/Contact"
import Experience from "./components/Experience"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import StarsCanvas from "./components/canvas/Stars"

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>

        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar/>
          <Hero/>
        </div>

        <div className='relative z-0'>
          <About/>
          <Experience/>
          <StarsCanvas/>
        </div>

        <div className='relative z-0'>
          <Contact/>
          <StarsCanvas/>
        </div>

      </div>
    </BrowserRouter>
  )
}

export default App
