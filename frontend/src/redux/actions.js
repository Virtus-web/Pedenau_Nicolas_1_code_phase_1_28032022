import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS, LOGOUT_FAIL } from './type'
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
