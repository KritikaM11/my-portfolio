import React from 'react'
import './Skills.css'
import css3 from './skillsimg/icons8-css3-144.png';
import express from './skillsimg/icons8-express-js-80.png';
import github from './skillsimg/github.png';
import html5 from './skillsimg/icons8-html5-144.png';
import javascript from './skillsimg/icons8-javascript-144.png';
import mongodb from './skillsimg/icons8-mongodb-96.png';
import mysql from './skillsimg/icons8-mysql-96.png';
import node from './skillsimg/icons8-nodejs-96.png';
import react from './skillsimg/icons8-react-96.png';
import tailwind from './skillsimg/icons8-tailwind-css-96.png';
import git from './skillsimg/git.png';
import postgres from './skillsimg/postgres.png';


const Skills = () => {
  return (
    <div id='Skills' className='skills'>
      <div className="skills-content">
        <div className="title">
          <h1>My Stack</h1>
          <img width={100} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTEuNTEgMzAuODQiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDpub25lO3N0cm9rZTojZWI4YTQ0O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo3cHg7fTwvc3R5bGU+PC9kZWZzPjxnIGlkPSJMYXllcl8yIiBkYXRhLW5hbWU9IkxheWVyIDIiPjxnIGlkPSJMYXllcl8xLTIiIGRhdGEtbmFtZT0iTGF5ZXIgMSI+PHBvbHlsaW5lIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSIyLjY3IDUuNDIgMTkuNTkgMjUuNDIgMzYuNTIgNS40MiA1My40NCAyNS40MiA3MC4zNiA1LjQyIDg3LjI4IDI1LjQyIDEwNC4yMSA1LjQyIDEyMS4xMyAyNS40MiAxMzguMDUgNS40MiAxNTQuOTggMjUuNDIgMTcxLjkxIDUuNDIgMTg4Ljg0IDI1LjQyIi8+PC9nPjwvZz48L3N2Zz4=" alt="" />
          <hr />
        </div>
        <div className="skills-images">
          <div className="technologies frame">
            <h3>Technologies</h3>
            <div className="html skill">
              <img src={html5} alt="HTML5" />
              <p>HTML5</p>
            </div>
            <div className="css skill">
              <img src={css3} alt="CSS3" />
              <p>CSS3</p>
            </div>
            <div className="js skill">
              <img src={javascript} alt="JavaScript" />
              <p>JAVASCRIPT</p>
            </div>
            <div className="nodejs skill">
              <img src={node} alt="Node.js" />
              <p>NODEJS</p>
            </div>
          </div>
          <div className="framework frame">
            <h3>Libraries/Frameworks</h3>
            <div className="react skill">
              <img src={react} alt="React" />
              <p>REACT</p>
            </div>
            <div className="express skill">
              <img src={express} alt="Express.js" />
              <p>EXPRESS</p>
            </div>
            <div className="tailwind skill">
              <img src={tailwind} alt="Tailwind CSS" />
              <p>TAILWIND CSS</p>
            </div>
          </div>

          <div className="database frame">
            <h3>Database</h3>
            
            <div className="mongodb skill">
              <img src={mongodb} alt="MongoDB" />
              <p>MONGODB</p>
            </div>
            <div className="mysql skill">
              <img src={mysql} alt="MySQL" />
              <p>MYSQL</p>
            </div>
            <div className="postgres skill">
              <img src={postgres} alt="Git" />
              <p>POSTGRESQL</p>
            </div>
          </div>
          <div className="tools frame">
            <h3>Tools</h3>
            <div className="github skill">
              <img src={github} alt="Github" />
              <p>GITHUB</p>
            </div>
            <div className="git skill">
              <img src={git} alt="Git" />
              <p>GIT</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Skills