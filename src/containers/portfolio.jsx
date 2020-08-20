import React, {useState} from "react"
import './portfolio.css'
import Projects from '../components/projects'

function Portfolio(props) {

  const [activeTab, setActiveTab] = useState("All")

  const handleTabToggle = (e) => {
    setActiveTab(e.target.innerText)
  }

  return (
    <div id="portfolio" style={{backgroundColor: "#1e2448"}}>
      <h1>Portfolio</h1>
      <h3>Here are some of my recent works</h3>
      <div className="project-tabs">
            <p className={`project-tab ${activeTab === "All" ? "active-project" : ""}`} onClick={handleTabToggle}>All</p>
            <p className={`project-tab ${activeTab === "Web" ? "active-project" : ""}`} onClick={handleTabToggle}>Web</p>
            <p className={`project-tab ${activeTab === "Mobile" ? "active-project" : ""}`} onClick={handleTabToggle}>Mobile</p>
            <p className={`project-tab ${activeTab === "Other" ? "active-project" : ""}`} onClick={handleTabToggle}>Other</p>
      </div>
      <Projects activeTab={activeTab} />
    </div>
  )
}
 
export default Portfolio;