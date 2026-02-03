import React from 'react'
import './projects.css'
import github from '../skills/skillsimg/github.png';
import spotify from "./projectphoto/spotify.png"
import golf from "./projectphoto/golf.png"
import myntra from "./projectphoto/myntra.png"
import stayscout from "./projectphoto/stayscout.png"

const projects = () => {
  return (
    <div id='Projects' className='projects'>
      <div className="project">
        <h1>My Projects</h1>
        <img width={100} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTEuNTEgMzAuODQiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDpub25lO3N0cm9rZTojZWI4YTQ0O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo3cHg7fTwvc3R5bGU+PC9kZWZzPjxnIGlkPSJMYXllcl8yIiBkYXRhLW5hbWU9IkxheWVyIDIiPjxnIGlkPSJMYXllcl8xLTIiIGRhdGEtbmFtZT0iTGF5ZXIgMSI+PHBvbHlsaW5lIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSIyLjY3IDUuNDIgMTkuNTkgMjUuNDIgMzYuNTIgNS40MiA1My40NCAyNS40MiA3MC4zNiA1LjQyIDg3LjI4IDI1LjQyIDEwNC4yMSA1LjQyIDEyMS4xMyAyNS40MiAxMzguMDUgNS40MiAxNTQuOTggMjUuNDIgMTcxLjkxIDUuNDIgMTg4Ljg0IDI1LjQyIi8+PC9nPjwvZz48L3N2Zz4=" alt="" />
        <hr className='hr' />
      </div>
      <div className="project-content">
        <div className="myproject">
          <div className="myproject-left">
            <h1>StayScout</h1>
            <a href="https://stayscout-fdc8.onrender.com"><button>See it in Action</button></a>
            <h3>A full-stack accommodation platform built with MERN, featuring secure Google OAuth login, Razorpay integration, and cloud image hosting.</h3>
            <p>Node JS, EJS, Express, Mongoose, MongoDB, HTML, CSS, JavaScript</ p>
            <a href="https://github.com/KritikaM11/StayScout"><img src={github} alt="" width={35} /></a>
          </div>
          <div className="myproject-right">
            <img src={stayscout} width={500} height={280} />
          </div>
        </div>
        <div className="myproject">
          <div className="myproject-left">
            <h1>AsyncBeats</h1>
            <a href="https://kritikam11.github.io/AsyncBeats/"><button>See it in Action</button></a>
            <h3>Responsive & Interactive Song Website</h3>
            <p>HTML, CSS, JavaScript (Async/Await)</ p>
            <a href="https://github.com/KritikaM11/AsyncBeats"><img src={github} alt="" width={35} /></a>
          </div>
          <div className="myproject-right">
            <img src={spotify} width={500} height={280} />
          </div>
        </div>
        <div className="myproject">
          <div className="myproject-left">
            <h1>Golfy</h1>
            <a href="https://kritikam11.github.io/golfy/"><button>See it in Action</button></a>
            <h3> Interactive Golf Website Landing Page</h3>
            <p>HTML, CSS, JavaScript, GSAP</ p>
            <a href="https://github.com/KritikaM11/golfy"><img src={github} width={35} /></a>
          </div>
          <div className="myproject-right">
            <img src={golf} width={500} height={280} />
          </div>
        </div>
        <div className="myproject">
          <div className="myproject-left">
            <h1>Myntra</h1>
            <a href="https://kritikam11.github.io/Shopping-Website/"><button>See it in Action</button></a>
            <h3>Shopping Myntra Website Landing Page</h3>
            <p>HTML, CSS, JS</ p>
            <a href="https://github.com/KritikaM11/Shopping-Website"><img src={github} width={35} /></a>
          </div>
          <div className="myproject-right">
            <img src={myntra} width={500} height={280} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default projects