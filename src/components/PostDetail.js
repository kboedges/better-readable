import React, { Component } from 'react';
import { connect } from 'react-redux';

// Component
import Post from './Post';

class PostDetail extends Component {

  render() {
    const { post } = this.props;

    return (
      <div className="PostDetail px-5 py-2">
        <Post 
            post={post}
            postDetail={true}
        />

      </div>
    );
  }
}

const mapStateToProps = ({post}) => ({
    post,
})

export default connect(mapStateToProps)(PostDetail);
