import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { axiosLogin } from '../redux/actions/loginAction'


function Login() {

    const dispatch = useDispatch()

    const user = useSelector((state) => state.user)
    // const profile = useSelector((state) => state.profile.profileData)
    console.log(user)
    // console.log(profile)
    
    const [ loginData, setloginData ] = useState([])
    const history = useHistory()
    console.log(loginData)


    const loginAxiosUser = user.isLoading ? (
        <div className='d-flex justify-content-center'>
            <div className='spinner-border text-info' role='status'>
                <span className='sr-only'></span>
            </div>
        </div>
    )
    : user.error !== '' ? (
        <p>{user.error}</p>
    )
    :
    (
        <main className="main bg-dark">
            <section className="sign-in-content">
                <i className="fa fa-user-circle sign-in-icon"></i>
                <h1>Sign In</h1>
                <form 
                onSubmit={(e) => {
                        e.preventDefault()
                        console.log(loginData)
                        dispatch(axiosLogin(loginData, history))
                    }}>
                    <div className="input-wrapper">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={(e) => {
                            const email = e.target.value
                            setloginData({ ...loginData, ...{email}})
                        }} />
                    </div>
                    <div className="input-wrapper">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={(e) => {
                            const password = e.target.value
                            setloginData({ ...loginData, ...{password}})
                        }} />
                    </div>
                    <div className="input-remember">
                        <input type="checkbox" id="remember-me" />
                        <label htmlFor="remember-me">Remember me</label>
                    </div>
                    <button type="submit" className="sign-in-button">Sign In</button>
                </form>
            </section>
        </main>
    )

    return (
        <>
            {loginAxiosUser}
        </>
    )
}


export default Login
