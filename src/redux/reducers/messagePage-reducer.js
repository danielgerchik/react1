const ADDMESSAGE = 'ADD-MESSAGE'
const CHANGEMESSAGETEXT = 'CHANGE-MESSAGE-TEXT';

const initialState = {
    interlocutorsArray: [
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
    newMessageText: '',
}

const messagePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADDMESSAGE:
            return {
                ...state,
                dialogsArray: [...state.dialogsArray, {dialogItem: action.newMessage}],
                newMessageText: ''
            }

        case CHANGEMESSAGETEXT:
            return {
                ...state,
                newMessageText: action.newText
            }

        default:
            return state
    }
}

export const addMessage = newMessage => ({type: ADDMESSAGE, newMessage})
export const changeMessageText = text => ({type: CHANGEMESSAGETEXT, newText: text})

export default messagePageReducer