import Account from '../components/Account'
import { connect } from 'react-redux'
import { getProfileAction } from '../redux/actions'


function Profile(props) {

    // const { session } = props
    console.log(props)

    return (
        <main className="main bg-dark">
            <div className="header">
                <h1>Welcome back<br />{props.session.isLogin}</h1>
                <button className="edit-button">Edit Name</button>
            </div>
            <h2 className="sr-only">Accounts</h2>
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


const mapStateToProps = (state) => {
    return {
        session: state
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getProfile: () => {
            dispatch(getProfileAction())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
