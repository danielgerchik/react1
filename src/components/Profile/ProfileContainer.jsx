import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getStatusTH, setStatusTH} from "../../redux/reducers/profilePage-reducer";
import WithRouter from "react-router-dom/es/withRouter";
import {Redirect} from "react-router-dom";
import {WithRedirect} from "../../HOC/withRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {
    componentDidMount() {
       const userID = this.props.match.params.userID || 2
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
    }
}



export default compose(WithRedirect, connect(mapStateToProps, {getProfile, getStatusTH, setStatusTH}))(ProfileContainer)

// WithRedirect(connect(mapStateToProps, {getProfile})(WithRouter(ProfileContainer)))

