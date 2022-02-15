import s from "./Posts.module.css";
import Post from "./Post/Post";
import React from "react";

const Posts = props => {
    const textareaOfNewPost = React.useRef()

    const showAlert = ()=> {
        const valueOfNewPost = textareaOfNewPost.current.value
        props.addPost(valueOfNewPost)
        textareaOfNewPost.current.value = ''
    }
    const postItems = props.dataPosts.map( el => <Post postNumber={el.number}/>)
    return (
        <div className={s.posts}>
            <div className={s.makeNewPost}>
                <textarea ref={textareaOfNewPost} placeholder="What's new ?"></textarea>
                <button onClick={showAlert}>Post</button>
            </div>
            <div className={s.myPosts}>
                {postItems}
            </div>
        </div>

    )

}
export default Posts;