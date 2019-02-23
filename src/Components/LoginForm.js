import React from "react";

class LoginForm extends React.Component {
  state = {
    loginUsername: "",
    loginPassword: "",
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <h2>Log In</h2>
        <form onSubmit={event => this.props.submitHandler(event, this.state)}>
          <input
            type="text"
            name="loginUsername"
            placeholder="username"
            value={this.state.loginUsername}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="loginPassword"
            placeholder="password"
            value={this.state.loginPassword}
            onChange={this.handleChange}
          />
          <button>Sign Up</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
