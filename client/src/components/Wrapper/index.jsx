import React from "react";
import { Route } from 'react-router-dom';

//COMPONENTS
import Login from '../../pages/Login';
import Register from '../../pages/Register';

// STYLESHEETS
import "./wrapper.css";

const Wrapper = () => {
    return (
        <div className="wrapper">
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
        </div>
    );
};

export default Wrapper;