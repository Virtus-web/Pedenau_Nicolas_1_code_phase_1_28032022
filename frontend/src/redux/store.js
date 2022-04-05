import { applyMiddleware, compose, createStore, combineReducers } from 'redux'
import reducerLogin from './reducers/reducerLogin'
import reducerProfile from './reducers/reducerProfile'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
    user: reducerLogin,
    profile: reducerProfile
})

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
)

export default store
