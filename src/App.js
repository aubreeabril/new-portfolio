import React, { Component, Fragment } from "react";
import HomeContainer from "./containers/HomeContainer";
import Menu from "./components/Menu";
import { Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <Route exact path="/" component={HomeContainer} />

        <footer>Made by Aubree Abril</footer>
      </div>
    );
  }
}

export default App;
