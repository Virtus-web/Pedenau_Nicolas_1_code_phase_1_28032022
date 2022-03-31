import { LOGIN_SUCCESS } from '../type'
import axios from 'axios'


const authState = {
    isLogin: false,
    profile: {
        email: "",
        password: ""
    }
}


// const getAuthState = () => {
//     const auth = localStorage.getItem("auth")
//     try {
//         const authObj = JSON.parse(auth)
//         const { expires_at, jwttoken } = authObj.profile
//         if (new Date(expires_at) > new Date()) {
//             axios.defaults.headers.common["Authorization"] = `Bearer ${jwttoken}`
//             return authObj
//         }
//         return authState

//     } catch (error) {
//         return authState
//     }
// }

// const newAuth = getAuthState()

const loginReducer = (state = authState, action) => {
    switch (action.type) {

        case LOGIN_SUCCESS:
            const loginAuthState = {
                ...state,
                isLogin: true,
                profile: action.payload
            }
            console.log(action)
            axios.defaults.headers.common["Authorization"] = `Bearer ${action.payload.jwttoken}`
            localStorage.setItem("auth", JSON.stringify(loginAuthState))
            return loginAuthState

        // case LOGIN_FAIL:
        //     return state

        default:
            return state
    }
}


export default loginReducer
