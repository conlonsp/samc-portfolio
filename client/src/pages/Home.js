import React from "react";
import { Link } from "react-router-dom";

function Home() {

  return (
    <div>
      <h1>Home</h1>
      <div>
        <h4>Introduction/Greeting goes here</h4>
        <p>
          This is my introduction. This is my greeting. This is my introduction. This is my greeting. This is my introduction. This is my greeting. This is my introduction. This is my greeting.
        </p>
      </div>
      <div>
        <h4>Professional Tagline/Mission Statement</h4>
        <p>
          This is my tagline. This is my mission statement. This is my tagline. This is my mission statement.
        </p>
      </div>
      <div>
        <h4>Social Media Links:</h4>
        <span>
          <Link to='https://www.linkedin.com/in/sam-conlon/'>LinkedIn</Link>
          <Link to='https://github.com/conlonsp'>Github</Link>
          <Link to='https://medium.com/@conlonsp'>Blog</Link>
        </span>
      </div>
      <div>
        <h4>Contact Info:</h4>
        <p>seconlonsp@gmail.com</p>
      </div>
    </div>
  )
}

export default Home;