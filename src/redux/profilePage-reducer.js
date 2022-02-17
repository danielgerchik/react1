const ADDPOST = 'ADD-POST';
const CHANGETEXTVALUE = 'CHANGE-TEXT-VALUE';


const profilePageReducer = (state, action) => {
    switch (action.type) {
        case ADDPOST:
            const newPost = {number: state.newText};
            state.postsArray.push(newPost)
            state.newText = ''
            return state
        case CHANGETEXTVALUE:
            state.newText = action.newText
            return state
        default:
            return state
    }

}

export const createActionAddPost = () => ({type: ADDPOST})
export const createActionChangeTextValue = text => ({type: CHANGETEXTVALUE, newText: text})

export default profilePageReducer

