import React from 'react'
import './ConnectSection.css'
import emailIcon from "../Connect/email.png";
import phoneIcon from "../Connect/phone-solid-full.svg";
import linkedinIcon from "../Connect/linkedin.png";
import twitterIcon from "../Connect/twitter.png";
import instagramIcon from "../Connect/instagram.png";
import github from "../Connect/githubimage.png";

const ConnectSection = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "56636066-b90a-4afd-9c90-74d246f8f3da");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
      event.target.reset();
    } else {
      alert("Something went wrong");
    }
  };
  return (
    <div id='Contact' className="connect">
      <div className="connect-div">
        <div className="getintouch">
          <h1>Get in touch</h1>
          <img width={100} src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTEuNTEgMzAuODQiPjxkZWZzPjxzdHlsZT4uY2xzLTF7ZmlsbDpub25lO3N0cm9rZTojZWI4YTQ0O3N0cm9rZS1taXRlcmxpbWl0OjEwO3N0cm9rZS13aWR0aDo3cHg7fTwvc3R5bGU+PC9kZWZzPjxnIGlkPSJMYXllcl8yIiBkYXRhLW5hbWU9IkxheWVyIDIiPjxnIGlkPSJMYXllcl8xLTIiIGRhdGEtbmFtZT0iTGF5ZXIgMSI+PHBvbHlsaW5lIGNsYXNzPSJjbHMtMSIgcG9pbnRzPSIyLjY3IDUuNDIgMTkuNTkgMjUuNDIgMzYuNTIgNS40MiA1My40NCAyNS40MiA3MC4zNiA1LjQyIDg3LjI4IDI1LjQyIDEwNC4yMSA1LjQyIDEyMS4xMyAyNS40MiAxMzguMDUgNS40MiAxNTQuOTggMjUuNDIgMTcxLjkxIDUuNDIgMTg4Ljg0IDI1LjQyIi8+PC9nPjwvZz48L3N2Zz4=" alt="" />

          <hr className='hr' />
        </div>

        <div className="connect-section">
          <div className="left-connect">
            <h1>LET'S WORK ON SOMETHING GREAT</h1>
            <p>I'm currently looking for new opportunities to further develop my software engineering career. I'am excited to collaborate on projects that push boundaries and create meaningful impact. Let's build someting innovative and exceptional together.</p>
            <div className="info">
              <div className="email">
                <img src={emailIcon} width={30} />
                <a href="mailto:kmitlal864@gmail.com" >kmittal864@gmail.com</a>
              </div>
              <div className="phone">
                <img src={phoneIcon} width={30} />
                <p>+91 9399841295</p>
              </div>
              <div className="contact-img">
                <a href="https://www.linkedin.com/in/kritika-mittal-232570293/"><img src={linkedinIcon} alt="" /></a>
                <a className='githubimage' href="https://github.com/KritikaM11"><img src={github} width={50} /></a>
                <a href="" className='twitter'><img src={twitterIcon} width={45} /></a>
                <a href="" className='insta'><img src={instagramIcon} width={50} /></a>
              </div>

            </div>
          </div>
          <div className="right-connect">
            <form onSubmit={onSubmit}>
              <input type="text" name="name" placeholder='enter your name' required />
              <input type="email" name="email" placeholder='enter your email' required />
              <textarea name="message" placeholder='message' required ></textarea>
              <button type='submit'>Submit</button>
            </form>
          </div>
        </div>
        <div className='footer'><p>Copyright ©2025 Kritika Mittal</p></div>
      </div>
    </div>
  )
}

export default ConnectSection