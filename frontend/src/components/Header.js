import Logo from '../assets/argentBankLogo.png'
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { LogoutAction } from '../redux/actions'


function Header(props) {

    const history = useHistory()
    const { auth, logout } = props
    console.log(auth)

    return (
        <nav className="main-nav">
            <a className="main-nav-logo" href="/">
                <img
                className="main-nav-logo-image"
                src={Logo}
                alt="Argent Bank Logo"
                />
                <h1 className="sr-only">Argent Bank</h1>
            </a>
            <div>
                {console.log(auth)}
                {
                    !auth ? (
                        <a className="main-nav-item" href="/login">
                            <i className="fa fa-user-circle"></i>
                            Login
                        </a>
                    ) : (
                        <>
                            <h2>{auth.profile.email}</h2>
                            <a className="main-nav-item" href="/profile" onClick={() => logout(history)}>
                                <i className="fa fa-user-circle"></i>
                                Logout
                            </a>
                        </>
                    )
                }
            </div>
        </nav>
    )
}


const mapStateToProps = (state) => {
    return {
        auth: state.authState
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: (history) => {
            dispatch(LogoutAction(history))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
