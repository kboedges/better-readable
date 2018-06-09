import React, { Component } from 'react';

class AddComment extends Component {

  render() {
    return (
      <div className="AddComment flex-grow-1 mt-4">
        <textarea className="form-control mb-2" placeholder="New comment..." ></textarea>
        <input className="form-control mb-2" type="text" placeholder="author"/>
        <button className="btn btn-outline-primary" type="button">Add Comment</button>  
      </div>
    );
  }
}

export default AddComment;