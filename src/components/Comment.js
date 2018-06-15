import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

// Actions
import { getPostComments } from "../reducers/post-comments/actions";
import { voteComment } from "../reducers/vote-comment/actions";
import { deleteComment } from "../reducers/delete-comment/actions";
import { getPost } from "../reducers/post/actions";

class Comment extends Component {
  static propTypes = {
    comment: PropTypes.object.isRequired
  };

  voteCommentHandler = option => {
    this.props.voteComment(this.props.comment.id, option).then(() => {
      this.props.getPostComments(this.props.comment.parentId);
    });
  };

  deleteCommentHandler = () => {
    this.props.deleteComment(this.props.comment.id).then(() => {
      this.props.getPostComments(this.props.comment.parentId);
      this.props.getPost(this.props.comment.parentId);
    });
  };

  render() {
    const { comment } = this.props;

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
            <p className="card-text">
              {comment.updatedComment
                ? comment.updatedComment.body
                : comment.body}
            </p>
            <h6 className="card-subtitle mb-2 text-muted post-author">
              {comment.author}
            </h6>
            <Link
              to={`/comments/${comment.id}/edit-comment`}
              className="card-link "
            >
              Edit
            </Link>
            <a
              href="#!"
              onClick={this.deleteCommentHandler}
              className="card-link"
            >
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
  getPostComments: postId => dispatch(getPostComments(postId)),
  deleteComment: commentId => dispatch(deleteComment(commentId)),
  getPost: postId => dispatch(getPost(postId))
});

export default connect(
  null,
  mapDispatchToProps
)(Comment);
