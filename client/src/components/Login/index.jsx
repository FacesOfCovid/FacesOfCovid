import React, { useState } from 'react';
import { Link } from 'react-router-dom';

//COMPONENTS
import PageHeader from '../PageHeader';
import SubmitButton from '../SubmitButton';

// STYLESHEETS
import './login.css';

const Login = () => {

    const [user, setUser] = useState({ username: '', password: '' });

    //sets user name and password  
    const onChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
        console.log(user);
    }

    // send username and password to be verified
    const onSubmit = e => {
        e.preventDefault();
        //==================add code to verify here================
    }

    return (
        <div>
            <PageHeader title="Log In"></PageHeader>
            <form onSubmit={onSubmit} className="loginForm">
                <div className="form-section">
                    <label htmlFor="username">E-mail</label>
                    <input 
                        type="text"
                        name="username"
                        onChange={onChange}
                        placeholder="example@email.com" />
                    <div className="validation-message"></div>
                </div>
                <div className="form-section">
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password"
                        name="password"
                        onChange={onChange} />
                    <div className="validation-message"></div>
                </div>
                <SubmitButton label="Log In"></SubmitButton>
                <div className="forgot-pw">
                    <p>Forgot Password?</p>
                    <p>Don't have an account? <Link className="redirect" to="/Register">Register</Link></p>
                </div>
            </form>
        </div>
    )
}

export default Login;
