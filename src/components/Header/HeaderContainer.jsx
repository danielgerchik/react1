import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getAuth, setAuthData, setFetching} from "../../redux/reducers/auth-reducer";

class HeaderContainer extends React.Component {

    componentDidMount() {
       this.props.getAuth()
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
export default connect(mapStateToProps, {setAuthData ,setFetching, getAuth})(HeaderContainer)


