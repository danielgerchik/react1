import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";


const mapStateToProps = state => {
    return {
        authData: state.auth.authData
    }
}

export const WithRedirect = Component => {

    class RedirectContainer extends React.Component {
        render() {
            if (!this.props.authData) return <Redirect to='/login'/>

            return <Component {...this.props}/>
        }
    }

    return connect(mapStateToProps)(RedirectContainer)
}