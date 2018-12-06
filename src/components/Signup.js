import React, { Component } from "react";
import { withRouter } from "react-router";
import app from "../firebase";
import SignupForm from "./SignupForm";

class Signup extends Component {
  handleSignup = async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      const user = await app
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      this.props.history.push("/");
    } catch (error) {
      alert(error);
    }
  };
  render() {
    return <SignupForm onSubmit={this.handleSignup} />;
  }
}

export default withRouter(Signup);
