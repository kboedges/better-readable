import { SET_CATEGORY_POSTS } from './actions';

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_CATEGORY_POSTS:
            return action.allCategoryPosts;
        default:
            return state;
    }
};