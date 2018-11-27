import React, { Component } from "react";
import HomeContainer from "./containers/HomeContainer";
import { Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Route exact path="/" component={HomeContainer} />

        <footer>Made by Aubree Abril</footer>
      </div>
    );
  }
}

export default App;
