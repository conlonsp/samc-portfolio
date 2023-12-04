import React from "react";
import headshot from '../images/headshot-copy.jpg'

function About() {

  return (
    <div>
      <h1>About</h1>
      <img src={headshot} alt='headshot'/>
      <p>Hi, I'm Sam!</p>
      <p>As a graduate of the Flatiron School's full-stack software engineering program, I'm proficient in a number of languages including: JavaScript, React.js, Ruby on Rails, SQL, and CSS.</p>
      <p>Outside of writing code I'm an avid musician, rock climber, skateboarder, and all-around outdoor enthusiast.
      </p>
      <p>I'm passionate about providing software solutions to individuals and small business to bolster their online platform and attract the masses through functional and dynamic programming.</p>
      <p>Thanks for stopping by!</p>
    </div>
  )
}

export default About;