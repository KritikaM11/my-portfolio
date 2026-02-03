import React from 'react'
import './Hero.css'
import img_hero from '../../photos/img_hero.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
    return (
        <div id='hero' className='hero relative'>
            <div className="hero-gradient"></div>
            <div className="hero-content">
                <div className="hero-left">
                    <h3>Hello!</h3>
                    <h1> I'm Kritika Mittal</h1>
                    <h2>A MERN Stack Developer</h2>
                    <br />
                    <p >I create dynamic, responsive websites that blend creativity with efficiency.</p>
                    <div className="hero-buttons">
                        <AnchorLink className='anchor-link' offset='50' href='#Contact'>  <button >Connect with me</button></AnchorLink>
                        <a href="https://drive.google.com/file/d/1pGfQ3p7LJVJsr7TfQyexra8SN7H4RarP/view?usp=sharing"> <button className='resume'>My Resume</button></a>
                       
                    </div>
                </div>
                <div className="hero-right">
                    <div className="hero-img">
                        <img src={img_hero} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero