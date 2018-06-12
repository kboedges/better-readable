import React, { Component } from "react";
import { connect } from "react-redux";

// Components
import Post from "./Post";
import Toolbar from "./Toolbar";

// Actions
import { getAllPosts } from "../reducers/posts/actions";

class ListPosts extends Component {
  componentDidMount() {
    this.props.getAllPosts();
  }

  render() {
    const { allPosts } = this.props;

    return (
      <div className="ListPosts">
        <Toolbar />
        <ol className="post-list px-5 py-2">
          {allPosts.map(post => (
            <li key={post.id}>
              <Post post={post} postDetail={false} />
            </li>
          ))}
        </ol>
      </div>
    );
  }
}

const mapStateToProps = ({ allPosts }) => ({
  allPosts
});

const mapDispatchToProps = dispatch => ({
  getAllPosts: () => dispatch(getAllPosts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ListPosts);
