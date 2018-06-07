import React, { Component } from 'react';

class Post extends Component {

  render() {
    return (
      <div className="Post mt-3">
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">Post title</h4>
                <h6 className="card-subtitle mb-2 text-muted post-author">author</h6>
                <a href="#!" className="card-link ">Edit</a>
                <a href="#!" className="card-link">Delete</a>
            </div>
        </div>
      </div>
    );
  }
}

export default Post;
