import React from "react";
import { HashLink as Link } from 'react-router-hash-link';
import Lottie from 'react-lottie-segments';
import Json from '../assets/coding-girl.json';
import Typed from 'react-typed';
import './home.css';
import Resume from '../assets/Resume.pdf'

function Home(props) {
  return (
    <div id="home" style={{background: "#283060"}}>
          <div className="info">
        <h3>Hi There,</h3>
        <h1>I'm <span className="name">Lauren Birts</span></h1>
        <Typed
          className="typing"
          strings={["I am a Developer", "I am a Engineer ", "I am a Designer", "I am a Creative"]}
          typeSpeed={150}
          backSpeed={100}
          loop
        />
        {/* <Typewriter
          style={{fontSize: "300px"}}
          options={{
            strings: ["I am a programmer", "I am a Web Developer", "I am a Designer", "I am a Creative"],
            autoStart: true,
            loop: true
          }}
        /> */}
        <div className="buttons">
          <button className="btn download-btn"><a href={Resume}>View Resume</a></button>
          <button className="btn contact-btn"><a href="mailto:birtslauren@gmail.com">Contact me</a></button>
        </div>
      </div>

      <div className="ani">
      <Lottie
        options={{loop: true, autoplay: true, animationData: Json}}
        playSegments={{segments: [[0,290], [65, 290]], forceFlag: true}}
      ></Lottie>
      </div>
    </div>
  )
}
 
export default Home;