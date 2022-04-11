import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { axiosLogin } from '../redux/actions/loginAction'


function Login() {

    const dispatch = useDispatch()
    
    const [ loginState, setLoginState ] = useState({})
    const history = useHistory()

    return (
        <>
            <main className="main bg-dark">
                <section className="sign-in-content">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>
                    <form 
                    onSubmit={(e) => {
                            e.preventDefault()
                            dispatch(axiosLogin(loginState, history))
                        }}>
                        <div className="input-wrapper">
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" onChange={(e) => {
                                const email = e.target.value
                                setLoginState({ ...loginState, ...{email}})
                            }} />
                        </div>
                        <div className="input-wrapper">
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" onChange={(e) => {
                                const password = e.target.value
                                setLoginState({ ...loginState, ...{password}})
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
        </>
    )
}

export default Login
