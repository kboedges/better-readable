import React, { Component } from "react";
import { connect } from "react-redux";

// Components
import Post from "./Post";
import Comment from "./Comment";
import AddComment from "./AddComment";

// Actions
import { getPost } from "../reducers/post/actions";
import { getPostComments } from "../reducers/post-comments/actions";

class PostDetail extends Component {
  componentDidMount() {
    this.props.getPost(this.props.match.params.post_id);
    this.props.getPostComments(this.props.match.params.post_id);
  }

  render() {
    const { post, comments } = this.props;

    return (
      <div className="PostDetail px-5 py-2">
        <Post post={post} postDetail={true} />
        <AddComment />
        <ol className="comment-list">
          {comments.map(comment => (
            <li key={comment.id}>
              <Comment comment={comment} />
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

const mapStateToProps = ({ allPosts, post, comments }) => ({
  allPosts,
  post,
  comments
});

const mapDispatchToProps = dispatch => ({
  getPost: id => dispatch(getPost(id)),
  getPostComments: id => dispatch(getPostComments(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetail);
