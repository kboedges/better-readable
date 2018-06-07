import React, { Component } from 'react';

class Post extends Component {

  render() {
    return (
      <div className="Post mt-3">
        <div class="card">
            <div class="card-body">
                <h4 class="card-title">Post title</h4>
                <h6 class="card-subtitle mb-2 text-muted post-author">author</h6>
                <a href="#!" class="card-link ">Edit</a>
                <a href="#!" class="card-link">Delete</a>
            </div>
        </div>
      </div>
    );
  }
}

export default Post;
