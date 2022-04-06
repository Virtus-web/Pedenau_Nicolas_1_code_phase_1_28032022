import { useEffect, useState } from 'react'
import Account from '../components/Account'
import { useSelector, useDispatch } from 'react-redux'
import { axiosGetData } from '../redux/actions/profileAction'
import { axiosUpdateData } from '../redux/actions/updateAction'


function Profile() {
    
    const dispatch = useDispatch()
    const user = useSelector((state) => state.login)
    const profile = useSelector((state) => state.profile)
    
    useEffect(() => {
        if (user.isLogin) {
            dispatch(axiosGetData())
        } 
         
    }, [user.isLogin, dispatch]) 
    
    const [ open, setOpen ] = useState('')
    const [ close, setClose ] = useState('active')

    const handleEditOpen = () => {
        setOpen('active')
        setClose('')
    }

    const handleEditClose = () => {
        setClose('active')
        setOpen('')
    }

    const [ updateState, setUpdateState ] = useState({})


    return (
        <main className="main bg-dark">
            <div className="header">
                <h1>Welcome back<br />{profile.profileData.data?.body.firstName} {profile.profileData.data?.body.lastName}</h1>   
                <button className={`edit-button ${open}`} onClick={() => handleEditOpen()}>Edit Name</button>
                <form
                id='reset'
                className={`update-form ${close}`} 
                onSubmit={(e) => {
                    e.preventDefault()
                    dispatch(axiosUpdateData(updateState))
                    handleEditClose()
                }}>
                    <div className='input-container'>
                        <div className="input-wrapper">
                            <input
                            type="text"
                            id="email"
                            placeholder='firstname'
                            onChange={(e) => {
                                const firstName = e.target.value
                                setUpdateState({ ...updateState, ...{firstName}})
                            }}
                            />
                        </div>
                        <div className="input-wrapper">
                            <input
                            type="text"
                            id="email"
                            placeholder='lastname'
                            onChange={(e) => {
                                const lastName = e.target.value
                                setUpdateState({ ...updateState, ...{lastName}})
                            }}
                            />
                        </div>
                    </div>
                    <div className='button-container'>
                        <button type="submit" className="save-in-button">Save</button>
                        <a href='/profile' onClick={() => handleEditClose()}>Cancel</a>   
                    </div>
                </form>
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















// import { useEffect } from 'react'
// import Account from '../components/Account'
// // import { useHistory } from 'react-router-dom'
// import { useSelector, useDispatch } from 'react-redux'
// // import axios from 'axios'
// // import { getProfileAction } from '../redux/actions/profileAction'
// // import { useState, useEffect } from 'react'
// // import axios from 'axios'
// import { getProfileAction } from '../redux/actions/profileAction'


// function Profile() {

//     // const history = useHistory()
//     // const dispatch = useDispatch()
//     const profile = useSelector((state) => state.profile.profileData)
//     console.log(profile.data?.data.body.firstName)
//     const user = useSelector((state) => state.login)
//     const dispatch = useDispatch()
    
//     //UseEffect sert à faire la première action quand on atteri sur la page avant que le render soit rendu
//     useEffect(() => {
//         // console.log(login.isLogin)
//         if (user.isLogin) {
//             dispatch(getProfileAction())
//         } 
         
//     }, [user.isLogin, dispatch])
    


//     return (
//         <main className="main bg-dark">
//             <div className="header">
//                 {/* <h1>Welcome back<br />{profile.data?.data.body.firstName} {profile.data?.data.body.lastName}</h1>    */}
//                 <h1>Welcome back<br />Nicolas Pedenau</h1>   
//                 <button className="edit-button">Edit Name</button>
//             </div>
//             <h2 className="sr-only">Accounts</h2>
//             <Account
//             title="Argent Bank Checking (x8349)"
//             amount="$2,082.79"
//             comment="Available Balance"
//             />
//             <Account
//             title="Argent Bank Savings (x6712)"
//             amount="$10,928.42"
//             comment="Available Balance"
//             />
//             <Account
//             title="Argent Bank Credit Card (x8349)"
//             amount="$184.30"
//             comment="Current Balance"
//             />
//         </main>
//     )
// }


// export default Profile
