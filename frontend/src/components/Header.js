import Logo from '../assets/argentBankLogo.png'


function Header() {

    return (
        <nav class="main-nav">
            <a class="main-nav-logo" href="/">
                <img
                class="main-nav-logo-image"
                src={Logo}
                alt="Argent Bank Logo"
                />
                <h1 class="sr-only">Argent Bank</h1>
            </a>
            <div>
                <a class="main-nav-item" href="/signup">
                    <i class="fa fa-user-circle"></i>
                    Sign In
                </a>
            </div>
        </nav>
    )
}

export default Header
