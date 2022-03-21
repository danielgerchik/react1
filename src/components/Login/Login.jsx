import LoginForm from "../Forms/LoginForm";
import {connect} from "react-redux";
import {login} from "../../redux/reducers/auth-reducer";
import {Redirect} from "react-router-dom";
import React from "react";



const Login = props => {
    const onSubmit = formData => {
        props.login(formData.name, formData.password, formData.remember)
    }
    if (props.isAuth) return <Redirect to='/profile'/>
    return (
        <>
            <h1 style={{fontSize: '40px', fontWeight: '700'}}>Login</h1>
            <LoginForm onSubmit={onSubmit}/>
        </>


    )
}

const mapStateToProps = state => {
    return {
        isAuth: state.auth.isAuth
    }
}
export default connect(mapStateToProps, {login})(Login)