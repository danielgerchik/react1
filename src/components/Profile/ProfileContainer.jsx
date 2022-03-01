import React from "react";
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/reducers/profilePage-reducer";
import WithRouter from "react-router-dom/es/withRouter";
import {profileAPI} from "../../API/api";



class ProfileContainer extends React.Component {
    componentDidMount() {
       const userID = this.props.match.params.userID || 2
        profileAPI.getProfile(userID)
            .then(data => {
            this.props.setUserProfile(data)
        })
    }


    render() {
      return  <Profile userProfile={this.props.userProfile}/>
    }





}

const mapStateToProps = state => {
    return {
        userProfile: state.profilePage.userProfile
    }
}

export default connect(mapStateToProps, {setUserProfile})(WithRouter(ProfileContainer))

