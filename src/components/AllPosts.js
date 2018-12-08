import React, { Component } from "react";
import Post from "./Post";

export default class AllPosts extends Component {
  render() {
    const posts = this.props.posts || [];
    const updateFaves = this.props.updateFaves || {};
    return (
      <div className="AllPosts">
        {posts.map(post => (
          <Post
            key={post.id}
            id={post.id}
            post={post}
            postType={this.props.postType}
            updateFaves={this.props.updateFaves}
          />
        ))}
      </div>
    );
  }
}
