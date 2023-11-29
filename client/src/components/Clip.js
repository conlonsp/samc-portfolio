import React from 'react'
import YouTube from 'react-youtube'

function Clip({ vidId }) {

  const options = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 1,
      controls: 1,
    }
  }

  return (
    <YouTube videoId={vidId} options={options} id="video"/>
  )
}

export default Clip;

// onReady={this._onReady}