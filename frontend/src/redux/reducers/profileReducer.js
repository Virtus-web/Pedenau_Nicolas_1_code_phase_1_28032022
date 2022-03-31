import { GET_SUCCESS } from '../type'
// import axios from 'axios'


const profileState = {
    status: "",
    message: "",
    profileData: {
        email: "",
        firstName: "",
        lastName: "",
        createdAt: "",
        updatedAt: "",
        id: ""
    }
}


const profileReducer = (state = profileState, action) => {
    switch (action.type) {

        case GET_SUCCESS:
            // const userToken = JSON.parse(localStorage.getItem("auth"))
            // axios.defaults.headers.common["Authorization"] = `Bearer ${userToken.profile.body.token}`
            const loginProfileState = {
                ...state,
                profileData: action.payload
            }
            console.log(action)
            // localStorage.setItem("user", JSON.stringify(loginProfileState))
            return loginProfileState

        default:
            return state
    }
}


export default profileReducer
