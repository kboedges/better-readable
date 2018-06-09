import { SET_POST } from './actions';

const initialState = {};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_POST:
            return action.post;
        default:
            return state;
    }
};