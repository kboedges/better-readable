import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

// Actions
import { addPost } from "../reducers/add-post/actions";

class AddPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: Math.floor((1 + Math.random()) * 0x10000),
      timestamp: Date.now(),
      title: "",
      body: "",
      author: "",
      category: ""
    };
  }

  handleChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  render() {
    const { addPost } = this.props;
    console.log(this.state);

    return (
      <div className="AddPost px-5 py-2 pt-5">
        <div className="add-post">
          <h3 className="add-post-title">Add Post</h3>
          <input
            value={this.state.value}
            onChange={this.handleChange}
            className="form-control mb-2"
            type="text"
            name="title"
            placeholder="Title"
          />
          <input
            value={this.state.value}
            onChange={this.handleChange}
            className="form-control mb-2"
            type="text"
            name="category"
            placeholder="Category"
          />
          <input
            value={this.state.value}
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
            to="/"
            onClick={() => addPost(this.state)}
          >
            Add Post
          </Link>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addPost: newPost => dispatch(addPost(newPost))
});

export default connect(
  null,
  mapDispatchToProps
)(AddPost);
