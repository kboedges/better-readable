import { SET_ALL_POSTS } from './actions';

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_ALL_POSTS:
            return action.allPosts;
        default:
            return state;
    }
};