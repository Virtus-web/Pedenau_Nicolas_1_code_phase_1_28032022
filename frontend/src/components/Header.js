import Logo from '../assets/argentBankLogo.png'
import { useHistory } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logoutAction } from '../redux/actions/loginAction'


function Header() {

    const history = useHistory()
    const dispatch = useDispatch()
    const user = useSelector((state) => state.login)
    const profile = useSelector((state) => state.profile)
    const log = JSON.parse(localStorage.getItem('userData'))

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
                    !user?.isLogin && !log?.isLogin ? (
                        <a className="main-nav-item" href="/login">
                            <i className="fa fa-user-circle"></i>
                            Login
                        </a>
                    ) : (
                        <>
                            <h2>{profile.profileData.data?.body.firstName}</h2>
                            <a className="main-nav-item" href="/" onClick={() => dispatch(logoutAction(history))}>
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
