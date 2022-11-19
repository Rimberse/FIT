import React from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from './utils/PrivateRoute';
import { AuthenticationProvider } from './services/AuthenticationContext';
import Landing from './components/Landing';


function App() {
  return (
    <div className="App">
      <Landing />
    </div>
  );
}

export default App;
