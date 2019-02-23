import React, { Component } from 'react';
import ParkCard from "../Components/ParkCard.js"
import { Grid} from 'semantic-ui-react';

export default class ParkContainer extends Component {
  createCampgrounds = (event) => {
      console.log("does this work")
      console.log(event.target.value)

     }


  render() {

    	const parkList= this.props.parks.map(park=>{
    		return <ParkCard key={park.id} park = {park} createCampgrounds={this.createCampgrounds}/>
    	})

    return (
    	<>
    	<Grid celled>
    	<Grid.Column width={2}>
       {parkList}
       </Grid.Column>
       </Grid>
    	</>
    )
  }
}
