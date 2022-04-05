import { AXIOS_GET_LOADING, AXIOS_GET_SUCCESS, AXIOS_GET_ERROR } from '../type'
import axios from 'axios'


const initialState = {
    isLoading: false,
    status: "",
    message: "",
    profileData: {},
    error: ''
}


//REDUCER
const reducerProfile = (state = initialState, action) => {

    console.log(action)
    console.log(state)

    if (localStorage.getItem('userData')) {
        state = JSON.parse(localStorage.getItem('userData'))
    }

    switch (action.type) {
        case AXIOS_GET_LOADING:
            return {
                ...state,
                isLoading: true
            }

        case AXIOS_GET_SUCCESS:
            axios.defaults.headers.common["Authorization"] = `Bearer ${action.payload.jwttoken}`
            localStorage.setItem('userData', JSON.stringify(state))

            return {
                //Attention le fait d'ajouter des curly B ça engendre un objet vide dès le départ dans le state
                ...state,
                isLoading: false,
                profileData: action.payload,
                error: ''
            }
            
        case AXIOS_GET_ERROR:
            return {
                ...state,
                isLoading: false,
                profileData: {},
                error: action.payload
            }

        default: return state
    }
}

export default reducerProfile






// import { GET_SUCCESS } from '../type'
// // import axios from 'axios'


// const profileState = {
//     status: "",
//     message: "",
//     profileData: {
//         email: "",
//         firstName: "",
//         lastName: "",
//         createdAt: "",
//         updatedAt: "",
//         id: ""
//     }
// }


// const profileReducer = (state = profileState, action) => {
//     switch (action.type) {

//         case GET_SUCCESS:
//             // const userToken = JSON.parse(localStorage.getItem("auth"))
//             // axios.defaults.headers.common["Authorization"] = `Bearer ${userToken.profile.body.token}`
//             const loginProfileState = {
//                 ...state,
//                 profileData: action.payload
//             }
//             console.log(action)
//             // localStorage.setItem("user", JSON.stringify(loginProfileState))
//             return loginProfileState

//         default:
//             return state
//     }
// }


// export default profileReducer
