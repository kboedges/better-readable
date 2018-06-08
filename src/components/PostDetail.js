import React, { Component } from 'react';
import { connect } from 'react-redux';

class PostDetail extends Component {

  render() {
    const { post } = this.props;

    return (
      <div className="PostDetail">
        I am the current post: {post.title}
      </div>
    );
  }
}

const mapStateToProps = ({post}) => ({
    post,
})

export default connect(mapStateToProps)(PostDetail);
