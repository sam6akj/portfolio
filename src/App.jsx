import { useState } from 'react'
import Navbar from './sections/Navbar'
import Home from './sections/Home'
import About from './sections/About'
import Contact from './sections/Contact'
import SocialLinks from './sections/SocialLinks'
import Skills from './sections/Skills'
import Project from './sections/Project'

function App() {

  return (
    <>
      <div>
      <Navbar />
      <Home />
      <About />
      <Project />
      <Skills />
      <Contact />
      <SocialLinks />
      </div>
    </>
  )
}

export default App
