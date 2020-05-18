import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../config/freabaseAuth';

//COMPONENTS
import TitleLogo from '../TitleLogo';

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
        <div className="container loginWrapper">

            {/* form row */}
            <div className="row">
                <div className="col-sm-8 offset-2">

                    <form onSubmit={onSubmit} className="loginForm">
                        <h3 className="mb-3">Log In</h3>

                        <div className="row mb-2">
                            <label htmlFor="username">E-mail</label>
                            <input type="text"
                                name="username"
                                onChange={onChange}
                                placeholder="example@email.com" />
                        </div>
                        <div className="row mb-2">
                            <label htmlFor="password">Password</label>
                            <input type="password"
                                name="password"
                                onChange={onChange} />
                        </div>
                        <button className="loginButton" type="submit">Log in</button>
                        <p>Forgot Password?</p>
                        <p>Don't have an account? <Link to="/Register">Register</Link></p>
                    </form>
                </div>
            </div>

        </div >
    )
}

export default Login;
