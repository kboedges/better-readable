import React, { Component } from 'react';

class AddPost extends Component {

  render() {
    return (
      <div className="AddPost px-5 py-2">
        <div className="add-post">
          <input className="form-control mb-2" type="text" name="title" placeholder="Title"/>
          <input className="form-control mb-2" type="text" name="category" placeholder="Category"/>
          <input className="form-control mb-2" type="text" name="author" placeholder="Author"/>
          <textarea className="form-control mb-2" name="content" placeholder="Content"></textarea>
          <button class="btn btn-outline-primary" type="button">Add Post</button>
      </div>
      </div>
    );
  }
}

export default AddPost;