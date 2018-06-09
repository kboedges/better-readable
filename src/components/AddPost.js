import React, { Component } from 'react';

class AddPost extends Component {

  render() {
    return (
      <div className="AddPost px-5 py-2">
        <div className="add-post">
        <form className="col add-post-form">
          <input type="text" name="title" className="form-control mb-2" placeholder="Title"/>
          <input type="text" name="category" className="form-control mb-2" placeholder="Category"/>
          <input type="text" name="author" className="form-control mb-2" placeholder="Author"/>
          <textarea name="content" className="form-control mb-2" cols="30" rows="10" placeholder="Content"></textarea>
          <button type="button" class="btn btn-outline-primary">Primary</button>
        </form>
      </div>
      </div>
    );
  }
}

export default AddPost;