import {Field, reduxForm} from "redux-form";

const MessageForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'textarea'} name={'messageText'} type={'text'}
                      placeholder={'Введите сообщение...'}/>
            </div>
            <div>
                <button>Отправить</button>
            </div>
        </form>
    )
}

const MessageReduxForm = reduxForm({form: 'message'})(MessageForm)

export default MessageReduxForm