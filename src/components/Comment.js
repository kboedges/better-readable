import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Comment extends Component {
  static propTypes = {
    comment: PropTypes.object.isRequired
  } 

  render() {
    const { comment } = this.props;

    return (
      <div className="Comment mt-3 d-flex flex-direction-row">
        <div className="btn-group-vertical pr-2 d-flex flex-direction-col align-items-center" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-link vote">👍</button>
          <p className="m-0 vote-score">{comment.voteScore}</p>
          <button type="button" className="btn btn-link vote">👎</button>
        </div>
        <div className="card flex-grow-1">
            <div className="card-body">
                <h4 className="card-title">{comment.title}</h4>
                <h6 className="card-subtitle mb-2 text-muted post-author">{comment.author}</h6>
                <p className="card-text">{comment.body}</p>
                <a href="#!" className="card-link ">Edit</a>
                <a href="#!" className="card-link">Delete</a>
            </div>
        </div>
      </div>
    );
  }
}

export default Comment;
