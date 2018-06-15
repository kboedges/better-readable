import React, { Component } from "react";
import { connect } from "react-redux";

// Components
import Post from "./Post";
import Toolbar from "./Toolbar";

// Actions
import { getAllPosts } from "../reducers/posts/actions";
import { setCategorySort } from "../reducers/set-category-sort/actions";

class ListCategoryPosts extends Component {
  componentDidMount() {
    this.props.getAllPosts();
    console.log("didmount", this.props.match.params.category);
    this.props.setCategorySort(this.props.match.params.category);
  }

  sortPost = (a, b) => {
    if (this.props.sortOption === "byScore") {
      return b.voteScore - a.voteScore;
    } else {
      return b.timestamp - a.timestamp;
    }
  };

  render() {
    const { allPosts, selectedCategory } = this.props;
    console.log("return", selectedCategory);

    return (
      <div className="ListCategoryPosts">
        <Toolbar />
        <ol className="post-list px-5 py-2">
          {allPosts.filter(post => post.category === selectedCategory).length >
          0 ? (
            allPosts
              .sort(this.sortPost)
              .filter(post => post.category === selectedCategory)
              .map(post => (
                <li key={post.id}>
                  <Post post={post} postDetail={false} />
                </li>
              ))
          ) : (
            <p>Oops, nothing here...</p>
          )}
        </ol>
      </div>
    );
  }
}

const mapStateToProps = ({ allPosts, sortOption, selectedCategory }) => ({
  allPosts,
  sortOption,
  selectedCategory
});

const mapDispatchToProps = dispatch => ({
  getAllPosts: () => dispatch(getAllPosts()),
  setCategorySort: selectedCategory =>
    dispatch(setCategorySort(selectedCategory))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListCategoryPosts);
