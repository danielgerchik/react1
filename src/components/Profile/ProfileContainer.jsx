import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile} from "../../redux/reducers/profilePage-reducer";
import WithRouter from "react-router-dom/es/withRouter";
import {Redirect} from "react-router-dom";
import {WithRedirect} from "../../HOC/withRedirect";
import {compose} from "redux";


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
    }
}



export default compose(WithRedirect, connect(mapStateToProps, {getProfile}))(ProfileContainer)

// WithRedirect(connect(mapStateToProps, {getProfile})(WithRouter(ProfileContainer)))

