import {
    FETCHING_START,
    FETCHING_SUCCESS,
    FETCHING_FAILURE
} from '../actions/index';

const initialState = {
    isLoading: false,
    prisoners: null,
    error: ''
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_START:
            return {
                ...state,
                isLoading: true
            };
        case FETCHING_SUCCESS:
            return{
                ...state,
                isLoading: false,
                prisoners: action.payload
            }
        default:
            return state;
    }
}

export default reducer;