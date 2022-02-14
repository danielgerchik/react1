import s from './Messages.module.css';
import Interlocutor from "./Interlocutor/Interlocutor";
import Dialog from "./Dialog/Dialog";

// const interlocutorsArray = [
//     {path: 'vanya', name: 'Ваня'},
//     {path: 'masha', name: 'Маша'},
//     {path: 'tanya', name: 'Таня'},
//     {path: 'sasha', name: 'Саша'},
// ]
// const dialogsArray = [
//     {dialogItem: 'Привет'},
//     {dialogItem: 'Как дела ?'},
//     {dialogItem: 'Че делаешь ?'},
//     {dialogItem: 'Всё ок'},
// ]

// const interlocutors = interlocutorsArray.map(el => {
//     return <Interlocutor path={el.path} name={el.name}/>
// })

// const dialogs = dialogsArray.map(el => <Dialog dialogItem = {el.dialogItem}/>)

const Messages = props => {
    const interLocutorsArr = props.dataInterlocutors.dataInterlocutors
    const interlocutors = interLocutorsArr.map(el => {
        return <Interlocutor path={el.path} name={el.name}/>
    })
    const dialogsArr = props.dataDialogs.dataDialogs
    const dialogs = dialogsArr.map(el => <Dialog dialogItem = {el.dialogItem}/>)
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