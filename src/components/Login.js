import React, { Component } from "react";
import LoginForm from "./LoginForm";
import { withRouter } from "react-router";
import app from "../firebase";

class Login extends Component {
  handleSignup = async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      const user = await app
        .auth()
        .signInWithEmailAndPassword(email.value, password.value);
      this.props.history.push("/");
    } catch (error) {
      alert(error);
    }
  };
  render() {
    return <LoginForm onSubmit={this.handleSignup} />;
  }
}

export default withRouter(Login);
