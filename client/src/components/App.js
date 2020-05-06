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

      <div>
        <Navbar />
        {/* Public Routes */}
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Footer />

      </div>
    </Router>



  );
}

export default App;