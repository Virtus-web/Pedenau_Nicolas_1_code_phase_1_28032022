import axios from 'axios'



// export const login = await axios({
    // method: 'put',
    // url: API_URL + '/profile',
    // data: { ...data },
    // headers: { ...authHeader() }
// })
// return response.data;

export const login = data => {
    const response = axios.post("/login", data)
    
    return response
}

export const profile = () => {
    const userToken = JSON.parse(localStorage.getItem('userData'))

    const response = axios.post("/profile", null, {
        headers: {
            "Authorization": `Bearer ${userToken.profile?.data.body.token}`,
            "content-type": "application/json; charset=utf-8"
        }
    })

    return response
}

export const update = data => {
    const userToken = JSON.parse(localStorage.getItem('userData'))

    const response = axios.put("/profile", data, {
        headers: {
            "Authorization": `Bearer ${userToken.profile?.data.body.token}`,
            "content-type": "application/json; charset=utf-8"
        }
    })
    
    return response
}
