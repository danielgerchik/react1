import {Field, reduxForm} from "redux-form";
import {FormField} from "../common/FormField/FormField";
import {required, symbolLenght} from "./Validations/Validation";

const acceptableLength = symbolLenght(50)

const MessageForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={FormField} typeField='textarea' validate={[required, acceptableLength]} name={'messageText'} type={'text'}
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