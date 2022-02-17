const ADDMESSAGE = 'ADD-MESSAGE'
const CHANGEMESSAGETEXT = 'CHANGE-MESSAGE-TEXT';


const messagePageReducer = (state, action) => {
    switch (action.type) {
        case ADDMESSAGE:
            const newMessage = state.newMessageText
            state.newMessageText = ''
            state.dialogsArray.push({dialogItem: newMessage})
            return state
        case CHANGEMESSAGETEXT:
            state.newMessageText = action.newText
            return state
        default:
            return state
    }
}

export const createActionaddMessage = () => ({type: ADDMESSAGE})
export const createActionchangeMessageText = text => ({type: CHANGEMESSAGETEXT, newText: text})

export default messagePageReducer