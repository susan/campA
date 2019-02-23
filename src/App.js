import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom"
import NavBar from "./Components/NavBar.js"
import MainContainer from "./Containers/MainContainer.js";
import LoginForm from "./Components/LoginForm.js"
import SignupForm from "./Components/SignupForm.js"
import logo from './logo.svg';
import './App.css';

class App extends Component {

	signupFormSubmitHandler = (event, userInfo) => {
    event.preventDefault();

    this.props.history.push("/");
  };

  loginSubmitHandler = (event, userInfo) => {
    event.preventDefault();

    this.props.history.push("/");
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

export default App;
