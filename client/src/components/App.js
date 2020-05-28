import React from 'react';
import FirebaseContext from "../config/firebaseContext";
import Firebase from "../config/firebase";
import { AuthProvider } from "../config/freabaseAuth";

// COMPONENTS
import Navbar from "./Navbar";
import Footer from "./Footer";
import Router from "./Router";

function App() {

  return (
    <FirebaseContext.Provider value={Firebase}>
      <AuthProvider>
        <Navbar />
        <Router />
        <Footer />
      </AuthProvider>
    </FirebaseContext.Provider>
  )
}

export default App;