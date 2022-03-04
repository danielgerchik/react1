import {applyMiddleware, combineReducers, createStore} from "redux";
import profilePageReducer from "./reducers/profilePage-reducer";
import messagePageReducer from "./reducers/messagePage-reducer";
import usersPageReducer from "./reducers/usersPage-reducer";
import authReducer from "./reducers/auth-reducer";
import thunk from "redux-thunk";


const reducers = combineReducers({
    profilePage: profilePageReducer,
    messagesPage:messagePageReducer,
    usersPage: usersPageReducer,
    auth: authReducer
})


const store = createStore(reducers , applyMiddleware(thunk))

export default store

window.state = store.getState()