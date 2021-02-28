import React from 'react'

// import "../style/style.css";
function PictureCard(props) {
  return (
    <div className="row">
    {/* <div className="col-md-3 click-item"> */}
      <div className="container">
        <div className="row align-items-center">
          <div className="col">
            <div className="container">
              <div className="container project-1" >
                <a href="https://vubao2303.github.io/weather-dashboard/" target="_blank">
                  <img src={props.image} className="image" 
                    className="mx-auto d-block img-fluid img-hover" alt="kissing-booth" />
                </a>
                <div className="middle">
                  <a href="https://party-x.herokuapp.com/">
                    <h4>SEE LIVE SITE</h4>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="container">
              <p className="p-description">This full stack application built using MVC framework is a major milestone in the progression of four fledgling developers. Together we created an application that allows a user to create an account and login to an account dashboard. The dashboard will show the user a list of events that they can attend, view the upcomming events, and create events of their own.
          <br />
                <a href="https://github.com/vubao2303/Project-2">GITHUB LINK</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  )
}
export default PictureCard;