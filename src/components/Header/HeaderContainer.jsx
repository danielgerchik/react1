import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthData, setFetching} from "../../redux/reducers/auth-reducer";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.setFetching(true)
     axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {withCredentials: true}).then(response => {
         this.props.setFetching(false)
         if (response.data.resultCode === 0) {
             const authData = response.data.data
             this.props.setAuthData(authData)
         }
     })
    }

    render() {
        return <Header authData={this.props.authData}/>
    }
}

const mapStateToProps = state => {
    return {
        authData: state.auth.authData
    }
}
export default connect(mapStateToProps, {setAuthData ,setFetching})(HeaderContainer)


