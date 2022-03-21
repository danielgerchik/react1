import {authAPI} from "../../API/api";

const SETAUTHDATA = 'SET-AUTH-DATA';
const SETFETCHING = 'SET-FETCHING';
const SETISAUTH = 'SET-IS-AUTH';


const initialState = {
    isAuth: false,
    id: null,
    email: null,
    login: null,
    isFetching: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SETISAUTH:
            return {
                ...state,
                isAuth: action.isAuth
            }
        case SETAUTHDATA:
            return {
                ...state,
                id: action.authData.id,
                email: action.authData.email,
                login: action.authData.login,
            }
        case SETFETCHING:
            return {
                ...state,
                isFetching: action.fetchingStatus
            }

        default:
            return state
    }

}


export const setAuthData = (authData) => ({type: SETAUTHDATA, authData})
export const setIsAuth = (isAuth) => ({type: SETISAUTH, isAuth})
export const setFetching = fetchingStatus => ({type: SETFETCHING, fetchingStatus})

export const getAuth = () => dispatch => {
    dispatch(setFetching(true))
    authAPI.getAuth()
        .then(data => {
           dispatch(setFetching(false))
            if (data.resultCode === 0) {
                dispatch(setAuthData(data.data))
                dispatch(setIsAuth(true))
            }
        })
}
export const login = (email, password, rememberMe) => dispatch => {
    authAPI.login(email, password, rememberMe)
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setIsAuth(true))
            }
        })
}
export const logout = () => dispatch => {
    authAPI.logout()
        .then(data => {
            if (data.resultCode === 0) {
                dispatch(setIsAuth(false))
            }
        })
}

export default authReducer

