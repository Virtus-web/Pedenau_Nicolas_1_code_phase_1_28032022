import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS, LOGOUT_FAIL, GET_SUCCESS, GET_FAIL } from './type'
import axios from 'axios'


export const LoginAction = (loginState, history) => {

    return async (dispatch) => {
        try {
            const res = await axios.post("/login", loginState)
            const { data } = res
            console.log(res)
            dispatch({type: LOGIN_SUCCESS, payload: data})
            history.push("/profile")
        } catch (error) {
            console.log(error)
            dispatch({type: LOGIN_FAIL, payload: {}})
        }
    }
}

export const getProfileAction = (loginState) => {

    return async (dispatch) => {
        try {
            const userToken = JSON.parse(localStorage.getItem("auth"))
            console.log(userToken.profile.body.token)
            const res = axios.post("/profile", {
                headers: {
                    "Authorization": `Bearer ${userToken.profile.body.token}`
                }
            })
            const { data } = res
            console.log(res)
            dispatch({type: GET_SUCCESS, payload: {data}})
        } catch (error) {
            console.log(error)
            dispatch({type: GET_FAIL, payload: {}})
        }
    }
}

export const LogoutAction = (history) => {

    return async (dispatch) => {
        try {
            const res = await axios.get("/profile")
            const { data } = res
            dispatch({type: LOGOUT_SUCCESS, payload: data.message})
            history.push("/")
        } catch (error) {
            console.log(error)
            dispatch({type: LOGOUT_FAIL, payload: {}})
        }
    }
}
