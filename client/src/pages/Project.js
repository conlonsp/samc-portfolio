import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import Clip from "../components/Clip";
import Button from '@mui/material/Button'

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
        <Button onClick={() => window.location.reload(false)} style={{cursor: 'pointer'}}>Back</Button>
        :
        <div>
          <h1>{proj.name}</h1>
          <Clip vidId={proj.yt_id} />
          <Link to={proj.gh_url}>{proj.gh_url}</Link>
          <h3>{proj.tech}</h3>
          <h3>{proj.func}</h3>
        </div>
      }
    </div>
  )
}

export default Project