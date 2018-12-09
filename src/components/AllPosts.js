import React, { Component } from "react";
import Post from "./Post";

export default class AllPosts extends Component {
  render() {
    const posts = this.props.posts || [];
    const updateFaves = this.props.updateFaves || {};
    return (
      <div className="AllPosts">
        {posts.map((post, id) => (
          <Post
            key={id}
            id={id}
            post={post}
            postType={this.props.postType}
            updateFaves={updateFaves}
          />
        ))}
      </div>
    );
  }
}
