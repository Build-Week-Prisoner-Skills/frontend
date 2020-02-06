import {combineReducers} from 'redux';
import {reducer, workerReducer} from './reducer';

const rootReducer = combineReducers({
    reducer: reducer,
    workerReducer: workerReducer
})

export default rootReducer;