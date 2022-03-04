import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile} from "../../redux/reducers/profilePage-reducer";
import WithRouter from "react-router-dom/es/withRouter";


class ProfileContainer extends React.Component {
    componentDidMount() {
       const userID = this.props.match.params.userID || 2
        this.props.getProfile(userID)
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

export default connect(mapStateToProps, {getProfile})(WithRouter(ProfileContainer))

