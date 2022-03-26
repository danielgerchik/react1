import {getAuth} from "./auth-reducer";

const SETINITALIZATION = 'APP-REDUCER/SET-INITALIZATION';


const initialState = {
    isInitalization: false
}

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case SETINITALIZATION:
            return {
                ...state,
                isInitalization: true
            }
        default:
            return state
    }

}


export const setInitalization = () => ({type: SETINITALIZATION})


export const initalization = () => (dispatch) => {
       const promise =  dispatch(getAuth())
    Promise.all([promise]).then(()=> {
        dispatch(setInitalization())
    })

}

export default appReducer