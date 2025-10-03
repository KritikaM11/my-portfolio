import React from 'react'
import './Aboutme.css'
import aboutme from '../../photos/aboutmee.jpg'
const Aboutme = () => {
  return (
    <div id='Aboutme' className='aboutme'>
      <div className="about-title">
        
        <h1>About me</h1>
        <img width={100} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTEuNTEgMzAuODQiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDpub25lO3N0cm9rZTojZWI4YTQ0O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo3cHg7fTwvc3R5bGU+PC9kZWZzPjxnIGlkPSJMYXllcl8yIiBkYXRhLW5hbWU9IkxheWVyIDIiPjxnIGlkPSJMYXllcl8xLTIiIGRhdGEtbmFtZT0iTGF5ZXIgMSI+PHBvbHlsaW5lIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSIyLjY3IDUuNDIgMTkuNTkgMjUuNDIgMzYuNTIgNS40MiA1My40NCAyNS40MiA3MC4zNiA1LjQyIDg3LjI4IDI1LjQyIDEwNC4yMSA1LjQyIDEyMS4xMyAyNS40MiAxMzguMDUgNS40MiAxNTQuOTggMjUuNDIgMTcxLjkxIDUuNDIgMTg4Ljg0IDI1LjQyIi8+PC9nPjwvZz48L3N2Zz4=" alt="" />
        <hr className='hr' />
      </div>
      <div className="about-section">
        <div className="about-left">
          <img src ={aboutme} alt="aboutimg" />
        </div>
        <div className="about-right">
          <p>
          I’m a dedicated Computer Science student with a passion for both problem-solving and web development.
          Alongside front-end and back-end skills, I have hands-on experience with databases like MySQL and PostgreSQL, ensuring that the applications I develop are not just visually appealing but also robust and data-driven. I also actively use Git and GitHub for version control and collaborative development.
          <br />
          <br />
          My ultimate goal is to grow as a software engineer, contribute to impactful projects, and bring value through technology-driven solutions.
        </p>
        </div>
      </div>

    </div>
  )
}

export default Aboutme