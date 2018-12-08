import React, { Component } from "react";
import AllPosts from "./AllPosts";

export default class Home extends Component {
  render() {
    return (
      <div>
        <AllPosts
          posts={this.props.posts}
          postType="post"
          updateFaves={this.props.updateFaves}
        />
      </div>
    );
  }
}
