import { ChatBubbleOvalLeftEllipsisIcon } from "@heroicons/react/24/solid";
import React, { useState, useContext } from "react";
import AuthenticationContext from "../services/AuthenticationContext";

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const { registerUser } = useContext(AuthenticationContext);

    const handleSubmit = async e => {
        e.preventDefault();

        // Retrieve values from input fields, replace all occurrences of '-' with empty spaces and call the function to register the user
        registerUser(username, email, firstName, lastName, phoneNumber.replaceAll('\-', ''), password, password2);
    }

    return (
        <section className="flex flex-row w-2/5 h-screen justify-center items-center mx-auto my-auto">
            <form onSubmit={handleSubmit} className="w-full">
                <h1 className="lg:text-3xl text-xl font-semibold text-violet-700">Register</h1>
                <hr className="my-2 mb-4" />
                <div>
                    <label htmlFor="username" className="block lg:text-base text-xs font-medium text-slate-700 mb-1">Username</label>
                    <input type="text" id="username" onChange={e => setUsername(e.target.value)} placeholder="Enter username" required 
                    className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-violet-700 focus:ring-violet-700 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none mb-4"></input>
                </div>
                <div>
                    <label htmlFor="email" className="block lg:text-base text-xs font-medium text-slate-700 mb-1">Email</label>
                    <input type="email" id="email" onChange={e => setEmail(e.target.value)} placeholder="Enter email" required 
                    className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-violet-700 focus:ring-violet-700 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none mb-4"></input>
                </div>
                <div>
                    <label htmlFor="firstName" className="block lg:text-base text-xs font-medium text-slate-700 mb-1">First name</label>
                    <input type="text" id="firstName" onChange={e => setFirstName(e.target.value)} placeholder="Enter first name" required 
                    className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-violet-700 focus:ring-violet-700 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none mb-4"></input>
                </div>
                <div>
                    <label htmlFor="lastName" className="block lg:text-base text-xs font-medium text-slate-700 mb-1">Last name</label>
                    <input type="text" id="lastName" onChange={e => setLastName(e.target.value)} placeholder="Enter last name" required 
                    className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-violet-700 focus:ring-violet-700 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none mb-4"></input>
                </div>
                <div>
                    <label htmlFor="phoneNumber" className="block lg:text-base text-xs font-medium text-slate-700 mb-1">Phone number</label>
                    <input type="tel" pattern="[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}-[0-9]{2}" id="phoneNumber" onChange={e => setPhoneNumber(e.target.value)} placeholder="Enter phone number" required 
                    className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-violet-700 focus:ring-violet-700 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none mb-4"></input>
                </div>
                <div>
                    <label htmlFor="password" className="block lg:text-base text-xs font-medium text-slate-700 mb-1">Password</label>
                    <input type="password" id="password" onChange={e => setPassword(e.target.value)} placeholder="Enter password" required 
                    className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-violet-700 focus:ring-violet-700 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none mb-4"></input>
                </div>
                <div>
                    <label htmlFor="confirm-password" className="block lg:text-base text-xs font-medium text-slate-700 mb-1">Confirm Password</label>
                    <input type="password" id="confirm-password" onChange={e => setPassword2(e.target.value)} placeholder="Confirm your password" required 
                    className="px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 focus:outline-none focus:border-violet-700 focus:ring-violet-700 block w-full rounded-md sm:text-sm focus:ring-1 invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500 disabled:shadow-none mb-4"></input>
                    <p className="block text-base font-medium text-slate-700 mb-1">{password2 !== password ? 'Passwords do not match' : ''}</p>
                </div>
                <hr className="my-2 mb-4" />
                <button className="lg:text-lg text-sm font-medium tracking-wide px-7 py-2 rounded-md bg-violet-700 text-white hover:bg-indigo-700 duration-500">Register</button>
            </form>
        </section>
    );
}

export default Register;
