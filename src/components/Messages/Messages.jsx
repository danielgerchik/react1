import s from './Messages.module.css';
import Interlocutor from "./Interlocutor/Interlocutor";
import Dialog from "./Dialog/Dialog";


const Messages = props => {
    const interlocutors = props.interlocutorsArray.map(el => <Interlocutor path={el.path} name={el.name}/>)
    const dialogs = props.dialogsArray.map(el => <Dialog dialogItem = {el.dialogItem}/>)

    const onSendMassage = ()=> {
        props.sendMessage()
    }
    const onChangeText = e => {
        props.changeText(e.target.value)
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
                <div><textarea onChange={onChangeText} value={props.newMessageText} placeholder='type message...'></textarea></div>
            </div>
            <div>
                <button onClick={onSendMassage}>Отправить</button>
            </div>
        </div>
    )
}
export default Messages;

