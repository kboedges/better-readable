import { combineReducers } from 'redux';
import allPosts from './posts';
import postsByCategory from './category-posts';
import categories from './categories';

export default combineReducers({
    allPosts,
    postsByCategory,
    categories
});