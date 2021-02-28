import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar/NavBar"
import Footer from "../components/Footer/Footer"
import ProjectCard from "../components/ProjectCard"
// import '../../index.css';
import Projects from "../project.json";


function Project() {
  // set hook for project 
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    loadProject();
  }, [])

  const loadProject = () => {
    setProjects(projects)
  }



  return (
    <div className="Project">
      {/* // i am gonne need a  */}
      <>
        {Projects.map((pro, index) => {
          return (
            <ProjectCard
              key={index}
              name={pro.name}
              id={pro.id}
              image={pro.image}
              deployed={pro.deploy}
              github={pro.github}
            />
          )
        })}

      </>

    </div>
  );
}

export default Project;