import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom'


function Projects() {
  const [projects, setProjects] = useState([])

  useEffect(() => {
    fetch('/projects')
    .then(r => {
      if(r.ok) {
        r.json().then(data => setProjects(data))
      }
    })
  }, [])

  console.log(projects)

  return (
    <div>
      <h1>Portfolio</h1>
      {projects.map(p => {
        return (
          <div key={p.id}>
            <Link to={`/projects/${p.id}`}>{p.name}</Link>
          </div>
        )
      })}
    </div>
  )
}

export default Projects;