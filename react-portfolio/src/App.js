import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from "./pages/Main";
import Project from "./pages/Project";
import AboutMe from "./pages/AboutMe";
import NavBar from "./components/NavBar/NavBar"
import Footer from "./components/Footer/Footer"
// import Nav from "./components/Nav";
// import { StoreProvider } from "./utils/GlobalState";
// import FavoritesList from "./pages/FavoritesList";

function App() {
  return (
    <Router>
      <div>
        {/* <StoreProvider> */}
          <NavBar />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/projects" component={Project} />
            <Route exact path="/aboutme" component={AboutMe} />
            {/* <Route exact path="/home" component={Home} />
            <Route exact path="/favorites" component={FavoritesList} />
            <Route exact path="/posts/:id" component={Detail} />
            <Route component={NoMatch} /> */}
          </Switch>
          <Footer/>
        {/* </StoreProvider> */}
      </div>
    </Router>
  );
}

export default App;

