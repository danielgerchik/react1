import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getAuth, logout, setAuthData, setFetching} from "../../redux/reducers/auth-reducer";

class HeaderContainer extends React.Component {

    componentDidMount() {
       this.props.getAuth()
    }

    render() {
        return <Header isAuth={this.props.isAuth} logout={this.props.logout}/>
    }
}

const mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth
    }
}
export default connect(mapStateToProps, {setAuthData ,setFetching, getAuth, logout})(HeaderContainer)


