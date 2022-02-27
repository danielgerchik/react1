import s from "./Posts.module.css";
import Post from "./Post/Post";
const Posts = props => {


    const onClickAddNewPost = ()=> {
        props.AddPost()
    }
    const onChangeText = e => {
        props.ChangeTextValue(e.target.value)
    }
    const postItems = props.dataPosts.map( el => <Post postNumber={el.number}/>)
    return (
        <div className={s.posts}>
            <div className={s.makeNewPost}>
                <textarea  placeholder="What's new ?" value={props.newText} onChange={onChangeText}></textarea>
                <button onClick={onClickAddNewPost}>Post</button>
            </div>
            <div className={s.myPosts}>
                {postItems}
            </div>
        </div>

    )

}
export default Posts;