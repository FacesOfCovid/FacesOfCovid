import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

// COMPONENTS
import Login from './Login';
import Register from './Register';
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";


function App() {

  return (
    <Router>

      <Navbar />

      <div className="container-fluid">

        {/* Public Routes */}
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />

      </div>

      <Footer />

    </Router >



  );
}

export default App;