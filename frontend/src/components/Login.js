import React, { useContext } from "react";
import AuthenticationContext from "../services/AuthenticationContext";

const Login = () => {
    const { loginUser } = useContext(AuthenticationContext);

    const handleSubmit = e => {
        e.preventDefault();

        const username = e.target.username.value;
        const password = e.target.password.value;
        username.length > 0 && loginUser(username, password);
    }

    return(
        <section>
            <form onSubmit={handleSubmit}>
                <h1>Login</h1>
                <hr />
                <label htmlFor="username">Username</label>
                <input type="text" id="username" placeholder="Enter Username"></input>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" placeholder="Enter Password"></input>
                <button type="submit">Login</button>
            </form>
        </section>
    );
}

export default Login;
