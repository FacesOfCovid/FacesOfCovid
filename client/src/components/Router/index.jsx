import React from "react";
import { BrowserRouter, Route, Switch, useParams } from 'react-router-dom';

//COMPONENTS
import Login from '../../pages/Login';
import Register from '../../pages/Register';
import About from '../../pages/About';
import AddMemorial from '../../pages/AddMemorial';
import Memorial from '../../pages/Memorial';
import Feed from '../../pages/Feed';
//=============== Component imports commented out below are for future components. Uncomment when component is complete============
// import Home from '../Home';
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
                    <Route exact path="/login">
                        <Login />
                    </Route>

                    <Route exact path="/register">
                        <Register />
                    </Route>

                    <Route exact path="/profile">
                        <Profile />
                    </Route>

                    <Route exact path="/about" >
                        <About />
                    </Route>

                    <Route exact path="/feed">
                        <Feed />
                    </Route>

                    <Route exact path="/memorial/:id" children={<Memorial />}>

                    </Route>

                    <Route exact path="/memorial/test">
                        <Memorial />
                    </Route>

                    <Route exact path="/create">
                        <AddMemorial />
                    </Route>

                    {/* <Route component={NoMatch}/> */}

                </Switch>
            </BrowserRouter>
        </div >
    );
};

export default Router;