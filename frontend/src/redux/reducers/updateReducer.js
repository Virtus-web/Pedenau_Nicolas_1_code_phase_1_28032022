import { AXIOS_UPDATE_LOADING, AXIOS_UPDATE_SUCCESS, AXIOS_UPDATE_ERROR } from '../type'


const updateState = {
    isLogin: true,
    isLoading: false,
    status: "",
    message: "",
    updateData: {
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
const updateReducer = (state = updateState, action) => {

    //essayer de retirer le if ci-dessous et de détailler action.payload.firstname ... si cela ne fonctionne pas au global

    if (localStorage.getItem('userInfos')) {
        state = JSON.parse(localStorage.getItem('userInfos'))
    }

    switch (action.type) {

        case AXIOS_UPDATE_LOADING:
            const updateStateLoad = {
                ...state,
                isLoading: true
            }
            return updateStateLoad

        case AXIOS_UPDATE_SUCCESS:
            const updateStateSuccess = {
                ...state,
                isLoading: false,
                profileData: action.payload,
                error: ''
            }
            
            localStorage.setItem('userInfos', JSON.stringify(updateStateSuccess))
            Location.reload()

            return updateStateSuccess
            
        case AXIOS_UPDATE_ERROR:
            const updateStateError = {
                ...state,
                isLogin: false,
                isLoading: false,
                profile: {},
                error: action.payload.error
            }
            return updateStateError

        default: return state
    }
}

export default updateReducer
