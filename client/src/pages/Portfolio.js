import React, { useState, useEffect } from "react";


function Portfolio() {
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
            <h3>{p.name}</h3>
          </div>
        )
      })}
    </div>
  )
}

export default Portfolio;