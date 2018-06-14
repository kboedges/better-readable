import React, { Component } from "react";
import { connect } from "react-redux";

// Actions
import { addComment } from "../reducers/add-comment/actions";
import { getPostComments } from "../reducers/post-comments/actions";

class AddComment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: Math.floor((1 + Math.random()) * 0x10000).toString(),
      timestamp: Date.now(),
      body: "",
      author: "",
      parentId: ""
    };
  }

  handleCommentSubmit = commentObj => {
    this.props.addComment(commentObj).then(() => {
      this.props.getPostComments(this.props.post.id);
      console.log("wtf");
      this.setState({
        id: Math.floor((1 + Math.random()) * 0x10000).toString(),
        timestamp: Date.now(),
        body: "",
        author: "",
        parentId: ""
      });
    });
  };

  handleChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
      parentId: this.props.post.id
    });
    console.log(this.state);
  };

  render() {
    const { post } = this.props;

    return (
      <div className="AddComment flex-grow-1 mt-4">
        <textarea
          value={this.state.value}
          onChange={this.handleChange}
          name="body"
          className="form-control mb-2"
          placeholder="New comment..."
        />
        <input
          value={this.state.value}
          onChange={this.handleChange}
          name="author"
          className="form-control mb-2"
          type="text"
          placeholder="author"
        />
        <button
          className="btn btn-outline-primary"
          type="button"
          onClick={() => this.handleCommentSubmit(this.state, post.id)}
        >
          Add Comment
        </button>
      </div>
    );
  }
}

const mapStateToProps = ({ post }) => ({
  post
});

const mapDispatchToProps = dispatch => ({
  addComment: newComment => dispatch(addComment(newComment)),
  getPostComments: postId => dispatch(getPostComments(postId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddComment);
