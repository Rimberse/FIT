import { Route, Redirect } from "react-router-dom";
import { useContext } from "react";
import AuthenticationContext from "../services/AuthenticationContext";

const PrivateRoute = ({ children, ...rest }) => {
    let { user } = useContext(AuthenticationContext);

    return <Route {...rest}>{!user ? <Redirect to='/login' /> : children}</Route>
}

export default PrivateRoute;
