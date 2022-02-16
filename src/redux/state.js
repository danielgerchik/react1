// import rerender from "../rerender";

let rerender = ()=> {
    console.log('1')
}
export const importRerenderFunction = rerenderFunction => {
    rerender = rerenderFunction
}

const state = {
    profilePage: {
          postsArray: [
            {number: "Post1"},
            {number: "Post2"},
            {number: "Post3"},
        ],
        newText: '',
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

export const addPost = () => {
    const newMessage = {number: state.profilePage.newText};
    state.profilePage.postsArray.push(newMessage)
    state.profilePage.newText = ''
    rerender(state, addPost, changeNewTextValue)
}

export const changeNewTextValue = NewTextValue => {
    state.profilePage.newText = NewTextValue
    rerender(state, addPost, changeNewTextValue)
}

window.state = state