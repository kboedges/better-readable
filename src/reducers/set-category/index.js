import { SET_CATEGORY } from './actions';

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_CATEGORY:
            return action.selectedCategory;
        default:
            return state;
    }
};