import { GET_SUCCESS, GET_FAIL } from '../type'
import axios from 'axios'



export const getProfileAction = () => {
    
    return async (dispatch) => {
        const userToken = JSON.parse(localStorage.getItem("auth"))
        console.log(userToken)
        try {
            const data = await axios.post("/profile", null, {
                headers: {
                    "Authorization": `Bearer ${userToken.profile?.body.token}`,
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
