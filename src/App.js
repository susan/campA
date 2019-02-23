import React, { Component } from 'react';
import NavBar from "./Components/NavBar.js"
import MainContainer from "./Containers/MainContainer.js"
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (

      <div>
      <NavBar />
       <MainContainer />
      </div>
    );
  }
}

export default App;
