import s from "./Posts.module.css";
import Post from "./Post/Post";
import PostReduxForm from "../../Forms/PostForm";
const Posts = props => {


    const onClickAddNewPost = ()=> {
        props.AddPost()
    }
    const onChangeText = e => {
        props.ChangeTextValue(e.target.value)
    }
    const postItems = props.dataPosts.map( el => <Post postNumber={el.number}/>)

    const onSubmit = formData => {
        console.log(formData);
        props.AddPost(formData.postValue)
    }
    return (
        <div className={s.posts}>
            <div className={s.makeNewPost}>
                {/*<textarea  placeholder="What's new ?" value={props.newText} onChange={onChangeText}></textarea>*/}
                {/*<button onClick={onClickAddNewPost}>Post</button>*/}
                <PostReduxForm onSubmit={onSubmit}/>
            </div>
            <div className={s.myPosts}>
                {postItems}
            </div>
        </div>

    )

}
export default Posts;