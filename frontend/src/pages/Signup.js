


function Signup() {

    return (
        <>
            <main class="main bg-dark">
                <section class="sign-in-content">
                    <i class="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>
                    <form>
                        <div class="input-wrapper">
                            <label for="username">Username</label
                            ><input type="text" id="username" />
                        </div>
                        <div class="input-wrapper">
                            <label for="password">Password</label
                            ><input type="password" id="password" />
                        </div>
                        <div class="input-remember">
                            <input type="checkbox" id="remember-me" /><label for="remember-me"
                            >Remember me</label
                            >
                        </div>
                        <a href="/profile" class="sign-in-button">Sign In</a>
                        {/* <button class="sign-in-button">Sign In</button> */}
                    </form>
                </section>
            </main>
        </>
    )
}

export default Signup
