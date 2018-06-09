import { combineReducers } from 'redux';

// All reducers
import allPosts from './posts';
import postsByCategory from './category-posts';
import categories from './categories';
import post from './post';
import comments from './post-comments';
import comment from './comment';
import selectedCatgory from './set-category'

export default combineReducers({
    allPosts,
    postsByCategory,
    categories,
    post,
    comments,
    comment,
    selectedCatgory
});