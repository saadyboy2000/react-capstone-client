import {SubmissionError} from 'redux-form';

import {API_BASE_URL} from '../config';
import {normalizeResponseErrors} from './utils';

export const registerForm = form => dispatch => {
    return fetch(`${API_BASE_URL}/forms`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(form)
    })
        .then(res => normalizeResponseErrors(res))
        .then(res =>{return res.json(); })
        .then(()=>{
            dispatch(formSuccess());
        })
        .catch(err => {
            const {reason, message, location} = err;
            if (reason === 'ValidationError') {
                // Convert ValidationErrors into SubmissionErrors for Redux Form
                return Promise.reject(
                    new SubmissionError({
                        [location]: message
                    })
                );
            }
        });
};

export const FORM_SUCCESS = 'FORM_SUCCESS';
export const formSuccess = () => ({
    type: FORM_SUCCESS
});


/*
export const fetchForm = form => dispatch => {
    return fetch(`${API_BASE_URL}/forms`, {
        method: 'Get',
        headers: {
            'content-type': 'application/json'
        },
        //body: JSON.stringify(form)
    })
        .then(res => normalizeResponseErrors(res))
        .then(res =>{return res.json()})
        .then(({data}) => dispatch(fetchProtectedDataSuccess(data)))

        .catch(err => {
            const {reason, message, location} = err;
            if (reason === 'ValidationError') {
                // Convert ValidationErrors into SubmissionErrors for Redux Form
                return Promise.reject(
                    new SubmissionError({
                        [location]: message
                    })
                );
            }
        });
};

//got this from protected-data
export const fetchProtectedData = () => (dispatch, getState) => {
    const authToken = getState().auth.authToken;
    return fetch(`${API_BASE_URL}/protected`, {
        method: 'GET',
        headers: {
            // Provide our auth token as credentials
            Authorization: `Bearer ${authToken}`
        }
    })
        .then(res => normalizeResponseErrors(res))
        .then(res => res.json())
        .then(({data}) => dispatch(fetchProtectedDataSuccess(data)))
        .catch(err => {
            dispatch(fetchProtectedDataError(err));
        });
};

*/