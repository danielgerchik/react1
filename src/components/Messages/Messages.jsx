import s from './Messages.module.css';
import Interlocutor from "./Interlocutor/Interlocutor";
import Dialog from "./Dialog/Dialog";


const Messages = props => {
    const interlocutors = props.dataMessage.interlocutorsArray.map(el => <Interlocutor path={el.path} name={el.name}/>)
    const dialogs = props.dataMessage.dialogsArray.map(el => <Dialog dialogItem = {el.dialogItem}/>)
    return (
        <div className={s.messages}>
           <div className={s.interlocutors}>
               {interlocutors}
           </div>
            <div className={s.dialogs}>
                {dialogs}
            </div>
        </div>
    )
}
export default Messages;