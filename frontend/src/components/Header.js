import Logo from '../assets/argentBankLogo.png'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { LogoutAction } from '../redux/actions/loginAction'


function Header() {

    const history = useHistory()
    const login = useSelector((state) => state.login.profile)

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
                {
                    !login.isLogin ? (
                        <a className="main-nav-item" href="/login">
                            <i className="fa fa-user-circle"></i>
                            Login
                        </a>
                    ) : (
                        <>
                            <h2>Tony</h2>
                            <a className="main-nav-item" href="/profile" onClick={() => LogoutAction(history)}>
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

export default Header
