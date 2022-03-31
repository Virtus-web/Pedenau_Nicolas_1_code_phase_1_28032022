import { applyMiddleware, compose, createStore, combineReducers } from 'redux'
import loginReducer from './reducers/loginReducer'
import profileReducer from './reducers/profileReducer'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
    login: loginReducer,
    profile: profileReducer
})

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
)

export default store
