import React, { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import AuthenticationContext from "../services/AuthenticationContext";

const PrivateRoute = () => {
    let { user } = useContext(AuthenticationContext);

    return user ? <Outlet /> : <Navigate to='/login' />;
}

export default PrivateRoute;
