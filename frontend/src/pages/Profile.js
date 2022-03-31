import Account from '../components/Account'
// import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
// import { getProfileAction } from '../redux/actions/profileAction'
import { useState, useEffect } from 'react'
import axios from 'axios'


function Profile() {

    // const history = useHistory()
    // const dispatch = useDispatch()
    const profile = useSelector((state) => state.profile.profileData)
    // const { firstName, lastName } = profile.data.body
    console.log(profile)
    // dispatch(getProfileAction(profile.profileData, history))
    // dispatch(getProfileAction(profile.profileData))

    //Convertir ce useEffect en Action Redux
    const [ profileData, setProfileData ] = useState({})
    const userToken = JSON.parse(localStorage.getItem("auth"))

    //Essayer avec async/await ou try/catch
    useEffect(() => {
        // async function axiosData() {
        //     try {
        //         const response = await axios.post("/profile", profile, {
        //             headers: {
        //                 "Authorization": `Bearer ${userToken.profile.body.token}`,
        //                 "content-type": "application/json; charset=utf-8"
        //             }
        //         })
        //         setProfileData(response)
        //     } catch (error) {
        //         console.log(error)
        //     }
        // }
        //     axiosData()
        axios.post("/profile", profile, {
            headers: {
                "Authorization": `Bearer ${userToken.profile.body.token}`,
                "content-type": "application/json; charset=utf-8"
            }
        })
        .then((response) => {
            setProfileData(response)
        })
        .catch((error) => {
            console.log(error)
        })
    }, [profile, userToken.profile.body.token])

    console.log(profileData.data.body)
    // const { firstName, lastName } = profileData.data.body
    //Convertir ce useEffect en Action Redux

    return (
        <main className="main bg-dark">
            <div className="header">
            {
                profileData ? (
                    <>
                        <h1>Welcome back<br />{profileData.data.body.firstName} {profileData.data.body.lastName}</h1>
                    </>
                ) : (
                    <>
                        <h1>Welcome back<br />{profile.data.body.firstName} {profile.data.body.lastName}</h1>
                    </>
                )
            }
                <button className="edit-button">Edit Name</button>
            </div>
            <h2 className="sr-only">Accounts</h2>
            <Account
            title="Argent Bank Checking (x8349)"
            amount="$2,082.79"
            comment="Available Balance"
            />
            <Account
            title="Argent Bank Savings (x6712)"
            amount="$10,928.42"
            comment="Available Balance"
            />
            <Account
            title="Argent Bank Credit Card (x8349)"
            amount="$184.30"
            comment="Current Balance"
            />
        </main>
    )
}


export default Profile
