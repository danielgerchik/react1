import {authAPI} from "../../API/api";

const SETAUTHDATA = 'SET-AUTH-DATA';
const SETFETCHING = 'SET-FETCHING';


const initialState = {
    authData: null,
    isFetching: false
}

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SETAUTHDATA:
            return {
                ...state,
                authData: {...action.authData}
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


export const setAuthData = authData => ({type: SETAUTHDATA, authData})
export const setFetching = fetchingStatus => ({type: SETFETCHING, fetchingStatus})

export const getAuth = () => dispatch => {
    dispatch(setFetching(true))
    authAPI.getAuth()
        .then(data => {
           dispatch(setFetching(false))
            if (data.resultCode === 0) {
                dispatch(setAuthData(data.data))
            }
        })
}

export default authReducer

