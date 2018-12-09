import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Navbar from "./components/Navbar";
import Favorites from "./components/Favorites";
import PrivateRoute from "./components/PrivateRoute";
import app from "./firebase";
import data from "./data";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      authenticated: false,
      user: null,
      posts: [],
      faves: data.getFaves()
    };
  }

  updateFaves = evt => {
    evt.preventDefault();
    this.setState({ faves: data.getFaves() });
  };

  componentDidMount() {
    data.fetchData().then(res => {
      const posts = res.data.children.map(elem => elem.data);
      this.setState({ posts: posts });
      this.setState({ faves: data.getFaves() });
    });
  }

  componentWillMount() {
    app.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          authenticated: true,
          currentUser: user,
          loading: false
        });
      } else {
        this.setState({
          authenticated: false,
          currentUser: null,
          loading: false
        });
      }
    });
  }

  render() {
    const { authenticated, loading, faves, posts } = this.state;

    if (loading) {
      return <p>Loading..</p>;
    }

    return (
      <div className="App">
        <Router>
          <div className="router">
            <Navbar authenticated={authenticated} faves={faves} posts={posts} />
            <PrivateRoute
              exact
              path="/"
              component={Home}
              authenticated={authenticated}
            />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Switch>
              <Route
                exact
                path="/"
                render={() => (
                  <Home posts={posts} updateFaves={this.updateFaves} />
                )}
              />
              <Route
                render={() => (
                  <Favorites faves={faves} updateFaves={this.updateFaves} />
                )}
              />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}
