import {createActionAddPost, createActionChangeTextValue} from "../../../redux/reducers/profilePage-reducer";
import Posts from "./Posts";
import React from "react";

const PostsContainer = props => {
    const newText = props.store.getState().profilePage.newText
    const dataPosts = props.store.getState().profilePage.postsArray
    const addNewPost = ()=> {
        props.store.dispatch(createActionAddPost())
    }
    const changeText = text => {
        props.store.dispatch(createActionChangeTextValue(text))
    }

    return (
       <Posts newText={newText} dataPosts={dataPosts} changeText={changeText} addNewPost={addNewPost}/>
    )

}
export default PostsContainer;