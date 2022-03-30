import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { LoginAction } from '../redux/actions'


function Login(props) {

    console.log(props)
    const { login } = props
    console.log(login)
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
                            console.log(history)
                            login(loginState, history)
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
                        {/* <a href="/profile" className="sign-in-button"
                        onClick={(e) => {
                            e.preventDefault
                            console.log(user)
                        }}>Sign In</a> */}
                        <button type="submit" className="sign-in-button">Sign In</button>
                    </form>
                </section>
            </main>
        </>
    )
}


const mapStateToProps = (state) => {
    return {
        profile: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        login: (loginState, history) => {
            dispatch(LoginAction(loginState, history))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
