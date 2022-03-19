import {profileAPI, statusAPI} from "../../API/api";

const ADDPOST = 'ADD-POST';
const CHANGETEXTVALUE = 'CHANGE-TEXT-VALUE';
const SETUSERPROFILE = 'SET-USER-PROFILE';
const SETSTATUS = 'SET-STATUS';

const initialState = {
    postsArray: [
        {number: "Post1"},
        {number: "Post2"},
        {number: "Post3"},
    ],
    newText: '',
    userProfile: null,
    status: ''
}

const profilePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDPOST:
            return {
                ...state,
                postsArray: [...state.postsArray, {number: action.newPost}],
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
        case SETSTATUS:
            return {
                ...state,
                status: action.status
            }

        default:
            return state
    }

}

export const AddPost = newPost => ({type: ADDPOST, newPost})
export const ChangeTextValue = text => ({type: CHANGETEXTVALUE, newText: text})
export const setUserProfile = userData => ({type: SETUSERPROFILE, userData})
export const setStatus = status => ({type: SETSTATUS, status})

export const getProfile = userID => {
    return dispatch => {
        profileAPI.getProfile(userID)
            .then(data => {
                dispatch(setUserProfile(data))
            })
    }
}

export const getStatusTH = ID => {
    return dispatch => {
        statusAPI.getStatus(ID)
            .then(response => {
                dispatch(setStatus(response))
            })
    }
}


export const setStatusTH = statusText => {

    return dispatch => {
        statusAPI.setStatus(statusText.status)
            .then(response => {
                if(response.status === 200) {
                    dispatch(setStatus(statusText.status))
                }
            })
    }
}


export default profilePageReducer

