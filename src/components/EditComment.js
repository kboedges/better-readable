import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

// Actions
import { editComment } from "../reducers/edit-comment/actions";
import { getPostComments } from "../reducers/post-comments/actions";
import { getPost } from "../reducers/post/actions";
import { getComment } from "../reducers/comment/actions";

class EditPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timestamp: "",
      body: ""
    };
  }

  componentDidMount() {
    this.props.getComment(this.props.match.params.comment_id).then(() => {
      console.log(this.props.comment);
      this.setState({
        timestamp: Date.now(),
        body: this.props.comment.updatedComment
          ? this.props.comment.updatedComment.body
          : this.props.comment.body
      });
    });
  }

  editCommentHandler = updatedDeets => {
    const commentId = this.props.comment.id;
    this.props.editComment(updatedDeets, commentId).then(() => {
      this.props.getPostComments(this.props.comment.parentId);
    });
  };

  handleChange = event => {
    this.setState({
      body: event.target.value
    });
  };

  render() {
    const { post } = this.props;

    return (
      <div className="EditComment px-5 py-2 pt-5">
        <div className="edit-comment">
          <h3 className="edit-comment-title">Edit Comment</h3>
          <textarea
            value={this.state.body}
            onChange={this.handleChange}
            className="form-control mb-2"
            name="body"
            placeholder="Content"
          />
          <Link
            className="btn btn-outline-primary"
            role="button"
            to={`/${post.category}/${post.id}`}
            onClick={() => this.editCommentHandler(this.state)}
          >
            Save
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ post, comment }) => ({
  post,
  comment
});

const mapDispatchToProps = dispatch => ({
  editComment: (updatedDeets, commentId) =>
    dispatch(editComment(updatedDeets, commentId)),
  getPost: postId => dispatch(getPost(postId)),
  getPostComments: postId => dispatch(getPostComments(postId)),
  getComment: commentId => dispatch(getComment(commentId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPost);
