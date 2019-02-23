import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom"
import Home from "../Components/Home"
import ParkContainer from "./ParkContainer.js"
import CampgroundContainer from "./CampgroundContainer.js"


const photoURL = "http://localhost:3000/api/v1/photos"

class MainContainer extends Component {

  state = {
  	parks: [],
    campgrounds: [],
  }

  componentDidMount() {
    this.fetchByEndpoint('parks')
    this.fetchByEndpoint('campgrounds')
   }

  fetchByEndpoint (endpoint) {
    fetch(`http://localhost:3000/api/v1/${endpoint}`)
    .then(resp => resp.json())
    .then(data => {
       this.setState ({
         [endpoint]: data,
       }, () => console.log(this.state))
    })
  }



  render() {
    return (
       <div>
      <Switch>
         <Route
           path="/parks"
           render={() => (
           <ParkContainer parks={this.state.parks} />
         )}
         />
         <Route
           path="/campgrounds"
           render={() => (
           <CampgroundContainer campgrounds={this.state.campgrounds} />
         )}
         />

        <Route
           path="/"
            render={() => (
           <p> Main page has a few park cards on page </p>

          )}
        />
         </Switch>
      </div>
    );
  }
}

export default MainContainer;
