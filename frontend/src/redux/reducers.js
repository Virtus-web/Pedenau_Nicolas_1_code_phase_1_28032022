import { LOGIN_SUCCESS, LOGIN_FAIL } from './type'


const authState = {
    profile: {
        email: "",
        password: ""
    }
}


const authReducer = (state = authState, action) => {

    switch (action.type) {
        case LOGIN_SUCCESS:
            return {
                ...state,
                profile: action.payload
            }

        case LOGIN_FAIL:
            return state

        default:
            return state
    }
}

export default authReducer
