import { AXIOS_LOGIN_LOADING, AXIOS_LOGIN_SUCCESS, AXIOS_LOGIN_ERROR } from '../type'
// import axios from 'axios'


const authState = {
    isLogin: false,
    isLoading: false,
    profile: {
        email: '',
        password: ''
    },
    error: ''
}


// const getAuthState = () => {
//     const auth = localStorage.getItem('userData')
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

        case AXIOS_LOGIN_LOADING:
            const loginStateLoad = {
                ...state,
                isLoading: true
            }
            return loginStateLoad

        case AXIOS_LOGIN_SUCCESS:
            const loginStateSuccess = {
                ...state,
                isLogin: true,
                isLoading: false,
                profile: action.payload
            }

            // axios.defaults.headers.common["Authorization"] = `Bearer ${action.payload.jwttoken}`
            localStorage.setItem('userData', JSON.stringify(loginStateSuccess))

            return loginStateSuccess

        case AXIOS_LOGIN_ERROR:
            const loginStateError = {
                ...state,
                isLogin: false,
                isLoading: false,
                profile: {},
                error: action.payload.error
            }
            return loginStateError

        default: return state
    }
}


export default loginReducer
