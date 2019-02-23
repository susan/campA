import React, { Component } from 'react';
import { Route, Switch, withRouter } from "react-router-dom"
import NavBar from "./Components/NavBar.js"
import MainContainer from "./Containers/MainContainer.js";
import LoginForm from "./Components/LoginForm.js"
import SignupForm from "./Components/SignupForm.js"
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    user: null,
  }

	signupFormSubmitHandler = (event, userInfo) => {
    event.preventDefault();
    this.createUser(userInfo);
    this.props.history.push("/");
  };

  loginSubmitHandler = (event, userInfo) => {
    event.preventDefault();
    this.getUser(userInfo);
    this.props.history.push("/");
  };

  createUser = userInfo => {
    fetch("http;//localhouse:3000/api/v1/users", {

      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify({
        user: {
        username: userInfo.signupUsername,
        useremail: userInfo.signupEmail,
        password: userInfo.signupPassword,
        }

      })
    })
    .then(resp=> resp.json())
    .then (user => {
    localStorage.setItem("token", user.jwt);
      this.setState({
        user: user
      })
    })
  };

  getUser = (event, userInfo) => {
    fetch("http;//localhouse:3000/api/v1/users", {

      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify({
        user: {
        username: userInfo.loginUsername,
        useremail: userInfo.loginUserEmail,
        password: userInfo.loginPassword,
        }

      })
    })
     .then(resp => resp.json())
     .then(resp => {

      localStorage.setItem("token", resp.jwt)
      this.setState({
        user: resp.user
      })
    })
  };

  render() {
    return (
      <div>
      <NavBar />
       <Switch>
       <Route
            path="/register"
            render={() => (
              <SignupForm
                submitHandler={this.signupFormSubmitHandler}
              />
            )}
          />
          <Route
            path="/login"
            render={() => (
              <LoginForm
                submitHandler={this.loginSubmitHandler}
              />
            )}
            />
          <Route
          component={MainContainer}
          />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
