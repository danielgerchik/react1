import LoginForm from "../Forms/LoginForm";


const Login = props => {
    const onSubmit = formData => {
        console.log(formData);
    }
    return (
        <>
            <h1 style={{fontSize: '40px', fontWeight: '700'}}>Login</h1>
            <LoginForm onSubmit={onSubmit}/>
        </>


    )
}
export default Login