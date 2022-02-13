import s from "./Posts.module.css";
import Post from "./Post/Post";


const Posts = () => {
    return (
        <div className={s.posts}>
        <div className={s.makeNewPost}>
            <input placeholder="What's new ?" type="text"/>
            <button>Post</button>
        </div>
    <div className={s.myPosts}>
        <Post message="Post1"/>
        <Post message="Post2"/>
        <Post message="Post3"/>
    </div>
        </div>
    )
}
export default Posts;