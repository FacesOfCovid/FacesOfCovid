import React from 'react';
import { BrowserRouter } from "react-router-dom";

// COMPONENTS
import Navbar from "./Navbar";
import Footer from "./Footer";
import Wrapper from "./Wrapper";

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