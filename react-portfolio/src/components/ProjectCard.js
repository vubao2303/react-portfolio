import React from 'react'

// import "../style/style.css";
function PictureCard(props) {
  return (
    <div className="row">
      {/* <div className="col-md-3 click-item"> */}
      <div className="container">
        <div id="project-card" className="row align-items-center">
          <div className="col">
              <div className="container project-1" >
                <a href={props.deployed} target="_blank">
                  <img src={props.image} className="image"
                    className="mx-auto d-block img-fluid img-hover" alt="kissing-booth" />
                </a>
                <div className="middle">
                  <a target="_blank" href={props.deployed} >
                    <h4>SEE LIVE SITE</h4>
                  </a>
                </div>
              </div>
            
          </div>
          <div className="col">
           
              <p className="p-description"> {props.description} Hover on image and click to see live site.
          <br />
                <a target="_blank" href={props.github}>GITHUB LINK</a>
              </p>
            
          </div>
        </div>
      </div>
    </div>
    // </div>
  )
}
export default PictureCard;