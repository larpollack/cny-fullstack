import React, { Component } from "react";
import LoginForm from "./LoginForm";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import app from "../firebase";
import Signup from "./Signup";

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
    return (
      <div>
        <LoginForm onSubmit={this.handleSignup} />
        <div>
          <h3>
            Or <Link to="/signup">Sign Up!</Link>
          </h3>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);
