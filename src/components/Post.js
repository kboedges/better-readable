import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Actions
import { getPost } from '../reducers/post/actions';

class Post extends Component {
  static propTypes = {
    post: PropTypes.object.isRequired,
  } 

  render() {
    const { post, getPost } = this.props;

    return (
      <div className="Post mt-3 d-flex flex-direction-row">
        <div className="btn-group-vertical pr-2 d-flex flex-direction-col align-items-center" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-link vote">👍</button>
          <p className="m-0 vote-score">{post.voteScore}</p>
          <button type="button" className="btn btn-link vote">👎</button>
        </div>
        <div className="card flex-grow-1">
            <div className="card-body">
                <h4 onClick={() => getPost(post.id)} className="card-title">{post.title}</h4>
                <h6 className="card-subtitle mb-2 text-muted post-author">{post.author}</h6>
                <p className="card-text">{post.commentCount} Comments</p>
                <a href="#!" className="card-link ">Edit</a>
                <a href="#!" className="card-link">Delete</a>
            </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({allPosts}) => ({
  allPosts,
})

const mapDispatchToProps = dispatch => ({
  getPost: (id) => dispatch(getPost(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Post);
