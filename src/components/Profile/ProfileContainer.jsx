import React from "react";
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile, getStatusTH, setPhotoTH, setStatusTH} from "../../redux/reducers/profilePage-reducer";
import {WithRedirect} from "../../HOC/withRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {
    refreshProfile() {
        const userID = this.props.match.params.userID || this.props.myProfile
        this.props.getProfile(userID)
        this.props.getStatusTH(userID)
    }
    componentDidMount() {
        this.refreshProfile()
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.match.params.userID != prevProps.match.params.userID) {
            this.refreshProfile()
        }
    }

    render() {
        // if(!this.props.authData) return <Redirect to='/login'/>

      return  <Profile userProfile={this.props.userProfile}
                       status={this.props.status}
                       setStatus={this.props.setStatusTH}
                        setPhoto={this.props.setPhotoTH}
                        isMyProfile={!this.props.match.params.userID}/>
    }





}

const mapStateToProps = state => {
    return {
        userProfile: state.profilePage.userProfile,
        status: state.profilePage.status,
        myProfile: state.auth.id
    }
}



export default compose(WithRedirect, connect(mapStateToProps, {getProfile, getStatusTH, setStatusTH, setPhotoTH}))(ProfileContainer)

// WithRedirect(connect(mapStateToProps, {getProfile})(WithRouter(ProfileContainer)))

