import React, { createContext, useState, useEffect } from "react";
import jwt_decode from "jwt-decode";
import { useNavigate } from "react-router-dom";

const AuthenticationContext = createContext();

export default AuthenticationContext;

// Contains functions to login, logout and register user, uses localstorage to keep the informations about user's state
export const AuthenticationProvider = ({ children }) => {
    const [authenticationTokens, setAuthenticationTokens] = useState(() => localStorage.getItem('authenticationTokens') ? JSON.parse(localStorage.getItem('authenticationTokens')) : null);
    const [user, setUser] = useState(() => localStorage.getItem('authenticationTokens') ? jwt_decode(localStorage.getItem('authenticationTokens')) : null);
    const [loading, setLoading] = useState(true);

    const navigate = useNavigate();
    const baseUrl = 'http://localhost:8000/authentication/';

    const loginUser = async (username, password) => {
        const response = await fetch(baseUrl + 'login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                password
            })
        });

        const data = await response.json();

        if (response.status === 200) {
            setAuthenticationTokens(data);
            setUser(jwt_decode(data.access));
            localStorage.setItem('authenticationTokens', JSON.stringify(data));
            navigate('/');
        } else {
            alert('Something went wrong!');
        }
    }

    const registerUser = async (username, email, firstName, lastName, phoneNumber, password, password2) => {
        const response = await fetch(baseUrl + 'register/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username,
                email,
                firstName,
                lastName,
                phoneNumber,
                password,
                password2
            })
        });

        if (response.status === 201) {
            navigate('/login');
        } else {
            alert('Something went wrong!');
        }
    }

    const logoutUser = () => {
        setAuthenticationTokens(null);
        setUser(null);
        localStorage.removeItem('authenticationTokens');
        navigate('/');
    }

    const contextData = {
        user,
        setUser,
        authenticationTokens,
        setAuthenticationTokens,
        registerUser,
        loginUser,
        logoutUser
    }

    useEffect(() => {
        if (authenticationTokens) {
            setUser(jwt_decode(authenticationTokens.access));
        }

        setLoading(false);
    }, [authenticationTokens, loading]);

    // Wrap the entire app inside AuthProvider, make the code accessible everywhere in src
    return(
        <AuthenticationContext.Provider value={contextData}>
            {loading ? null : children}
        </AuthenticationContext.Provider>
    );
}
