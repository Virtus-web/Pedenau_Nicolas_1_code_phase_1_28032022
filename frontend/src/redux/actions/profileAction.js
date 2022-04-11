import { AXIOS_GET_LOADING, AXIOS_GET_SUCCESS, AXIOS_GET_ERROR } from '../type'
import { profile } from '../api-service/userService'


export const axiosGetDataLoading = () => {
    return {
        type: AXIOS_GET_LOADING
    }    
}

export const axiosGetDataSuccess = data => {
    return {
        type: AXIOS_GET_SUCCESS,
        payload: data /* InitialState Object */
    }    
}

export const axiosGetDataError = error => {
    return {
        type: AXIOS_GET_ERROR,
        payload: error /* InitialState Object */
    }    
}

export const axiosGetData = () => {
    return dispatch => {
        dispatch(axiosGetDataLoading())
        profile()
        .then(res => {
            const userDataArray = res
            dispatch(axiosGetDataSuccess(userDataArray))
        })
        .catch(error => {
            dispatch(axiosGetDataError(error.message))
        })
    }
}
