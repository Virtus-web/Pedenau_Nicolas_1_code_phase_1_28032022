import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { LoginAction } from '../redux/actions/loginAction'
// import { getProfileAction } from '../redux/actions/profileAction'


function Login() {

    const dispatch = useDispatch()
    const login = useSelector((state) => state.login.profile)
    const profile = useSelector((state) => state.profile.profileData)
    console.log(login)
    console.log(profile)
    // const { LoginAction } = props
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
                            console.log(loginState)
                            // LoginAction(loginState, history)
                            dispatch(LoginAction(loginState, history))
                            // dispatch(getProfileAction(profile.profileData))
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


// const mapStateToProps = (state) => {
//     return {
//         profile: state
//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         LoginAction: (loginState, history) => {
//             dispatch(LoginAction(loginState, history))
//         }
//     }
// }

export default Login
