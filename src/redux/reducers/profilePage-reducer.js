import {profileAPI} from "../../API/api";

const ADDPOST = 'ADD-POST';
const CHANGETEXTVALUE = 'CHANGE-TEXT-VALUE';
const SETUSERPROFILE = 'SET-USER-PROFILE';

const initialState = {
    postsArray: [
        {number: "Post1"},
        {number: "Post2"},
        {number: "Post3"},
    ],
    newText: '',
    userProfile: null
}

const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDPOST:
            return {
                ...state,
                postsArray: [...state.postsArray, {number: state.newText}],
                newText: ''
            }

        case CHANGETEXTVALUE:
            return {
                ...state,
                newText: action.newText
            }

        case SETUSERPROFILE:
            return {
                ...state,
                userProfile: action.userData
            }

        default:
            return state
    }

}

export const AddPost = () => ({type: ADDPOST})
export const ChangeTextValue = text => ({type: CHANGETEXTVALUE, newText: text})
export const setUserProfile = userData => ({type: SETUSERPROFILE, userData})

export const getProfile = userID => {
    return dispatch => {
        profileAPI.getProfile(userID)
            .then(data => {
                dispatch(setUserProfile(data))
            })
    }
}


export default profilePageReducer

