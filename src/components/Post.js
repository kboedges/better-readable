import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

// Actions
import { getPost } from "../reducers/post/actions";
import { getAllPosts } from "../reducers/posts/actions";
import { getPostComments } from "../reducers/post-comments/actions";
import { votePost } from "../reducers/vote-post/actions";
import { deletePost } from "../reducers/delete-post/actions";

class Post extends Component {
  static propTypes = {
    post: PropTypes.object.isRequired,
    postDetail: PropTypes.bool
  };

  votePostHandler = option => {
    const postId = this.props.post.id;
    this.props.votePost(postId, option).then(() => {
      this.props.getPost(postId);
      this.props.getAllPosts();
    });
  };

  deletePostHandler = () => {
    const postId = this.props.post.id;
    this.props.deletePost(postId).then(() => {
      this.props.getAllPosts();
    });
  };

  render() {
    const { post, getPost, postDetail } = this.props;

    return (
      <div className="Post mt-3 d-flex flex-direction-row">
        <div
          className="btn-group-vertical pr-2 d-flex flex-direction-col align-items-center"
          role="group"
          aria-label="Basic example"
        >
          <button onClick={() => this.votePostHandler("upVote")} type="button" className="btn btn-link vote">
            <span aria-label="thumbsup" role="img">
              👍
            </span>
          </button>
          <p className="m-0 vote-score">{post.voteScore}</p>
          <button onClick={() => this.votePostHandler("downVote")} type="button" className="btn btn-link vote">
            <span aria-label="thumbsdown" role="img">
              👎
            </span>
          </button>
        </div>
        <div className="card flex-grow-1">
          <div className="card-body">
            {!postDetail ? (
              <Link to={`/${post.category}/${post.id}`}>
                <h4 onClick={() => getPost(post.id)} className="card-title">
                  {post.updatedPost ? post.updatedPost.title : post.title}
                </h4>
              </Link>
            ) : (
              <h4 className="card-title">{post.updatedPost ? post.updatedPost.title : post.title}</h4>
            )}

            <h6 className="card-subtitle mb-2 text-muted post-author">{post.author}</h6>
            {postDetail && <p className="card-text">{post.updatedPost ? post.updatedPost.body : post.body}</p>}
            <p className="card-text">{post.commentCount} Comments</p>
            <Link to={`/${post.category}/${post.id}/edit-post`} className="card-link ">
              Edit
            </Link>
            <Link to="/" onClick={this.deletePostHandler} className="card-link">
              Delete
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getPost: id => {
    dispatch(getPost(id));
    dispatch(getPostComments(id));
  },
  votePost: (postId, option) => dispatch(votePost(postId, option)),
  deletePost: postId => dispatch(deletePost(postId)),
  getAllPosts: () => dispatch(getAllPosts())
});

export default connect(
  null,
  mapDispatchToProps
)(Post);
