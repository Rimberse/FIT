import React from 'react';
import './styles/App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
          <Routes>
            <Route element={<PrivateRoute />} path="/protected" >
              <Route path='/protected/test' element={<Protected />} />
            </Route>
            <Route element={<Login />} path="/login" />
            <Route element={<Register />} path="/register" />
            <Route element={<Landing />} path="/" />
          </Routes>
        </AuthenticationProvider>
      </Router>
    </div>
  );
}

export default App;
