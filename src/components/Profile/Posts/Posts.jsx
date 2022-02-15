import s from "./Posts.module.css";
import Post from "./Post/Post";



const Posts = props => {

    const postItems = props.dataPosts.map( el => <Post postNumber={el.number}/>)
    return (
        <div className={s.posts}>
            <div className={s.makeNewPost}>
                <input placeholder="What's new ?" type="text"/>
                <button>Post</button>
            </div>
            <div className={s.myPosts}>
                {postItems}
            </div>
        </div>
    )
}
export default Posts;