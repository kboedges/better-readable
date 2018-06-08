import { SET_POST_COMMENTS } from './actions';

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_POST_COMMENTS:
            return action.comments;
        default:
            return state;
    }
};