import React, {useState, useEffect} from "react";
import Skills from './skills';

const experience = [
    {name: "Freelance Web Developer", description: "Upwork"},
    {name: "Blogger", description: "Medium"}
]

const education = [
    {name: "Software Engineering", description: "Flatiron School from 04/2020 to 07/2020"},
    {name: "Full Stack Development", description: "Code Skool from 01/2020 to 03/2020"},
    {name: "Health Education and Behavior", description: "University of Florida from 06/2015 to 05/2020"}
]

const certification = [
    {name: "Responsive Web Design", description: "freeCodeCamp.org"},
    {name: "JavaScript Algorithms and Data Structures", description: "freeCodeCamp.org"},
    {name: "Introduction to Discrete Mathematics", description: "Coursera"}
]
 
function AboutInfo(props) {
    const [info, setInfo] = useState([])
    useEffect(() => {
        switch (props.activeTab) {
            case "Tech Stack":
              setInfo([])
              break;
            case "Experience":
              setInfo(experience)
              break;
            case "Education":
              setInfo(education)
              break;
            case "Certification":
              setInfo(certification)
              break;  
            default:
              setInfo([])
              break;
        }
    }, [props.activeTab])

  return (
    <div className={props.activeTab + " tab-content"}>
    {props.activeTab === "Tech Stack" ? <Skills/> :
        info.map(info => (
        <div className="section">
           <h4>{info.name}</h4> 
           <p>{info.description}</p>
        </div>
    ))}
    </div>
  )
}
 
export default AboutInfo;