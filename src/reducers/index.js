import { combineReducers } from 'redux';

// All reducers
import allPosts from './posts';
import postsByCategory from './category-posts';
import categories from './categories';
import post from './post';
import comments from './post-comments';
import comment from './comment';
import res from './add-post'

export default combineReducers({
    allPosts,
    postsByCategory,
    categories,
    post,
    comments,
    comment,
    res
});