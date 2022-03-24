import profilePageReducer, {AddPost, deletePost} from "./profilePage-reducer";

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

test('posts length should be increment', () => {
    const action = AddPost("Post4")
    const newState = profilePageReducer(initialState, action)
    expect(newState.postsArray.length).toBe(4)
});

test('posts length should be decrement', ()=> {
    const action = deletePost(2)
    const newState = profilePageReducer(initialState, action)
    expect(newState.postsArray.length).toBe(2)
})