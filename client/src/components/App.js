import React from 'react';
import { BrowserRouter } from "react-router-dom";

// COMPONENTS
import Login from './Login';
import Register from './Register';
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import Wrapper from "./Wrapper/Wrapper";


function App() {

  return (
    <BrowserRouter>
      <Navbar />

      <Wrapper />

      <Footer />
    </BrowserRouter >

  )
}

export default App;