import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getStatusTH, setStatusTH} from "../../redux/reducers/profilePage-reducer";
import {WithRedirect} from "../../HOC/withRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {
    componentDidMount() {
       const userID = this.props.match.params.userID || this.props.myProfile
        this.props.getProfile(userID)
        this.props.getStatusTH(userID)
    }


    render() {
        // if(!this.props.authData) return <Redirect to='/login'/>

      return  <Profile userProfile={this.props.userProfile} status={this.props.status} setStatus={this.props.setStatusTH}/>
    }





}

const mapStateToProps = state => {
    return {
        userProfile: state.profilePage.userProfile,
        status: state.profilePage.status,
        myProfile: state.auth.id
    }
}



export default compose(WithRedirect, connect(mapStateToProps, {getProfile, getStatusTH, setStatusTH}))(ProfileContainer)

// WithRedirect(connect(mapStateToProps, {getProfile})(WithRouter(ProfileContainer)))

