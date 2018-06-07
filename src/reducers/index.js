import { combineReducers } from 'redux';
import allPosts from './posts';
import postsByCategory from './category-posts'

export default combineReducers({
    allPosts,
    postsByCategory
});