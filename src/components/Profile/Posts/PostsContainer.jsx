import {createActionAddPost, createActionChangeTextValue} from "../../../redux/reducers/profilePage-reducer";
import Posts from "./Posts";
import React from "react";
import {connect} from "react-redux";

// const PostsContainer = props => {
//     return <contextStore.Consumer>
//         { (store) =>  {
//     const newText = store.getState().profilePage.newText
//     const dataPosts = store.getState().profilePage.postsArray
//     const addNewPost = ()=> {
//             store.dispatch(createActionAddPost())
//     }
//     const changeText = text => {
//             store.dispatch(createActionChangeTextValue(text))
//     }
//
//     return (
//        <Posts newText={newText} dataPosts={dataPosts} changeText={changeText} addNewPost={addNewPost}/>
//     )
//         }}
//     </contextStore.Consumer>
// }

const mapStateToProps = state => {
    return {
        newText: state.profilePage.newText,
        dataPosts: state.profilePage.postsArray
    }
}
const mapDispatchToProps = dispatch => {
    return {
        changeText: text => {
            dispatch(createActionChangeTextValue(text))
        },
        addNewPost: () => {
            dispatch(createActionAddPost())
        }
    }
}


const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)


export default PostsContainer;




