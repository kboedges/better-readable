import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Post extends Component {
  static propTypes = {
    post: PropTypes.object.isRequired,
  } 

  render() {
    const { post } = this.props;

    return (
      <div className="Post mt-3">
        <div className="card">
            <div className="card-body">
                <h4 className="card-title">{post.title}</h4>
                <h6 className="card-subtitle mb-2 text-muted post-author">{post.author}</h6>
                <a href="#!" className="card-link ">Edit</a>
                <a href="#!" className="card-link">Delete</a>
            </div>
        </div>
      </div>
    );
  }
}

export default Post;
