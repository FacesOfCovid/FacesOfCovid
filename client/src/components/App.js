import React from 'react';
import { BrowserRouter } from "react-router-dom";
import FirebaseContext from "../config/firebaseContext";
import Firebase from "../config/firebase";
import { AuthProvider } from "../config/freabaseAuth";

// COMPONENTS
import Navbar from "./Navbar";
import Footer from "./Footer";
import Wrapper from "./Wrapper";


function App() {

  return (
    <FirebaseContext.Provider value = {Firebase}>
    <AuthProvider>
    <BrowserRouter>
      <Navbar />
      <Wrapper />
      <Footer />
    </BrowserRouter>
    </AuthProvider>
    </FirebaseContext.Provider>
    
  )
}

export default App;