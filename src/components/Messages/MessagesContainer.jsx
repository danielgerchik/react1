import {createActionaddMessage, createActionchangeMessageText} from "../../redux/reducers/messagePage-reducer";
import Messages from "./Messages";


const MessagesContainer = props => {
    const interlocutorsArray = props.store.getState().messagesPage.interlocutorsArray
    const dialogsArray = props.store.getState().messagesPage.dialogsArray
    const newMessageText = props.store.getState().messagesPage.newMessageText
    const sendMassage = ()=> {
        props.store.dispatch(createActionaddMessage())
    }
    const changeText = value => {
        props.store.dispatch(createActionchangeMessageText(value))
    }
    return <Messages interlocutorsArray={interlocutorsArray} dialogsArray={dialogsArray} sendMessage={sendMassage}
                     changeText={changeText} newMessageText={newMessageText}/>
}
export default MessagesContainer;

