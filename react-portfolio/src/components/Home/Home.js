import React from "react";
import "./style.css";
import work from "./work2.jpg"
import play from "./play2.jpg"
import { Link } from 'react-router-dom'

// const style = {
//   image:hover: {
//   opacity: 0.2
//   }
// };


function Home() {
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col">
          <div className="container">
            <a href="projects.html" target="_blank">
              <img src={work} className="image" 
                alt="work-hard" />
            </a>

            <div className="middle">
              <h2>WORK DELIGENTLY </h2>
              <Link to={'/projects'}>
              <button  id="projects-btn" className=" button  button-rounded-hover">MY WORK </button>
              </Link>
             
            </div>
          </div>
        </div>
        <div className="col">
          <div className="container">
            <img src={play} className="image" 
              alt="play-hard" />
            <div className="middle">
              <h2>PLAY JOYOUSLY </h2>
              <Link to={'/aboutme'}>
              <button id="about-me" className=" button button-rounded-hover">ABOUT ME </button>
              </Link>

              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;