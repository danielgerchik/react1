import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";


const mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth
    }
}

export const WithRedirect = Component => {

    class RedirectContainer extends React.Component {
        render() {
            if (!this.props.isAuth) return <Redirect to='/login'/>

            return <Component {...this.props}/>
        }
    }

    return connect(mapStateToProps)(RedirectContainer)
}