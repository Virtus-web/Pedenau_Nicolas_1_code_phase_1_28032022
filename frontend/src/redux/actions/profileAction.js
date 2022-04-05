import { AXIOS_GET_LOADING, AXIOS_GET_SUCCESS, AXIOS_GET_ERROR } from '../type'
import axios from 'axios'


export const axiosGetDataLoading = () => {
    return {
        type: AXIOS_GET_LOADING
    }    
}

export const axiosGetDataSuccess = data => {
    return {
        type: AXIOS_GET_SUCCESS,
        payload: data /* InitialState Object */
    }    
}

export const axiosGetDataError = error => {
    return {
        type: AXIOS_GET_ERROR,
        payload: error /* InitialState Object */
    }    
}


// const GOOGLE_API_KEY = 'AIzaSyB2LTF8YTA3YHNkNKk0p5Bh9rmhjkLnvug'

export const axiosGetData = () => {
    return dispatch => {
        const userToken = JSON.parse(localStorage.getItem("auth"))
        console.log(userToken)

        dispatch(axiosGetDataLoading())
        axios.post("/profile", null, {
            headers: {
                "Authorization": `Bearer ${userToken.profile?.body.token}`,
                "content-type": "application/json; charset=utf-8"
            }
        })
        .then(res => {
            const userDataArray = res
            console.log(res.data)
            dispatch(axiosGetDataSuccess(userDataArray))
            // history.push("/profile")
        })
        .catch(error => {
            dispatch(axiosGetDataError(error.message))
        })
    }
}




// import { GET_SUCCESS, GET_FAIL } from '../type'
// import axios from 'axios'



// export const getProfileAction = () => {
    
//     return async (dispatch) => {
//         const userToken = JSON.parse(localStorage.getItem("auth"))
//         console.log(userToken)
//         try {
//             const data = await axios.post("/profile", null, {
//                 headers: {
//                     "Authorization": `Bearer ${userToken.profile?.body.token}`,
//                     "content-type": "application/json; charset=utf-8"
//                 }
//             })
//             console.log(data)
//             dispatch({type: GET_SUCCESS, payload: {data}})
//             // history.push("/profile")
//         } catch (error) {
//             console.log(error)
//             dispatch({type: GET_FAIL, payload: {}})
//         }
//     }
// }
