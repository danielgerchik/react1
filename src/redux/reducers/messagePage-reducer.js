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
        case ADDMESSAGE: {
            const stateCopy = {...state}
            stateCopy.dialogsArray = [...state.dialogsArray]
            const newMessage = stateCopy.newMessageText
            stateCopy.dialogsArray.push({dialogItem: newMessage})
            stateCopy.newMessageText = ''
            return stateCopy
        }
        case CHANGEMESSAGETEXT: {
            const stateCopy = {...state}
            stateCopy.newMessageText = action.newText
            return stateCopy
        }
        default:
            return state
    }
}

export const createActionaddMessage = () => ({type: ADDMESSAGE})
export const createActionchangeMessageText = text => ({type: CHANGEMESSAGETEXT, newText: text})

export default messagePageReducer