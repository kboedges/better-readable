import { combineReducers } from "redux";

// All reducers
import allPosts from "./posts";
import postsByCategory from "./category-posts";
import categories from "./categories";
import post from "./post";
import comments from "./post-comments";
import comment from "./comment";
import newPost from "./add-post";
import newComment from "./add-comment";
import votePost from "./vote-post";
import voteComment from "./vote-comment";
import sortOption from "./sort-posts";

export default combineReducers({
  allPosts,
  postsByCategory,
  categories,
  post,
  comments,
  comment,
  newPost,
  newComment,
  votePost,
  voteComment,
  sortOption
});
