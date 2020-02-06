//index from actions
import axiosWithAuth from '../utils/axiosWithAuth';

export const FETCHING_START = 'FETCHING_START';
export const FETCHING_SUCCESS = 'FETCHING_SUCCESS';
export const FETCHING_FAILURE = 'FETCHING_FAILURE';

export const FETCHING_WORKERS_START = 'FETCHING_WORKERS_START';
export const FETCHING_WORKERS_SUCCESS = 'FETCHING_WORKERS_SUCCESS';
export const FETCHING_WORKERS_FAILURE = 'FETCHING_WORKERS_FAILURE';

export const ADDING_START = 'ADDING_START';
export const ADDING_SUCCESS = 'ADDING_SUCCESS';
export const ADDING_FAILURE = 'ADDING_FAILURE';

export const DELETING_START = 'DELETING_START';
export const DELETING_SUCCESS = 'DELETING_SUCCESS';
export const DELETING_FAILURE = 'DELETING_FAILURE';

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

export const fetchInmates = () => dispatch => {
    dispatch({ type: FETCHING_WORKERS_START });
        axiosWithAuth()
            .get(`/api/admin/inmates`)
            .then(res => {
                console.log("success", res.data)
                dispatch({type: FETCHING_WORKERS_SUCCESS, payload: res.data});
            })
            .catch(err => {
                console.log("error", err.response)
                dispatch({ type: FETCHING_WORKERS_FAILURE, payload: err.response });
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
export const deleteWorker = id => dispatch =>{
    dispatch({ type: DELETING_START });
        axiosWithAuth()
            .delete(`/api/admin/inmates/${id}`)
            .then(res =>{
                console.log("deleted", res.data)
                dispatch({type: DELETING_SUCCESS, payload:id})
            })
            .catch(err => {
                console.log("error", err.message)
                dispatch({ type: DELETING_FAILURE, payload: err.response})
            })
}