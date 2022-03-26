import {profileAPI, statusAPI} from "../../API/api";

const ADDPOST = 'PROFILEPAGE-REDUCER/ADD-POST';
const CHANGETEXTVALUE = 'PROFILEPAGE-REDUCER/CHANGE-TEXT-VALUE';
const SETUSERPROFILE = 'PROFILEPAGE-REDUCER/SET-USER-PROFILE';
const SETSTATUS = 'PROFILEPAGE-REDUCER/SET-STATUS';
const DELETEPOST = 'PROFILEPAGE-REDUCER/DELETE-POST';

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
export const deletePost = id => ({type: DELETEPOST, id})
export const ChangeTextValue = newText => ({type: CHANGETEXTVALUE, newText})
export const setUserProfile = userData => ({type: SETUSERPROFILE, userData})
export const setStatus = status => ({type: SETSTATUS, status})

export const getProfile = userID => {
    return async dispatch => {
      const data = await profileAPI.getProfile(userID)
                dispatch(setUserProfile(data))
    }
}

export const getStatusTH = ID => {
    return async dispatch => {
        const response = await statusAPI.getStatus(ID)
                dispatch(setStatus(response))
    }
}


export const setStatusTH = statusText => {

    return async dispatch => {
       const response = await statusAPI.setStatus(statusText.status)
                if(response.status === 200) {
                    dispatch(setStatus(statusText.status))
                }
    }
}


export default profilePageReducer

