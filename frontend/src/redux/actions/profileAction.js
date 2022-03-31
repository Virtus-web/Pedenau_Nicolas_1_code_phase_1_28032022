import { GET_SUCCESS, GET_FAIL } from '../type'
import axios from 'axios'



export const getProfileAction = (profileState) => {
    
    return async (dispatch) => {
        const userToken = JSON.parse(localStorage.getItem("auth"))
        console.log(userToken.profile.body.token)
        try {
            const data = await axios.post("/profile", profileState, {
                headers: {
                    "Authorization": `Bearer ${userToken.profile.body.token}`,
                    "content-type": "application/json; charset=utf-8"
                }
            })
            console.log(data)
            dispatch({type: GET_SUCCESS, payload: {data}})
            // history.push("/profile")
        } catch (error) {
            console.log(error)
            dispatch({type: GET_FAIL, payload: {}})
        }
    }
}
