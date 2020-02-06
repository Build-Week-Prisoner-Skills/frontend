//index from actions
import axiosWithAuth from '../utils/axiosWithAuth';

export const FETCHING_START = 'FETCHING_START';
export const FETCHING_SUCCESS = 'FETCHING_SUCCESS';
export const FETCHING_FAILURE = 'FETCHING_FAILURE';

export const ADDING_START = 'ADDING_START';
export const ADDING_SUCCESS = 'ADDING_SUCCESS';
export const ADDING_FAILURE = 'ADDING_FAILURE';

export const fetchAdmins = () => dispatch => {
    dispatch({ type: FETCHING_START });
        axiosWithAuth()
            .get(`/api/admin`)
            .then(res => {
                console.log("success", res.data)
                dispatch({ type: FETCHING_SUCCESS, payload: res.data});
            })
            .catch(err => {
                console.log("error", err.response)
                dispatch({ type: FETCHING_FAILURE, payload: err.response });
            });
}

export const addWorker = newWorker => dispatch =>{
    dispatch({ type: ADDING_START });
        axiosWithAuth()
            .post(`/api/admin/inmates`, newWorker)
            .then(res =>{
                console.log("added worker", res.data)
                dispatch({type: ADDING_SUCCESS, payload:res.data})
            })
            .catch(err => {
                console.log("error", err.message)
                dispatch({ type: ADDING_FAILURE, payload: err.response})
            })
}