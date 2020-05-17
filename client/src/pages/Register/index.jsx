import React, { useState } from 'react';
import { Link } from 'react-router-dom';

//COMPONENTS
import PageHeader from '../../components/headers/PageHeader';
import SubmitButton from '../../components/buttons/SubmitButton';

//STYLESHEET
import './register.css';

//COMPONENTS
import TitleLogo from '../../components/TitleLogo';

const Register = (props) => {
    const [user, setUser] = useState({ username: "", password: "", password2: "" });


    //sets user name, password and password2   
    const onChange = e => {
        setUser({ ...user, [e.target.name]: e.target.value });
        console.log(user)
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
            //============================================================
            //=============add code here to register user=================
            //============================================================
            resetForm();
            props.history.push('./login');
        } else {
            alert("Passwords do not match")
            resetForm();
        }

    }

    return (
        <div>
            <PageHeader title="Register"></PageHeader>
            <form onSubmit={onSubmit}>
                <div className="form-section">
                    <label htmlFor="name">Name</label>
                    <input 
                        type="text"
                        name="name"
                        onChange={onChange}
                        placeholder="Your Name" />
                    <div className="validation-message"></div>
                </div>
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
                <div className="form-section">
                    <label htmlFor="password2">Confirm Password</label>
                    <input 
                        type="password"
                        name="password2"
                        onChange={onChange} />
                </div>
                <SubmitButton label="Register"></SubmitButton>
                <div className="forgot-pw">
                    <p>Don't have an account? <Link className="redirect" to="/Register">Log In</Link></p>
                </div>
            </form>
        </div>
    );
};

export default Register;