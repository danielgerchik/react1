import {Field, reduxForm} from "redux-form";

const loginForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={'input'} name={'name'} type={'text'} placeholder={'name'}/>
            </div>

            <div>
                <Field component={'input'} name={'password'} type={'password'} placeholder={'password'}/>
            </div>
            <div>
                <Field component={'input'} name={'remember'} type={'checkbox'} />
            </div>
            <div>
                <button>Отправить</button>
            </div>
        </form>
    )
}

const loginReduxForm = reduxForm({form: 'login'})(loginForm)

export default loginReduxForm