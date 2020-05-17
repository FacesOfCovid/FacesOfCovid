import React from "react";
import { Route, Switch } from 'react-router-dom';

//COMPONENTS
import Login from '../../pages/Login';
import Register from '../../pages/Register';
import About from '../../pages/About';
import Memorial from '../../pages/Entry'
import Profile from '../../pages/Profile';
//=============== Component imports commented out below are for future components. Uncomment when component is complete============
// import Home from '../Home';
// import NoMatch from '../404';

// STYLESHEETS
import "./wrapper.css";

const Wrapper = () => {
    return (
        <div className="wrapper">
            <Switch>

                {/* =============== Routes commented out below are for future components. Uncomment when component is complete. ===============  */}

                {/* <Route path="/" component={Home} /> */}
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/profile" component={Profile} />
                <Route path="/about" component={About}/>
                <Route path="/memorial/:id" component={Memorial}/>
                {/* <Route component={NoMatch}/> */}

            </Switch>
        </div>
    );
};

export default Wrapper;