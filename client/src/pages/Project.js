import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function Project() {
  const [proj, setProj] = useState({})

  const params = useParams()

  useEffect(() => {
    fetch(`/projects/${params.id}`)
    .then(r => {
      if(r.ok) {
        r.json().then(data => setProj(data))
      }
    })
  }, [])

  console.log(proj)

  return (
    <div>
      <h1>{proj.name}</h1>
      <h3>{proj.tech}</h3>
      <p>{proj.func}</p>
      <Link to={proj.gh_url}>{proj.gh_url}</Link>
    </div>
  )
}

export default Project