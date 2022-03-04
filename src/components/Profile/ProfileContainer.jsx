import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile} from "../../redux/reducers/profilePage-reducer";
import WithRouter from "react-router-dom/es/withRouter";
import {Redirect} from "react-router-dom";


class ProfileContainer extends React.Component {
    componentDidMount() {
       const userID = this.props.match.params.userID || 2
        this.props.getProfile(userID)
    }


    render() {
        if(!this.props.authData) return <Redirect to='/login'/>

      return  <Profile userProfile={this.props.userProfile}/>
    }





}

const mapStateToProps = state => {
    return {
        userProfile: state.profilePage.userProfile,
        authData: state.auth.authData
    }
}

export default connect(mapStateToProps, {getProfile})(WithRouter(ProfileContainer))

