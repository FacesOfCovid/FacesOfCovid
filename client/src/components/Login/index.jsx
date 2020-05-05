import React, { useState } from 'react';
import { Link } from 'react-router-dom';

//COMPONENTS
import TitleLogo from '../TitleLogo';

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

            {/* logo row */}
            <div className="row mb-5">
                <div className="col-sm-6 offset-3">
                    <TitleLogo />
                </div>
            </div>

            {/* form row */}
            <div className="row">
                <div className="col-sm-8 offset-2">

                    <form onSubmit={onSubmit}>
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
