import React, { Component } from "react";
import { Link } from "react-router-dom";

// Components
import SortPosts from "./SortPosts";
import SelectCategory from "./SelectCategory";

class Toolbar extends Component {
  render() {
    return (
      <div className="Toolbar px-5 py-2 d-flex flex-direction-row justify-content-between">
        <Link className="btn btn-outline-primary" role="button" to="/add-post">
          Add Post
        </Link>
        <SortPosts />
        <SelectCategory />
      </div>
    );
  }
}

export default Toolbar;
