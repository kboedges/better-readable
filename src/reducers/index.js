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
import deletedPost from "./delete-post";
import deletedComment from "./delete-comment";
import updatedPost from "./edit-post";
import updatedComment from "./edit-comment";
import selectedCategory from "./set-category-sort";

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
  sortOption,
  deletedPost,
  deletedComment,
  updatedPost,
  updatedComment,
  selectedCategory
});
