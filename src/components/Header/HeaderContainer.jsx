import React from "react";
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setAuthData, setFetching} from "../../redux/reducers/auth-reducer";
import {authAPI} from "../../API/api";

class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.setFetching(true)
     authAPI.getAuth()
         .then(data => {
         this.props.setFetching(false)
         if (data.resultCode === 0) {
             const authData = data.data
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


