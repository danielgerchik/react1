const ADDPOST = 'ADD-POST';
const CHANGETEXTVALUE = 'CHANGE-TEXT-VALUE';

const initialState = {
    postsArray: [
        {number: "Post1"},
        {number: "Post2"},
        {number: "Post3"},
    ],
    newText: '',
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

        default:
            return state
    }

}

export const createActionAddPost = () => ({type: ADDPOST})
export const createActionChangeTextValue = text => ({type: CHANGETEXTVALUE, newText: text})

export default profilePageReducer

