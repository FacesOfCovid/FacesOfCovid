import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../config/freabaseAuth';

//COMPONENTS
import PageHeader from '../../components/headers/PageHeader';
import SubmitButton from '../../components/buttons/SubmitButton';

// STYLESHEETS
import './login.css';

const Login = () => {

    const [user, setUser] = useState({ username: '', password: '' });

    /**
     * Get the Auth instance from context
     */

    const auth = useAuth();

    //sets user name and password  
    const onChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
        console.log(user);
    }

    // send username and password to be verified
    const onSubmit = e => {
        e.preventDefault();
    //TODO do some validation for username and password before making call. Catch error to show on the screen.
        auth.signIn(user.username, user.password);
    }

    return (
        <div>
            <PageHeader title="Log In"></PageHeader>
            <form onSubmit={onSubmit} className="loginForm">
                <div className="form-section">
                    <label htmlFor="username">E-Mail</label>
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
