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
    </div>
  )
}

export default Portfolio;