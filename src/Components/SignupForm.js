import React from "react";

class SignupForm extends React.Component {
  state = {
    signupUsername: "",
    signupUserEmail: "",
    signupPassword: "",
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
        <h2>Register</h2>
        <form onSubmit={event => this.props.submitHandler(event, this.state)}>
          <input
            type="text"
            name="signupUsername"
            placeholder="username"
            value={this.state.signupUsername}
            onChange={this.handleChange}
          />
         <input
            type="text"
            name="signupUserEmail"
            placeholder="email"
            value={this.state.signupUserEmail}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="signupPassword"
            placeholder="password"
            value={this.state.signupPassword}
            onChange={this.handleChange}
          />
          <button>Register</button>
        </form>
      </div>
    );
  }
}

export default SignupForm;
