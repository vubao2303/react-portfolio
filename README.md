# react-portfolio
Update portfolio using React. This project has many components that appears on multiple pages. Projects will be populated using one project card that renders images, github link, description, and linkedIn link using inofrmation from packakge.json. React Router used path to display homepage, aboutme page and project page. 

![Demo Gif]()



## Deployed-Link

[Deployed Link](https://vubao2303.github.io/react-portfolio/)  

# Table of Contents 

| |||
|:-:|:-:|:-:|
|[Project Introduction](#react-portfolio) | [Table of Contents](#table-of-contents) | [Deployed Link](#Deployed-Link) |  [Description of Page Building](#Description-of-Page-Building)| [Code Snippets](#code-snippet) 
| [Technologies Used](#Technologies-Used) |  [Author](#author) | [License](#License)

---

## Description of Page Building 
* Install Create React App globally by running `npx create-react-app react-app` in terminal
* In public folder contains the index.html file
   <ul> 
  <li> Bacic HTML doctype
  <li> Add bootstrap access link 
  <li> Contains root id so we can use to twist the page 
  <li> Pictures folder that has all the projects' screenshots and self-portrait
  </li>
  </ul>

* In src (source) folder
  <ul> 
  <li> Component folders 

    - Header file has Project header
    - Footer includes email and resume
    - Home using Link from react-router-dom to render the page when the button is clicked 
    - Me folder styled with dropdown style with each dropdown item is skills and information about myself 
    - NavBar file have my name B as click to the home page and linked and github page link

    - ProjectCard.js file grabs id, image, name, github link and deployed link  from App.js and uses as props to populate the cards on the page 
  
  <li> Pages folder 
    - About me page render information about me
    - Main page has two buttons, one takes to my project, one take to aboutme 
    - Projects page render all my projects
  

  <li> Style folder contains style.css file to decorate the interface
  <li> App.js file
  
  - Import all the necessary components to set up the page 
  - import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
  - Function App uer router and have the exact path that render the pages 

  <li> Project.json file contains all the projects' object, each has an id, a name, a github link, deployed link, and project's description 
  <li> index.js file render App component and send it to html 
  
  </li>
  </ul>


## Code Snippet
In terminal, run 
`npx create-react-app react-app`
`npm i` to install dependencies 


To use components in  application
``` Javascript
ReactDOM.render(<App />, document.getElementById("root"));
```

``` Javascript
  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/projects" component={Project} />
          <Route exact path="/aboutme" component={AboutMe} />
        </Switch>
        <Footer/>
      </div>
    </Router>
  );
```

Creates components as independent and reusable bits of code
``` Javascript

function PictureCard { deployed, github, image, description, name } {
  return (
    <div className="row">
      <div className="col">
        <img src={image} className="image"
          className="mx-auto d-block img-fluid img-hover" alt={name} />
        <a target="_blank" href={deployed} >
          <h4>SEE LIVE SITE</h4>
        </a>
      </div>
      <div className="col">
        <p className="p-description"> {description} Hover on image and click to see live site.
          <br />
          <a target="_blank" href={github}>GITHUB LINK</a>
        </p>
      </div>
    </div>)}
export default PictureCard;
``` 

Import react and other components to App.js file
``` Javascript
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import Project from "./pages/Project";
import AboutMe from "./pages/AboutMe";
import NavBar from "./components/NavBar/NavBar"
import Footer from "./components/Footer/Footer"
```

Set property in pages to send to other components 
``` Javascript 
{Projects.map((pro, index) => {
  return (
    <ProjectCard
      key={index}
      name={pro.name}
      id={pro.id}
      image={pro.image}
      deployed={pro.deployed}
      github={pro.github}
      description={pro.description}
    />
  )
})}
```

## Technologies Used

||||||
|:-:|:-:|:-:|:-:|:-:|
|[HTML](https://developer.mozilla.org/en-US/docs/Web/HTML) | [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS) | [React](https://reactjs.org/docs/getting-started.html) | [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)  | [GitHub](https://github.com/)

<!-- |||||
|:-:|:-:|:-:|:-:|
|[Express](https://expressjs.com/) |[Node.js](https://nodejs.org/en/) | [Mongoose](https://mongoosejs.com/docs/defaults.html) | [Morgan](https://www.npmjs.com/package/morgan) -->


<br>

## Author

| | |
| --- | --- |
|**B Tram Vu**|[![Linkedin](https://i.stack.imgur.com/gVE0j.png) LinkedIn](https://www.linkedin.com/in/b-tram-vu/) [![GitHub](https://i.stack.imgur.com/tskMh.png) GitHub](https://github.com/vubao2303) | [![Portfolio](https://i.stack.imgur.com/gVE0j.png) Portfolio](https://www.linkedin.com/in/b-tram-vu-866250121/)


---

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
