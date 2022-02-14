import s from './Messages.module.css';

const Messages = props => {
    return (
        <div className={s.messages}>
           <div className={s.interlocutors}>
               <div className={s.interlocutor}>Ваня</div>
               <div className={s.interlocutor}>Петя</div>
               <div className={s.interlocutor}>Маша</div>
               <div className={s.interlocutor}>Даня</div>
           </div>
            <div className={s.dialogs}>
                <div className={s.dialog}>Привет</div>
                <div className={s.dialog}>Как дела ?</div>
                <div className={s.dialog}>Че делаешь ?</div>
                <div className={s.dialog}>Я знаю это</div>
            </div>
        </div>
    )
}
export default Messages;