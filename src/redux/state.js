import rerender from "../rerender";

const state = {
    profilePage: {
          postsArray: [
            {number: "Post1"},
            {number: "Post2"},
            {number: "Post3"},
        ],
    },
    messagesPage: {
        interlocutorsArray:  [
            {path: 'vanya', name: 'Ваня'},
            {path: 'masha', name: 'Маша'},
            {path: 'tanya', name: 'Таня'},
            {path: 'sasha', name: 'Саша'},
        ],
            dialogsArray: [
                {dialogItem: 'Привет'},
                {dialogItem: 'Как дела ?'},
                {dialogItem: 'Че делаешь ?'},
                {dialogItem: 'Всё ок'},
            ],
    }
}

export default state;

export const addPost = postMessage => {
    const newMessage = {number: postMessage};
    state.profilePage.postsArray.push(newMessage)
    rerender(state, addPost)
}