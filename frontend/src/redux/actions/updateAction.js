import { AXIOS_UPDATE_LOADING, AXIOS_UPDATE_SUCCESS, AXIOS_UPDATE_ERROR } from '../type'
import { update } from '../api-service/userService'


export const axiosUpdateDataLoading = () => {
    return {
        type: AXIOS_UPDATE_LOADING
    }    
}

export const axiosUpdateDataSuccess = data => {
    return {
        type: AXIOS_UPDATE_SUCCESS,
        payload: data /* InitialState Object */
    }    
}

export const axiosUpdateDataError = error => {
    return {
        type: AXIOS_UPDATE_ERROR,
        payload: error /* InitialState Object */
    }    
}

export const axiosUpdateData = (updateState) => {
    return dispatch => {
        dispatch(axiosUpdateDataLoading())
        update(updateState)
        .then(res => {
            const userDataArray = res
            dispatch(axiosUpdateDataSuccess(userDataArray))
        })
        .catch(error => {
            dispatch(axiosUpdateDataError(error.message))
        })
    }
}
