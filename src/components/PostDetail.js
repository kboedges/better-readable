import React, { Component } from 'react';
import { connect } from 'react-redux';

// Component
import Post from './Post';
import Comment from './Comment';
import AddComment from './AddComment';

class PostDetail extends Component {

  render() {
    const { post, comments } = this.props;

    return (
      <div className="PostDetail px-5 py-2">
        <Post 
            post={post}
            postDetail={true}
        />
        <AddComment/>
        <ol className="comment-list">
            {comments.map(comment => (
                <li key={comment.id}>
                    <Comment 
                        comment={comment}
                    />
                </li>
            ))}
        </ol>
      </div>
    );
  }
}

const mapStateToProps = ({post, comments}) => ({
    post,
    comments
})

export default connect(mapStateToProps)(PostDetail);
