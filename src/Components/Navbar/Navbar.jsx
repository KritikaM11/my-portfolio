import React, { useRef } from 'react'
import './Navbar.css'
import kritika from './image.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import hamburger from "./hamburger.png"
import cross from "./cross.png"

const navBar = () => {
  const menuRef = useRef();

  const openMenu = () =>{
    menuRef.current.style.right = "0";
  }
  const closeMenu = ()=>{
    menuRef.current.style.right = "-300px"
  }
  return (
    <div id='Navbar' className='navBar'>
      <div className="nav-section">
        <img className='kritika' src={kritika} width={150} />
        <img className='hamburger' onClick={openMenu} src={hamburger} width={50} />
        <ul className="nav-content" ref={menuRef}>
          <img className='cross' onClick={closeMenu} src={cross} width={60} />
          <AnchorLink className='anchor-link' offset='50' href='#hero'><li>Home</li></AnchorLink>
          <AnchorLink className='anchor-link' offset='50' href='#Aboutme'><li>About me</li></AnchorLink>
          <AnchorLink className='anchor-link' offset='50' href='#Skills'><li>Skills</li></AnchorLink>
          <AnchorLink className='anchor-link' offset='50' href='#Projects'> <li>Projects</li></AnchorLink>
          <AnchorLink className='anchor-link' offset='50' href='#Contact'><li>Contact</li></AnchorLink>
        </ul>
      </div>
    </div>
  )
}

export default navBar