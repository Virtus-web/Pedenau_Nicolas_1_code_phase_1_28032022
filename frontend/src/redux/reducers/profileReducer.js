import { AXIOS_GET_LOADING, AXIOS_GET_SUCCESS, AXIOS_GET_ERROR } from '../type'


const profileState = {
    isLogin: false,
    isLoading: false,
    status: "",
    message: "",
    profileData: {
        email: "",
        firstName: "",
        lastName: "",
        createdAt: "",
        updatedAt: "",
        id: ""
    },
    error: ''
}


//REDUCER
const reducerProfile = (state = profileState, action) => {

    if (localStorage.getItem('userInfos')) {
        state = JSON.parse(localStorage.getItem('userInfos'))
    }

    switch (action.type) {

        case AXIOS_GET_LOADING:
            const getStateLoad = {
                ...state,
                isLoading: true
            }
            return getStateLoad

        case AXIOS_GET_SUCCESS:
            const getStateSuccess = {
                ...state,
                isLogin: true,
                isLoading: false,
                profileData: action.payload,
                error: ''
            }
            // axios.defaults.headers.common["Authorization"] = `Bearer ${action.payload.jwttoken}`
            // console.log(action.payload.jwttoken)
            localStorage.setItem('userInfos', JSON.stringify(getStateSuccess))

            return getStateSuccess
            
        case AXIOS_GET_ERROR:
            const getStateError = {
                ...state,
                isLogin: false,
                isLoading: false,
                profile: {},
                error: action.payload.error
            }
            return getStateError

        default: return state
    }
}

export default reducerProfile
