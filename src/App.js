import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Greatest App Ever!</h1>
        </header>
        <p className="App-intro">Amat Victoria Curam</p>
      </div>
    );
  }
}

export default App;
