import { LOGIN_SUCCESS, GET_SUCCESS } from './type'
// import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS, LOGOUT_FAIL } from './type'
import axios from 'axios'


const authState = {
    isLogin: false,
    profile: {
        email: "",
        password: ""
    }
}

// const profileState = {
//     profileData: {
//         email: "",
//         firstName: "",
//         lastName: "",
//         createdAt: "",
//         updatedAt: "",
//         id: ""
//     }
// }


const getAuthState = () => {
    const auth = localStorage.getItem("auth")
    try {
        const authObj = JSON.parse(auth)
        const { expires_at, jwttoken } = authObj.profile
        if (new Date(expires_at) > new Date()) {
            axios.defaults.headers.common["Authorization"] = `Bearer ${jwttoken}`
            return authObj
        }
        return authState

    } catch (error) {
        return authState
    }
}

const newAuth = getAuthState()


const authReducer = (state = newAuth, action) => {
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

        case GET_SUCCESS:
            axios.defaults.headers.common["Authorization"] = `Bearer ${action.payload.jwttoken}`
            return

        // case LOGIN_FAIL:
        //     return state

        default:
            return state
    }
}


export default authReducer
