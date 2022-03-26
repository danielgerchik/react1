import {authAPI} from "../../API/api";
import {stopSubmit} from "redux-form";

const SETAUTHDATA = 'AUTH-REDUCER/SET-AUTH-DATA';
const SETFETCHING = 'AUTH-REDUCER/SET-FETCHING';
const SETISAUTH = 'AUTH-REDUCER/SET-IS-AUTH';


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
                id: action.id,
                email: action.email,
                login: action.login,
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


export const setAuthData = ({id, email, login}) => ({type: SETAUTHDATA, id, email, login})
export const setIsAuth = (isAuth) => ({type: SETISAUTH, isAuth})
export const setFetching = fetchingStatus => ({type: SETFETCHING, fetchingStatus})

export const getAuth = () => dispatch => {
     dispatch(setFetching(true))
    return authAPI.getAuth()
        .then(data => {
           dispatch(setFetching(false))
            if (data.resultCode === 0) {
                dispatch(setAuthData(data.data))
                dispatch(setIsAuth(true))
            }
        })
}
export const login = (email, password, rememberMe) => async dispatch => {
    const data = await authAPI.login(email, password, rememberMe)
            if (data.resultCode === 0) {
                dispatch(setIsAuth(true))
            } else {
                dispatch(stopSubmit('login', {_error: data.messages.length > 0 ? data.messages[0] : 'some error'}))
            }
}
export const logout = () => async dispatch => {
   const data = await authAPI.logout()
            if (data.resultCode === 0) {
                dispatch(setIsAuth(false))
            }
}

export default authReducer

