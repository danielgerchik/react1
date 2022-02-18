import {combineReducers, createStore} from "redux";
import profilePageReducer from "./reducers/profilePage-reducer";
import messagePageReducer from "./reducers/messagePage-reducer";


const reducers = combineReducers({
    profilePage: profilePageReducer,
    messagesPage:messagePageReducer
})


const store = createStore(reducers)

export default store