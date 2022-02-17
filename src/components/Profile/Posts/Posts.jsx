import s from "./Posts.module.css";
import Post from "./Post/Post";
import React from "react";

const Posts = props => {
    const textareaOfNewPost = React.useRef()

    const addNewPost = ()=> {
        // props.addPost()
        props.dispatch({type: 'ADD-POST'})
    }
    const changeText = () => {
        // props.changeNewTextValue(textareaOfNewPost.current.value)
        props.dispatch({type: 'CHANGE-TEXT-VALUE', newText: textareaOfNewPost.current.value})
    }
    const postItems = props.dataPosts.map( el => <Post postNumber={el.number}/>)
    return (
        <div className={s.posts}>
            <div className={s.makeNewPost}>
                <textarea ref={textareaOfNewPost} placeholder="What's new ?" value={props.newText} onChange={changeText}></textarea>
                <button onClick={addNewPost}>Post</button>
            </div>
            <div className={s.myPosts}>
                {postItems}
            </div>
        </div>

    )

}
export default Posts;