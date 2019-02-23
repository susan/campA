import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom"
import Home from "../Components/Home"
import ParkContainer from "./ParkContainer.js"
import CampgroundContainer from "./CampgroundContainer.js"

const parkURL = "http://localhost:3000/api/v1/parks"
class MainContainer extends Component {
  state = {
  	parks: [],
  }
  componentDidMount() {
    fetch(parkURL)
    .then(resp => resp.json())
    .then(parks => {
       this.setState ({
         parks: parks,
       }, () => console.log(this.state))
     })
  }



  render() {
    return (
      <div>
        <Route
           path="/"
            render={() => (
           <Home />
        )}
        />
      <Switch>
         <Route
           path="Parks"
           render={() => (
           <ParkContainer parks={this.state.parks} />
         )}
         />
         <Route
           path="Campgrounds"
           render={() => (
           <CampgroundContainer />
         )}
         />
         </Switch>
      </div>
    );
  }
}

export default MainContainer;
