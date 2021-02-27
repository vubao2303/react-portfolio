import React from "react";
import "./style.css";
import B from "./B.jpeg"


function Me() {
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col">
          <div className="container">
            <img src={B} alt="B's potrait" className="image" />   
          </div>
        </div>
        <div className="col">
          <div className="container">
          <div className="dropdown">
          <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
            My Skills
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a className="dropdown-item">Problem Solving</a></li>
            <li><a className="dropdown-item">Time Management</a></li>
            <li><a className="dropdown-item">Semantic HTML</a></li>
            <li><a className="dropdown-item">Pseudocode</a></li>
            <li><a className="dropdown-item">Web APi</a></li>
            <li><a className="dropdown-item">Customer Service</a></li>
            <li><a className="dropdown-item">Leadership</a></li>
            <li><a className="dropdown-item">Organization Skills</a></li>
            <li><a className="dropdown-item">Team Building</a></li>
            <li><a className="dropdown-item">Server Side API</a></li>
            <li><a className="dropdown-item">Public Speaking</a></li>
            <li><a className="dropdown-item">Communication</a></li>
            <li><a className="dropdown-item">Multitasking</a></li>
            <li><a className="dropdown-item">Tutoring</a></li>
            <li><a className="dropdown-item">Mentoring</a></li>
            <li><a className="dropdown-item">Markdown</a></li>
            <li><a className="dropdown-item">Staff Development</a></li>
            <li><a className="dropdown-item">Volunteer Management</a></li>
          </ul>
        </div>
        <br/>
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              Industry Knowledge
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a className="dropdown-item">Front-end Development</a></li>
              <li><a className="dropdown-item">Customer Relationship Management (CRM)</a></li>
              <li><a className="dropdown-item">Event Management</a></li>
              <li><a className="dropdown-item">Event Planning</a></li>
              <li><a className="dropdown-item">Elementary Education</a></li>
              <li><a className="dropdown-item">Nonprofits</a></li>
              
            </ul>
          </div>
          <br/>
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              Tools & Technologies
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              <li><a className="dropdown-item">JavaScript</a></li>
              <li><a className="dropdown-item">jQuery</a></li>
              <li><a className="dropdown-item">Cascading Style Sheets (CSS)</a></li>
              <li><a className="dropdown-item">Bootstrap</a></li>
              <li><a className="dropdown-item">AJAX</a></li>
              <li><a className="dropdown-item">JSON</a></li>
              <li><a className="dropdown-item">GIT</a></li>
              <li><a className="dropdown-item">Microsoft Word</a></li>
              <li><a className="dropdown-item">PowerPoint</a></li>
            </ul>
          </div>
          <br/>
          
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
              About Me
            </button>
            <ul className=" p-description dropdown-menu" aria-labelledby="dropdownMenuButton1"> I graduated with double majored in Liberal Studies and Social Behavior, but afterbackpacking around 30 countries, I realized that technology and computer science are taking over the
              world. Everyone is looking for the newestdevelopments and with them comes the creativeness and valuable
              tools. I want tobe part of the technology evolution to help shape the world into a more modernand productive
              environment or at the very least, understand the concept ofthis digital world that the future will soon
              mostly be built on.  </ul>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Me;