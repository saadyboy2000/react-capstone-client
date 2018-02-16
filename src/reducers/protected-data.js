//rename this form reducer
import {
    FETCH_PROTECTED_DATA_SUCCESS,
    FETCH_PROTECTED_DATA_ERROR
} from '../actions/protected-data';

import {FORM_SUCCESS} from '../actions/forms';

const initialState = {
    forms: '',
    error: null,
    isFormCreated: false
};

export default function reducer(state = initialState, action) {
    if (action.type === FETCH_PROTECTED_DATA_SUCCESS) {
        return Object.assign({}, state, {
            forms: action.data,
            error: null
        });
    } else if (action.type === FETCH_PROTECTED_DATA_ERROR) {
        return Object.assign({}, state, {
            error: action.error
        });
    }

    else if(action.type === FORM_SUCCESS){
        return Object.assign({}, state, {
         isFormCreated: true  
        });
    }
    return state;
}
