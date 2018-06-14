import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

// Actions
import { getPostComments } from "../reducers/post-comments/actions";
import { voteComment } from "../reducers/vote-comment/actions";

class Comment extends Component {
  static propTypes = {
    comment: PropTypes.object.isRequired
  };

  voteCommentHandler = option => {
    console.log(this.props.comment);
    this.props.voteComment(this.props.comment.id, option).then(() => {
      this.props.getPostComments(this.props.comment.parentId);
    });
  };

  render() {
    const { comment, voteComment } = this.props;

    return (
      <div className="Comment mt-3 d-flex flex-direction-row">
        <div
          className="btn-group-vertical pr-2 d-flex flex-direction-col align-items-center"
          role="group"
          aria-label="Basic example"
        >
          <button
            onClick={() => this.voteCommentHandler("upVote")}
            type="button"
            className="btn btn-link vote"
          >
            <span aria-label="thumbsup" role="img">
              👍
            </span>
          </button>
          <p className="m-0 vote-score">{comment.voteScore}</p>
          <button
            onClick={() => this.voteCommentHandler("downVote")}
            type="button"
            className="btn btn-link vote"
          >
            <span aria-label="thumbsdown" role="img">
              👎
            </span>
          </button>
        </div>
        <div className="card flex-grow-1">
          <div className="card-body">
            <h4 className="card-title">{comment.title}</h4>
            <h6 className="card-subtitle mb-2 text-muted post-author">
              {comment.author}
            </h6>
            <p className="card-text">{comment.body}</p>
            <a href="#!" className="card-link ">
              Edit
            </a>
            <a href="#!" className="card-link">
              Delete
            </a>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  voteComment: (commentId, option) => dispatch(voteComment(commentId, option)),
  getPostComments: postId => dispatch(getPostComments(postId))
});

export default connect(
  null,
  mapDispatchToProps
)(Comment);
