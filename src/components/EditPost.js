import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

// Actions
import { editPost } from "../reducers/edit-post/actions";
import { getPost } from "../reducers/post/actions";
import { getAllPosts } from "../reducers/posts/actions";

class EditPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      body: ""
    };
  }

  componentDidMount() {
    this.props.getPost(this.props.match.params.post_id).then(() => {
      this.setState({
        title: this.props.post.updatedPost ? this.props.post.updatedPost.title : this.props.post.title,
        body: this.props.post.updatedPost ? this.props.post.updatedPost.body : this.props.post.body
      });
    });
  }

  editPostHandler = updatedDeets => {
    const postId = this.props.post.id;
    this.props.editPost(updatedDeets, postId).then(() => {
      this.props.getPost(postId);
      this.props.getAllPosts();
    });
  };

  handleChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  render() {
    const { post } = this.props;

    return (
      <div className="EditPost px-5 py-2 pt-5">
        <div className="edit-post">
          <h3 className="edit-post-title">Edit Post</h3>
          <input
            value={this.state.title}
            onChange={this.handleChange}
            className="form-control mb-2"
            type="text"
            name="title"
            placeholder="Title"
          />
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
            onClick={() => this.editPostHandler(this.state)}
          >
            Save
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ post }) => ({
  post
});

const mapDispatchToProps = dispatch => ({
  editPost: (updatedDeets, postId) => dispatch(editPost(updatedDeets, postId)),
  getPost: postId => dispatch(getPost(postId)),
  getAllPosts: () => dispatch(getAllPosts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPost);
