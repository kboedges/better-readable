import React, { Component } from 'react';

// Components
import AddPost from './AddPost';
import SortPosts from './SortPosts';
import SelectCategory from './SelectCategory';

class Toolbar extends Component {

  render() {
    return (
      <div className="Toolbar px-5 py-2 d-flex flex-direction-row justify-content-between">
        <a href="">Add Post</a>
        <SortPosts/>
        <SelectCategory/>
      </div>
    );
  }
}

export default Toolbar;
