import React, {useState} from "react"
import './about.css'
import HeadShot from '../assets/HeadShot.jpg'

import AboutInfo from '../components/aboutInfo'

function About(props) {

  const [activeTab, setActiveTab] = useState("Tech Stack")

  const handleTabToggle = (e) => {
    setActiveTab(e.target.innerText)
  }

  return (
    <div id="about" style={{backgroundColor: "#1e2448"}}>
      <div className="about-img">
        <img alt="Lauren" src={HeadShot}/>
      </div>
      <div className="about-content">
        <div className="about-brief">
          <h1>About Me</h1>
          <p>I am a Software Engineer with demonstrated skills buidling high quality, optimized & responsive websites. I specialize in JavaScript and have experience working with Rails and React. I also have experience with with Redux and Python.</p>
        </div>
        <div className="about-tabs">
          <h3 className={`tab ${activeTab === "Tech Stack" ? "active-tab" : ""}`} onClick={handleTabToggle}>Tech Stack</h3>
          <h3 className={`tab ${activeTab === "Experience" ? "active-tab" : ""}`} onClick={handleTabToggle}>Experience</h3>
          <h3 className={`tab ${activeTab === "Education" ? "active-tab" : ""}`} onClick={handleTabToggle}>Education</h3>
          <h3 className={`tab ${activeTab === "Certification" ? "active-tab" : ""}`} onClick={handleTabToggle}>Certification</h3>
        </div>
        <AboutInfo activeTab={activeTab}/>
      </div>
    </div>
  )
}
 
export default About;