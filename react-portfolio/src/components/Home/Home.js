import React from "react";
import "./style.css";
import work from "./work2.jpg"
import play from "./play2.jpg"


{/* <img src={require('./work2.jpg')} /> */}
function Home() {
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col">
          <div className="container">
            <a href="projects.html" target="_blank">
              <img src={work} className="image" className="mx-auto d-block img-fluid img-hover"
                alt="work-hard"/>
            </a>
            <div className="middle">
              <h2>WORK DELIGENTLY </h2>
              <button id="projects-btn" className=" button  button-rounded-hover">MY WORK </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="container">
            <img src= {play} className="image" className="mx-auto d-block img-fluid img-hover"
              alt="play-hard" />
            <div className="middle">
              <h2>PLAY JOYOUSLY </h2>
              <button id="about-me" className=" button button-rounded-hover">ABOUT ME </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;