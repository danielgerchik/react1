import s from './Messages.module.css';
import Interlocutor from "./Interlocutor/Interlocutor";
import Dialog from "./Dialog/Dialog";
import {createActionaddMessage, createActionchangeMessageText} from "../../redux/state";


const Messages = props => {
    const interlocutors = props.dataMessage.messagesPage.interlocutorsArray.map(el => <Interlocutor path={el.path} name={el.name}/>)
    const dialogs = props.dataMessage.messagesPage.dialogsArray.map(el => <Dialog dialogItem = {el.dialogItem}/>)

    const sendMassage = ()=> {
        props.dispatch(createActionaddMessage())
    }
    const changeText = e => {
        props.dispatch(createActionchangeMessageText(e.target.value))
    }
    return (
        <div>
            <div className={s.messages}>
                <div className={s.interlocutors}>
                    {interlocutors}
                </div>
                <div className={s.dialogs}>
                    {dialogs}
                </div>
            </div>
            <div>
                <div><textarea onChange={changeText} value={props.dataMessage.messagesPage.newMessageText} placeholder='type message...'></textarea></div>
            </div>
            <div>
                <button onClick={sendMassage}>Отправить</button>
            </div>
        </div>
    )
}
export default Messages;

