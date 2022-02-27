import {AddPost, ChangeTextValue} from "../../../redux/reducers/profilePage-reducer";
import Posts from "./Posts";
import React from "react";
import {connect} from "react-redux";


const mapStateToProps = state => {
    return {
        newText: state.profilePage.newText,
        dataPosts: state.profilePage.postsArray
    }
}



const PostsContainer = connect(mapStateToProps, {ChangeTextValue, AddPost})(Posts)


export default PostsContainer;




