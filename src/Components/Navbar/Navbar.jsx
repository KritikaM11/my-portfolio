import React, { useRef, useState, useEffect  } from 'react'
import './Navbar.css'
import kritika from "./navphoto/image.png"
import AnchorLink from 'react-anchor-link-smooth-scroll'
import hamburger from "./navphoto/hamburger.png"
import cross from "./navphoto/cross.png"

const navBar = () => {
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "-20px";
  }
  const closeMenu = () => {
    menuRef.current.style.right = "-320px"
  }
  const [theme, setTheme] = useState("light");

  // Check system preference or default to light
  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <div id='Navbar' className='navBar'>
      <div className="nav-section">
        <img className='kritika' src={kritika} width={150} alt='logo' />
        <img className='hamburger' onClick={openMenu} src={hamburger} width={50} />
        <ul className="nav-content" ref={menuRef}>
          <img className='cross' onClick={closeMenu} src={cross} width={60} />
          <AnchorLink className='anchor-link' offset='50' href='#hero'><li>Home</li></AnchorLink>
          <AnchorLink className='anchor-link' offset='50' href='#Aboutme'><li>About me</li></AnchorLink>
          <AnchorLink className='anchor-link' offset='50' href='#Skills'><li>Skills</li></AnchorLink>
          <AnchorLink className='anchor-link' offset='50' href='#Projects'> <li>Projects</li></AnchorLink>
          <AnchorLink className='anchor-link' offset='50' href='#Contact'><li>Contact</li></AnchorLink>
          {/* Theme Toggle Button */}
          <div className="theme-toggle" onClick={toggleTheme}>
            {theme === "light" ? "🌙" : "☀️"}
          </div>
        </ul>
      </div>
    </div>
  )
}

export default navBar