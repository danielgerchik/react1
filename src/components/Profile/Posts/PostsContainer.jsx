import {createActionAddPost, createActionChangeTextValue} from "../../../redux/reducers/profilePage-reducer";
import Posts from "./Posts";
import React from "react";
import contextStore from "../../../ContexStore";

const PostsContainer = props => {
    return <contextStore.Consumer>
        { (store) =>  {
    const newText = store.getState().profilePage.newText
    const dataPosts = store.getState().profilePage.postsArray
    const addNewPost = ()=> {
            store.dispatch(createActionAddPost())
    }
    const changeText = text => {
            store.dispatch(createActionChangeTextValue(text))
    }

    return (
       <Posts newText={newText} dataPosts={dataPosts} changeText={changeText} addNewPost={addNewPost}/>
    )
        }}
    </contextStore.Consumer>
}
export default PostsContainer;