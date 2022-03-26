import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import profilePageReducer from "./reducers/profilePage-reducer";
import messagePageReducer from "./reducers/messagePage-reducer";
import usersPageReducer from "./reducers/usersPage-reducer";
import authReducer from "./reducers/auth-reducer";
import thunk from "redux-thunk";
import { reducer as formReducer } from 'redux-form'
import appReducer from "./reducers/app-reducer";


const reducers = combineReducers({
    profilePage: profilePageReducer,
    messagesPage:messagePageReducer,
    usersPage: usersPageReducer,
    auth: authReducer,
    form: formReducer,
    app: appReducer,
})


// import { createStore, applyMiddleware, compose } from 'redux';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))

// const store = createStore(reducers , applyMiddleware(thunk))

export default store

window.state = store.getState()