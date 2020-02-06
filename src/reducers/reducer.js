import {
    FETCHING_START,
    FETCHING_SUCCESS,
    FETCHING_FAILURE,
    FETCHING_WORKERS_START,
    FETCHING_WORKERS_SUCCESS,
    FETCHING_WORKERS_FAILURE,
    ADDING_START,
    ADDING_SUCCESS,
    ADDING_FAILURE,
    DELETING_START,
    DELETING_SUCCESS,
    DELETING_FAILURE


} from '../actions/index';

const initialState = {
    isLoading: false,
    admins: null,
    error: ''
}

const initialWorker = {
    isLoading: false,
    workers: [],
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
                admins: action.payload
            }
        case FETCHING_FAILURE:
            return{
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state;
    }
}

export const workerReducer = (state = initialWorker, action) => {
    switch (action.type) {
        case FETCHING_WORKERS_START:
            return {
                ...state,
                isLoading: true
            };
        case FETCHING_WORKERS_SUCCESS:
            return{
                ...state,
                isLoading: false,
                workers: action.payload
            }
        case FETCHING_WORKERS_FAILURE:
            return{
                ...state,
                isLoading: false,
                error: action.payload
            }
        case ADDING_START:
            return {
                ...state,
                isLoading: true
            };
        case ADDING_SUCCESS:
            return{
                ...state,
                isLoading: false,
                workers: [...state.workers, action.payload]
            }
        case ADDING_FAILURE:
            return{
            ...state,
            isLoading: false,
            error: action.payload
        }
        case DELETING_START:
            return {
                ...state,
                isLoading: true
            };
        case DELETING_SUCCESS:
            return{
                ...state,
                isLoading: false,
                workers: state.workers.filter(worker => {
                    return worker.id !== action.payload
                })
            }
        case DELETING_FAILURE:
            return{
            ...state,
            isLoading: false,
            error: action.payload
        }
        default:
            return state;
    }
}

export default reducer;