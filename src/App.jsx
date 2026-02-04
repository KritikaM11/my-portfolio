import React, { useState } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Aboutme from './Components/Aboutme/Aboutme'
import Hero from './Components/Hero/Hero'
import ConnectSection from './Components/Connect/ConnectSection'
import Skills from './Components/skills/Skills'
import Projects from './Components/Projects/Projects'
import PortfolioSection from './Components/PortfolioSection/PortfolioSection'

const App = () => {

  const [heroKey, setHeroKey] = useState(0);
  const [aboutKey, setAboutKey] = useState(0);

  // Functions to reset animations
  const playHeroAnimation = () => {
    setHeroKey(prev => prev + 1);
  };

  const playAboutAnimation = () => {
    setAboutKey(prev => prev + 1);
  };

  return (
    <div>
      <Navbar onHomeClick={playHeroAnimation} onAboutClick={playAboutAnimation}/>
      <section> <Hero key={heroKey} /></section>
      <section> <Aboutme key={aboutKey} /></section>
      <section> <Skills /></section>
      <section> <PortfolioSection /> </section>
      <section> <Projects /></section>
      <section> <ConnectSection /></section>
    </div>
  )
}

export default App