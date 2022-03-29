import './App.css'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './pages/Home'
import Signup from './pages/Signup'
import Profile from './pages/Profile'
import Footer from './components/Footer'
import Error from './pages/Error'
import { Provider } from 'react-redux'
import store from './redux/store'


//Utiliser Redux et theme et une fonction pour savoir si signin ou signout dans le header
function App() {

    return (
        <Provider store={store}>
            <BrowserRouter className="test">
                <Header />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/signup" component={Signup} />
                    <Route exact path="/profile" component={Profile} />
                    <Route path="*" component={Error} />
                </Switch>
                <Footer />
            </BrowserRouter>
        </Provider>
    )
}

export default App
