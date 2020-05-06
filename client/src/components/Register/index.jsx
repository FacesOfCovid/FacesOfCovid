import React, { useState } from 'react';


//STYLESHEET
import './register.css';

//COMPONENTS
import TitleLogo from '../TitleLogo';

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
            //=============add code here to register user=================
            resetForm();
            props.history.push('./login');
        } else {
            alert("Passwords do not match")
            resetForm();
        }

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

                        <h3 className="mb-3">Register</h3>

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



                        <div className="row mb-2">
                            <label htmlFor="password2">Confirm Password</label>
                            <input type="password"
                                name="password2"
                                onChange={onChange} />
                        </div>

                        <button className="registerButton" type="submit">Register</button>

                    </form>
                </div>
            </div>

        </div >
    )
}

export default Register
