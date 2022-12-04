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
        <section className="flex flex-row w-2/5 h-screen justify-center items-center mx-auto my-auto">
            <form onSubmit={handleSubmit} className="w-full">
                <h1 className="text-3xl font-semibold text-violet-700">Login</h1>
                <hr className="my-2 mb-4" />
                <label htmlFor="username" className="block text-base font-medium text-slate-700 mb-1">Username</label>
                <input type="text" id="username" placeholder="Enter Username" 
                className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-violet-700 focus:ring-violet-700 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none mb-4"></input>
                <label htmlFor="password" className="block text-base font-medium text-slate-700 mb-1">Password</label>
                <input type="password" id="password" placeholder="Enter Password" 
                className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-violet-700 focus:ring-violet-700 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none mb-4"></input>
                <hr className="my-2 mt-4" />
                <button type="submit" className="text-lg font-medium tracking-wide px-7 py-2 rounded-md bg-violet-700 text-white hover:bg-indigo-700 duration-500">Login</button>
            </form>
        </section>
    );
}

export default Login;
