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

export default authReducer

