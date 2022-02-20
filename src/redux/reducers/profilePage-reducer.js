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
        case ADDPOST: {
            const stateCopy = {...state}
            stateCopy.postsArray = [...state.postsArray]
            const newPost = {number: stateCopy.newText};
            stateCopy.postsArray.push(newPost)
            stateCopy.newText = ''
            return stateCopy
        }
        case CHANGETEXTVALUE: {
            const stateCopy = {...state}
            stateCopy.newText = action.newText
            return stateCopy
        }
        default:
            return state
    }

}

export const createActionAddPost = () => ({type: ADDPOST})
export const createActionChangeTextValue = text => ({type: CHANGETEXTVALUE, newText: text})

export default profilePageReducer

