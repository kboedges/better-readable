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
      title: this.props.post.title,
      body: this.props.post.body
    };
  }

  componentDidMount() {
    this.props.getPost(this.props.match.params.post_id);
  }

  editPostHandler = updatedDeets => {
    console.log(updatedDeets);
    this.props.editPost(updatedDeets, this.props.post.id).then(() => {
      this.props.getPost(this.props.post.id);
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
    console.log(this.state);
  };

  render() {
    const { post } = this.props;

    return (
      <div className="EditPost px-5 py-2 pt-5">
        <div className="edit-post">
          <h3 className="edit-post-title">Edit Post</h3>
          <input
            value={this.state.value}
            onChange={this.handleChange}
            className="form-control mb-2"
            type="text"
            name="title"
            placeholder="Title"
          />
          <input
            disabled
            value={post.category}
            onChange={this.handleChange}
            className="form-control mb-2"
            type="text"
            name="category"
            placeholder="Category"
          />
          <input
            disabled
            value={post.author}
            onChange={this.handleChange}
            className="form-control mb-2"
            type="text"
            name="author"
            placeholder="Author"
          />
          <textarea
            value={this.state.value}
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
  editPost: post => dispatch(editPost(post)),
  getPost: postId => dispatch(getPost(postId)),
  getAllPosts: () => dispatch(getAllPosts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPost);

// https://medium.com/@justintulk/best-practices-for-resetting-an-es6-react-components-state-81c0c86df98d
