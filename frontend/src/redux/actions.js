import { LOGIN_SUCCESS, LOGIN_FAIL } from './type'
import axios from 'axios'


const LoginAction = (loginState) => {

    return async (dispatch) => {
        try {
            const res = await axios.post("/login", loginState)
            const { data } = res
            console.log(data)
            dispatch({type: LOGIN_SUCCESS, payload: data})
        } catch (error) {
            console.log(error)
            dispatch({type: LOGIN_FAIL, payload: {}})
        }
    }
}

export default LoginAction
