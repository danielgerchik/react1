import {Field, reduxForm} from "redux-form";
import {FormField} from "../common/FormField/FormField";
import {required, symbolLenght} from "./Validations/Validation";

const acceptableLength = symbolLenght(15)

const loginForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={FormField} typeField='input' validate={[required, acceptableLength]} name={'name'} type={'text'} placeholder={'name'}/>
            </div>

            <div>
                <Field component={FormField} typeField='input' validate={[required, acceptableLength]} name={'password'} type={'password'} placeholder={'password'}/>
            </div>
            <div>
                <Field component={FormField} typeField='input' validate={[required, acceptableLength]} name={'remember'} type={'checkbox'} />
            </div>
            <div>
                <button>Отправить</button>
            </div>
        </form>
    )
}

const loginReduxForm = reduxForm({form: 'login'})(loginForm)

export default loginReduxForm