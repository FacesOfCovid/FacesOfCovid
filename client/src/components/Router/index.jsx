import React from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//COMPONENTS
import Login from '../../pages/Login';
import Register from '../../pages/Register';
import About from '../../pages/About';
import AddMemorial from '../../pages/AddMemorial'
//=============== Component imports commented out below are for future components. Uncomment when component is complete============
// import Home from '../Home';
import Memorial from '../../pages/Memorial'
import Profile from '../../pages/Profile';
// import NoMatch from '../404';

// STYLESHEETS
import "./router.css";

const Router = () => {
    return (
        <div className="wrapper">
            <BrowserRouter>
                <Switch>

                    {/* =============== Routes commented out below are for future components. Uncomment when component is complete. ===============  */}

                    {/* <Route path="/" component={Home} /> */}
                    <Route path="/login">
                        <Login />
                    </Route>

                    <Route path="/register">
                        <Register />
                    </Route>

                    <Route path="/profile">
                        <Profile />
                    </Route>

                    <Route path="/about" >
                        <About />
                    </Route>

                    {/* <Route path="/memorial/:id"> */}
                    <Route path="/memorial">
                        <Memorial />
                    </Route>

                    <Route path="/memorial/create">
                        <AddMemorial />
                    </Route>

                    {/* <Route component={NoMatch}/> */}

                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default Router;