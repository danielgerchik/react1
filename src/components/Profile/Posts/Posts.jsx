import s from "./Posts.module.css";
import Post from "./Post/Post";

// const postsArray = [
//     {number: "Post1"},
//     {number: "Post2"},
//     {number: "Post3"},
// ]
// const postItems = postsArray.map( el => <Post postNumber={el.number}/>)

const Posts = props => {
    const postsArr = props.dataPosts.dataPosts.dataPosts
    const postItems = postsArr.map( el => <Post postNumber={el.number}/>)
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