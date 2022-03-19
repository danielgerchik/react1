import s from './Messages.module.css';
import Interlocutor from "./Interlocutor/Interlocutor";
import Dialog from "./Dialog/Dialog";
import {Redirect} from "react-router-dom";
import React from "react";
import MessageReduxForm from "../Forms/MessageForm";


const Messages = props => {
    const interlocutors = props.interlocutorsArray.map(el => <Interlocutor path={el.path} name={el.name}/>)
    const dialogs = props.dialogsArray.map(el => <Dialog dialogItem = {el.dialogItem}/>)

    // const onSendMassage = e => {
    //     props.addMessage()
    // }
    // const onChangeText = e => {
    //     props.changeMessageText(e.target.value)
    // }
    const onSubmit = formData => {
        console.log(formData);
        props.addMessage(formData.messageText)
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
            {/*<div>*/}
            {/*    <div><textarea onChange={onChangeText} value={props.newMessageText} placeholder='type message...'></textarea></div>*/}
            {/*</div>*/}
            {/*<div>*/}
            {/*    <button onClick={onSendMassage}>Отправить</button>*/}
            {/*</div>*/}
            <MessageReduxForm onSubmit={onSubmit}/>
        </div>
    )
}
export default Messages;