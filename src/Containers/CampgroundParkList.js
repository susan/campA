import React, { Component } from 'react';
import { Link } from "react-router-dom";


export default class CampgroundParkList extends Component {
  render() {
  	console.log("groundprops are", this.props)
  	console.log("---")

  	 const campgroundList = this.props.campgrounds.map(campground => {
    		return <Link to={`/campgroundlist/${campground}`}>
        <li key={campground.id}>{campground}</li>
    		</Link>
     	})

    return (

      <div>
      <ul> {campgroundList}</ul>

      </div>
    );
  }
}

