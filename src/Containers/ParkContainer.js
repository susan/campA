import React, { Component } from 'react';
import ParkCard from "../Components/ParkCard.js"
import { Grid} from 'semantic-ui-react';
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import CampgroundParkList from "./CampgroundParkList.js"

export default class ParkContainer extends Component {

	state= {
		parkCampgroundList: [],
		name: "",
	}

  createCampgrounds = (campgroundArray, name) => {
      //console.log("does this work")
      return this.setState({
        parkCampgroundList: campgroundArray,
        name: name
      })
     }

  render() {

    return (
    	<>
    	<Grid celled>
    	<Grid.Column width={8}>
    	</Grid.Column>
       </Grid>
    	   <Switch>
    	   <Route
       path= "/parks"
       render = {()=> (
         this.props.parks.map(park=> {
    		   return <ParkCard key={park.id} park = {park} createCampgrounds={this.createCampgrounds}/>
    	   })
       )}
     />
       <Route
       path="/campgroundlist"
       render = {(props)=> (
       <CampgroundParkList campgrounds= {this.state.parkCampgroundList}/>
       )}
       />
       </Switch>
    	</>
    )
  }
}
//
