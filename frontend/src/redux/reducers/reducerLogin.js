import { AXIOS_LOGIN_LOADING, AXIOS_LOGIN_SUCCESS, AXIOS_LOGIN_ERROR } from '../type'
import axios from 'axios'


const initialState = {
    isLogin: false,
    isLoading: false,
    profile: {
        email: '',
        password: ''
    },
    error: ''
}


//REDUCER
const reducerLogin = (state = initialState.profile, action) => {

    console.log(action.payload)
    console.log(state)

    if (localStorage.getItem('userData')) {
        state = JSON.parse(localStorage.getItem('userData'))
    }

    switch (action.type) {
        case AXIOS_LOGIN_LOADING:
            return {
                ...state,
                isLoading: true
            }

        case AXIOS_LOGIN_SUCCESS:
            axios.defaults.headers.common["Authorization"] = `Bearer ${action.payload.jwttoken}`
            localStorage.setItem('userData', JSON.stringify(state))

            return {
                ...state,
                isLogin: true,
                isLoading: false,
                profile: action.payload.password,
                error: ''
            }
            
        case AXIOS_LOGIN_ERROR:
            return {
                ...state,
                isLogin: false,
                isLoading: false,
                profile: {},
                error: action.payload.error
            }

        default: return state
    }
}

export default reducerLogin


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

// const reducerLogin = (state = newAuth, action) => {
//     switch (action.type) {

//         case LOGIN_SUCCESS:
//             const loginAuthState = {
//                 ...state,
//                 isLogin: true,
//                 profile: action.payload
//             }
//             console.log(action)
//             axios.defaults.headers.common["Authorization"] = `Bearer ${action.payload.jwttoken}`
//             localStorage.setItem("auth", JSON.stringify(loginAuthState))
//             return loginAuthState

//         // case LOGIN_FAIL:
//         //     return state

//         default:
//             return state
//     }
// }


// export default reducerLogin
