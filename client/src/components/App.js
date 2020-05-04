import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

// COMPONENTS
import Login from './Login';
import Register from './Register';


function App() {

  return (
    <Router>

      <div>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </div>

    </Router>
  );
}

export default App;