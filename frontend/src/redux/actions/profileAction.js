import { AXIOS_GET_LOADING, AXIOS_GET_SUCCESS, AXIOS_GET_ERROR } from '../type'
import axios from 'axios'


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
        const userToken = JSON.parse(localStorage.getItem('userData'))

        dispatch(axiosGetDataLoading())
        axios.post("/profile", null, {
            headers: {
                "Authorization": `Bearer ${userToken.profile?.data.body.token}`,
                "content-type": "application/json; charset=utf-8"
            }
        })
        .then(res => {
            const userDataArray = res
            dispatch(axiosGetDataSuccess(userDataArray))
        })
        .catch(error => {
            dispatch(axiosGetDataError(error.message))
        })
    }
}
