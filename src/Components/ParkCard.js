import React, { Component } from 'react';
import { Card } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default class ParkCard extends Component {

  campgroundHandler = () =>{
    return this.props.createCampgrounds(this.props.park.campgrounds)
  }

  render() {
  	console.log("pcard props are", this.props)
  	const {img1_url, full_name} = this.props.park

    return (

      <div>
      <Card.Header className= "card">
       <img className = "img" alt="" src={img1_url} />
       <p> {full_name} </p>
       <Link to="/campgroundParkList">
      <p onClick={this.campgroundHandler}>  Campgrounds </p>
       </Link>

     </Card.Header >
      </div>

    );
  }
}

