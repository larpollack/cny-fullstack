import React, { Component } from "react";
import data from "../data";

export default class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    };
  }

  handleDelete = (id, evt) => {
    evt.preventDefault();
    data.deleteFave(id);
    this.props.updateFaves(evt);
  };

  handleFaves = evt => {
    evt.preventDefault();
    if (this.state.active) return;
    data.addFave(this.props.post);
    this.props.updateFaves(evt);
    this.setState({ active: true });
  };

  whenCreated = () => {
    let timeSince =
      new Date().getTime() - new Date(this.props.post.created * 1000).getTime();
    if (timeSince < 60000) {
      return "Just now";
    } else if (timeSince >= 60000 && timeSince < 3600000) {
      return `${parseInt(timeSince / 60000)} minutes ago`;
    } else if (timeSince >= 3600000 && timeSince < 86400000) {
      return `${parseInt(timeSince / 3600000)} hours ago`;
    } else if (timeSince >= 86400000) {
      return `${parseInt(timeSince / 86400000)} days ago`;
    }
  };

  render() {
    let postList = null;
    if (this.props.postType === "fave") {
      postList = (
        <div
          className="btn-trash"
          onClick={evt => this.handleDelete(this.props.id, evt)}
        >
          <i className="fa fa-trash" aria-hidden="true" />
        </div>
      );
    } else {
      postList = (
        <div
          className={this.state.active ? "btn-fav active" : "btn-fav"}
          onClick={this.handleFaves}
        >
          <i className="fa fa-heart" aria-hidden="true" />
        </div>
      );
    }
    return (
      <div className="post">
        <div className="image">
          {postList}
          <img src={this.props.post.url} alt="" />
        </div>
        <h2>{this.props.post.title}</h2>
        <div className="post-text">
          <span>
            <i className="fa fa-user" aria-hidden="true" />
            {` /u/ ${this.props.post.author}   • `}
          </span>
          <span>
            <i className="fa fa-clock-o" aria-hidden="true" />
            {` ${this.whenCreated()}  •  `}
          </span>
          <span>
            <i className="fa fa-bolt" aria-hidden="true" />{" "}
            {this.props.post.score}
          </span>
        </div>
      </div>
    );
  }
}
