import React, {useState, useEffect} from "react"
import myProjects from '../projects.json'
 
function Projects(props) {

  const [isOpen, setisOpen] = useState(false) 
  const [projects, setProjects] = useState(myProjects) 
  const [loadedProjects, setLoadedProjects] = useState(projects.slice(0, 3))

  const toggleView = () => {
    setisOpen(!isOpen)
  }

  useEffect(() => {
    let filtered
    switch (props.activeTab) {
      case "All":
        setProjects(myProjects)
        break;
      case "Web":
        filtered = myProjects.filter(proj => proj.type === "Web App")
        setProjects(filtered)
        break;
      case "Mobile":
        filtered = myProjects.filter(proj => proj.type === "Mobile App")
        setProjects(filtered)
        break;
      case "Other":
        filtered = myProjects.filter(proj => proj.type !== "Mobile App")
        setProjects(filtered.filter(proj => proj.type !== "Web App"))
        break;  
      default:
        setProjects(myProjects)
        break;
    }
  }, [props.activeTab])

  useEffect(() => {
    if (isOpen) {
      setLoadedProjects(projects)
    } else {
      setLoadedProjects(projects.slice(0, 3))
    }
  }, [projects, isOpen])

  return (
    <div className="projects">
      <div className={props.activeTab}>
        {loadedProjects.map(project => (
          <div className="project-card">
          <img src={project.image} alt={project.name}/>
          <div className="card-content">
            <h4>{project.name}</h4>
            <h5>
              <i className="website-i"></i>
              {project.type}
            </h5>
            <p>{project.description}</p>
            <p><br/><strong>Technologies Used: </strong>{project.tech}</p>
            <div class="card-icons">
              <a class="card-icon" href={project.github}>
                  <i class="fa fa-github card-i"></i>
              </a>
              <a class="card-icon demo" href={project.demo}>
                  <i class="fa fa-link card-i"></i>
              </a>
            </div>
          </div>
        </div>
        ))}
      </div>
      {(projects.length > 3) ? 
        <button className="btn view-btn" onClick={toggleView}>{isOpen ? "View Less" : "View More"}</button>
        :
        null
      }
    </div>
  )
}
 
export default Projects;