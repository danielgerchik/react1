import {createActionaddMessage, createActionchangeMessageText} from "../../redux/reducers/messagePage-reducer";
import Messages from "./Messages";
import contextStore from "../../ContexStore";


const MessagesContainer = props => {
    return <contextStore.Consumer>
        { (store) => {const interlocutorsArray = store.getState().messagesPage.interlocutorsArray
            const dialogsArray = store.getState().messagesPage.dialogsArray
            const newMessageText = store.getState().messagesPage.newMessageText
            const sendMassage = ()=> {
            store.dispatch(createActionaddMessage())
        }
            const changeText = value => {
            store.dispatch(createActionchangeMessageText(value))
        }
            return <Messages interlocutorsArray={interlocutorsArray} dialogsArray={dialogsArray} sendMessage={sendMassage}
            changeText={changeText} newMessageText={newMessageText}/>

            }}
    </contextStore.Consumer>
}
export default MessagesContainer;

