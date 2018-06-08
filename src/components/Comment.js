import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Comment extends Component {
  static propTypes = {
    comment: PropTypes.object.isRequired
  } 

  render() {
    const { comment } = this.props;

    return (
      <div className="Comment">
        {comment.body}
      </div>
    );
  }
}

export default Comment;
