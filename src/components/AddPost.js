import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

// Actions
import { addPost } from "../reducers/add-post/actions";

class AddPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: Math.floor((1 + Math.random()) * 0x10000).toString(),
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
    const { addPost, categories } = this.props;

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
          {categories.map(category => (
            <label className="mr-3" htmlFor={category.name}>
              <input
                value={category.name}
                id={category.name}
                onChange={this.handleChange}
                className="form-control mb-2 mr-1"
                type="radio"
                name="category"
                placeholder="Category"
              />
              {category.name}
            </label>
          ))}

          <input
            value={this.state.value}
            onChange={this.handleChange}
            className="form-control mb-2"
            type="text"
            name="author"
            autoComplete="username"
            placeholder="Author"
          />
          <textarea
            value={this.state.value}
            onChange={this.handleChange}
            className="form-control mb-2"
            name="body"
            placeholder="Content"
          />
          <Link className="btn btn-outline-primary" role="button" to="/" onClick={() => addPost(this.state)}>
            Add Post
          </Link>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ categories }) => ({
  categories
});

const mapDispatchToProps = dispatch => ({
  addPost: newPost => dispatch(addPost(newPost))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddPost);
