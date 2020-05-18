import React, { useState } from 'react';
import { useAuth } from '../../config/freabaseAuth';


//STYLESHEET
import './register.css';

//COMPONENTS
import TitleLogo from '../TitleLogo';

const Register = (props) => {
    const [user, setUser] = useState({ username: "", password: "", password2: "" });

  /**
   * Get the Auth instance from context
   */

  const auth = useAuth();


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
            //TODO do some validation for username and password before making call. Catch error to show on the screen.
            auth.signUp(user.username, user.password);
            resetForm();
            props.history.push('./login');
        } else {
            alert("Passwords do not match")
            resetForm();
        }

    }


    return (
        <div className="container registerWrapper">

            {/* form row */}
            <div className="row">
                <div className="col-sm-8 offset-2">

                    <form onSubmit={onSubmit} className="registerForm">

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
