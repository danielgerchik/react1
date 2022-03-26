const ADDMESSAGE = 'MESSAGEPAGE-REDUCER/ADD-MESSAGE'
const CHANGEMESSAGETEXT = 'MESSAGEPAGE-REDUCER/CHANGE-MESSAGE-TEXT';

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
export const changeMessageText = newText => ({type: CHANGEMESSAGETEXT, newText})

export default messagePageReducer