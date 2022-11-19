import React from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from './utils/PrivateRoute';
import { AuthenticationProvider } from './services/AuthenticationContext';
import Landing from './components/Landing';
import Login from './components/Login';
import Register from './components/Register';
import Protected from './components/Protected';


function App() {
  return (
    <div className="App">
      <Router>
        <AuthenticationProvider>
          <Landing />
          <Switch>
            <PrivateRoute component={Protected} path="/protected" exact />
            <Route component={Login} path="/login" />
            <Route component={Register} path="/register" />
            <Route component={Landing} path="/" />
          </Switch>
        </AuthenticationProvider>
      </Router>
    </div>
  );
}

export default App;
