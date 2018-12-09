import React, { Component } from "react";
import AllPosts from "./AllPosts";

export default class Favorites extends Component {
  render() {
    return (
      <div>
        <AllPosts
          posts={this.props.faves}
          postType="fave"
          updateFaves={this.props.updateFaves}
        />
      </div>
    );
  }
}
