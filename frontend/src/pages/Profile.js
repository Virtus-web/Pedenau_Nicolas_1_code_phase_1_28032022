import Account from '../components/Account'


function Profile() {

    return (
        <main class="main bg-dark">
            <div class="header">
                <h1>Welcome back<br />Tony Jarvis!</h1>
                <button class="edit-button">Edit Name</button>
            </div>
            <h2 class="sr-only">Accounts</h2>
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
