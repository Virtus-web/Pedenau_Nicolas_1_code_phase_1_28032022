import Account from '../components/Account'
// import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
// import { getProfileAction } from '../redux/actions/profileAction'
// import { useState, useEffect } from 'react'
// import axios from 'axios'


function Profile() {

    // const history = useHistory()
    // const dispatch = useDispatch()
    const profile = useSelector((state) => state.profile.profileData)
    console.log(profile)


    return (
        <main className="main bg-dark">
            <div className="header">
            {/* {
                profileData ? (
                    <>
                        <h1>Welcome back<br />{profileData.data.body.firstName} {profileData.data.body.lastName}</h1>
                    </>
                ) : (
                    <>
                        <h1>Welcome back<br />{profile.data.body.firstName} {profile.data.body.lastName}</h1>
                    </>
                )
            } */}
                <h1>Welcome back<br />{profile.data.data.body.firstName} {profile.data.data.body.lastName}</h1>   
                {/* <h1>Welcome back<br />Boris</h1>    */}
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
