import {Field, reduxForm} from "redux-form";
import {required, symbolLenght} from "./Validations/Validation";
import {FormField} from "../common/FormField/FormField";

const acceptableLength = symbolLenght(50)


const PostForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={FormField} typeField={'textarea'} name={'postValue'} placeholder={'Whats new ?'} validate={[required, acceptableLength]}/>
            <button>Post</button>
        </form>
    )
}

const PostReduxForm = reduxForm({form: 'post'})(PostForm)

export default PostReduxForm