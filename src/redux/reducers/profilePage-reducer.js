import {profileAPI, statusAPI} from "../../API/api";

const ADDPOST = 'ADD-POST';
const CHANGETEXTVALUE = 'CHANGE-TEXT-VALUE';
const SETUSERPROFILE = 'SET-USER-PROFILE';
const SETSTATUS = 'SET-STATUS';
const DELETEPOST = 'DELETE-POST';

const initialState = {
    postsArray: [
        {id: 1,number: "Post1"},
        {id: 2,number: "Post2"},
        {id: 3,number: "Post3"},
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
        case DELETEPOST:
            return {
                ...state,
                postsArray: state.postsArray.filter(p => p.id != action.id)
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
export const deletePost = (id) => ({type: DELETEPOST, id})
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

