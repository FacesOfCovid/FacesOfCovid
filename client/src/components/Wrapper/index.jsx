import React from "react";
import { Route } from 'react-router-dom';

//COMPONENTS
import Login from '../Login';
import Register from '../Register';
import About from '../pages/About';
import Entry from '../pages/Entry'
// STYLESHEETS
import "./wrapper.css";

const Wrapper = () => {
  return (
    <div className="wrapper">
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />

      <Route path="/about" component={About} />
      <Route path="/entry" component={Entry} />
    </div>
  );
};

export default Wrapper;