import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

function Project() {
  const [proj, setProj] = useState(null)

  const params = useParams()

  useEffect(() => {
    fetch(`/projects/${params.id}`)
    .then(r => {
      if(r.ok) {
        r.json().then(data => {
          setProj(data)
        })
      }
    })
  }, [])

  return (
    <div>
      {!proj ?
        <h1 onClick={() => window.location.reload(false)} style={{cursor: 'pointer'}}>Back</h1>
        :
        <div>
          <h1>{proj.name}</h1>
          <Link to={proj.gh_url}>{proj.gh_url}</Link>
        </div>
      }
    </div>
  )
}

export default Project