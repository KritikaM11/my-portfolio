import React from 'react'


import Navbar from './Components/Navbar/Navbar'
import Aboutme from './Components/Aboutme/Aboutme'
import Hero from './Components/Hero/Hero'
import ConnectSection from './Components/Connect/ConnectSection'
import Skills from './Components/skills/Skills'
import Projects from './Components/Projects/Projects'
const App = () => {
  return (
    <div>
      <Navbar />
      <section>  < Hero /></section>
      <section> < Aboutme /></section>
      <section>< Skills /></section>
      <section>< Projects /></section>
      <section><ConnectSection /></section>



    </div>
  )
}

export default App
