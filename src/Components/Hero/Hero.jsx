import React, { useLayoutEffect, useRef } from 'react' 
import './Hero.css'
import img_hero from '../../photos/img_hero.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import gsap from 'gsap'

const Hero = () => {
    const comp = useRef(null);
   const paragraphText = "I create dynamic, responsive and interactive digital experiences that blend creativity with efficiency.";

    // 2. Split the text into individual spans
    // We use a map function to wrap every letter in a <span>
    const splitParagraph = paragraphText.split("").map((char, index) => (
        <span key={index} className="char" style={{ opacity: 0, display: 'inline-block' }}>
            {/* If the character is a space, we use a non-breaking space code, otherwise the letter */}
            {char === " " ? "\u00A0" : char}
        </span>
    ));

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const t1 = gsap.timeline();
            
            // Standard animations for Headings/Buttons
            t1.from(["#intro-text", "#name-text", "#role-text", ".hero-buttons button"], {
                opacity: 0,      
                y: "+=30",       
                stagger: 0.1,    
                duration: 0.8,     
                ease: "power2.out", 
            })
            
            // 3. The "Character Effect" Animation
            .to(".char", {
                opacity: 1,
                x: 0,          // Reset position
                stagger: 0.02, // 0.02s delay between each letter (Left to Right effect)
                duration: 0.1, // How fast each letter fades in
                ease: "none",
            }, "-=0.5") // Starts overlapping with previous animation

            .from(".hero-img", {
                opacity: 0,
                x: "+=50",
                duration: 1,
            }, "-=1") 

        }, comp); 

        return () => ctx.revert(); 
    }, []);
    return (
        <div id='hero' className='hero relative' ref={comp}>
            <div className="hero-gradient" ></div>
            <div className="hero-content">
                <div className="hero-left">
                    <h3 id="intro-text">Hello!</h3>
                    <h1 id="name-text"> I'm Kritika Mittal</h1>
                    <h2 id="role-text">A MERN Stack Developer</h2>
                    <br />
                    <p id="desc-text" >{splitParagraph}</p>
                    <div className="hero-buttons">
                        <AnchorLink className='anchor-link' offset='50' href='#Contact'>  <button >Connect with me</button></AnchorLink>
                        <a href="https://drive.google.com/file/d/1t0dOAM-EvQdnFa2ZRBGqvE2Je1VLc7B3/view?usp=sharing"> <button className='resume'  >My Resume</button></a>
                       
                    </div>
                </div>
                <div className="hero-right">
                    <div className="hero-img">
                        <img src={img_hero} alt='profile' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero