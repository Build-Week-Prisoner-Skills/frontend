//index from actions

import axios from 'axios';

export const FETCHING_START = 'FETCHING_START';
export const FETCHING_SUCCESS = 'FETCHING_SUCCESS';
export const FETCHING_FAILURE = 'FETCHING_FAILURE';

export const fetchPrisoners = () => dispatch => {
    dispatch({ type: FETCHING_START });
        axios
            .get(`http://localhost:3333/prisoners`)
            .then(res => {
                console.log("success", res.data)
                dispatch({ type: FETCHING_SUCCESS, payload: res.data});
            })
            .catch(err => {
                console.log("error", err.response)
                dispatch({ type: FETCHING_FAILURE, payload: err.response });
            });
}
