import React, { useState } from 'react';
import { Link } from 'react-router-dom';

//STYLESHEET
import './register.css';

//COMPONENTS
import TitleLogo from '../TitleLogo';

const Register = (props) => {
    const [user, setUser] = useState({ username: "", password: "", password2: "" });


    //sets user name, password and password2  
    const onChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
    }
    //clears form
    const resetForm = (props) => {
        setUser({ username: "", password: "", role: "" })
    }
    //registers user 
    const onSubmit = e => {
        e.preventDefault();
        //verify password inputs match 
        if (user.password2 === user.password) {
            //code to register user
            resetForm();
            props.history.push('./login');
        } else {
            alert("Passwords do not match")
            resetForm();
        }

    }


    return (
        <div>

            <TitleLogo />

            <form onSubmit={onSubmit}>
                <h3>Register</h3>

                <div className="inputDiv">
                    <label htmlFor="username">E-mail</label>
                    <input type="text"
                        name="username"
                        onChange={onChange}
                        placeholder="example@email.com" />
                </div>

                <div className="inputDiv">
                    <label htmlFor="password">Password</label>
                    <input type="password"
                        name="password"
                        onChange={onChange} />
                </div>

                <div className="inputDiv">
                    <label htmlFor="password2">Confirm Password</label>
                    <input type="password"
                        name="password2"
                        onChange={onChange} />
                </div>

                <button className="registerButton" type="submit">Register</button>
            </form>

        </div >
    )
}

export default Register
