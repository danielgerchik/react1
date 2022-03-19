import {Field, reduxForm} from "redux-form";

const PostForm = props => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field component={'textarea'} name={'postValue'} placeholder={'Whats new ?'}/>
            <button>Post</button>
        </form>
    )
}

const PostReduxForm = reduxForm({form: 'post'})(PostForm)

export default PostReduxForm