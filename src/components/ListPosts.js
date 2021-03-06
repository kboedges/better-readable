import React, { Component } from "react";
import { connect } from "react-redux";

// Components
import Post from "./Post";
import Toolbar from "./Toolbar";

// Actions
import { getAllPosts } from "../reducers/posts/actions";
import { setCategorySort } from "../reducers/set-category-sort/actions";

class ListPosts extends Component {
  componentDidMount() {
    this.props.getAllPosts();
    this.props.setCategorySort("");
  }

  sortPost = (a, b) => {
    if (this.props.sortOption === "byScore") {
      return b.voteScore - a.voteScore;
    } else {
      return b.timestamp - a.timestamp;
    }
  };

  render() {
    const { allPosts } = this.props;

    return (
      <div className="ListPosts">
        <Toolbar />
        <ol className="post-list px-5 py-2">
          {allPosts.sort(this.sortPost).map(post => (
            <li key={post.id}>
              <Post post={post} postDetail={false} />
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

const mapStateToProps = ({ allPosts, sortOption }) => ({
  allPosts,
  sortOption
});

const mapDispatchToProps = dispatch => ({
  getAllPosts: () => dispatch(getAllPosts()),
  setCategorySort: category => dispatch(setCategorySort(category))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListPosts);
