import { AXIOS_LOGIN_LOADING, AXIOS_LOGIN_SUCCESS, AXIOS_LOGIN_ERROR } from '../type'
import axios from 'axios'


export const axiosLoginLoading = () => {
    return {
        type: AXIOS_LOGIN_LOADING
    }    
}

export const axiosLoginSuccess = data => {
    return {
        type: AXIOS_LOGIN_SUCCESS,
        payload: data /* InitialState Object */
    }    
}

export const axiosLoginError = error => {
    return {
        type: AXIOS_LOGIN_ERROR,
        payload: error /* InitialState Object */
    }    
}

export const axiosLogin = (loginState, history) => {
    return dispatch => {
        dispatch(axiosLoginLoading())
        axios.post("/login", loginState)
        .then(res => {
            const logDataArray = res
            console.log(res)
            dispatch(axiosLoginSuccess(logDataArray))
            history.push("/profile")
        })
        .catch(error => {
            dispatch(axiosLoginError(error.message))
        })
    }
}





// import { LOGIN_SUCCESS } from '../type'


// export const LoginAction = (loginState, history) => {

//     return async (dispatch) => {
//         try {
//             const res = await axios.post("/login", loginState)
//             const { data } = res
//             console.log(res)
//             dispatch({type: LOGIN_SUCCESS, payload: data})
//             history.push("/profile")
//         } catch (error) {
//             console.log(error)
//             dispatch({type: LOGIN_FAIL, payload: {}})
//         }
//     }
// }

// export const LogoutAction = (history) => {

//     return async (dispatch) => {
//         try {
//             const res = await axios.get("/profile")
//             const { data } = res
//             dispatch({type: LOGOUT_SUCCESS, payload: data.message})
//             history.push("/")
//         } catch (error) {
//             console.log(error)
//             dispatch({type: LOGOUT_FAIL, payload: {}})
//         }
//     }
// }
