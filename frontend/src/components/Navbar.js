import React from "react";
import '../styles/navbar.css';
import NavigationLink from "./NavigationLink";
import { Link } from "react-router-dom";
import { UserCircleIcon } from '@heroicons/react/24/solid';
import { useMediaQuery } from 'react-responsive';
import { useContext } from "react";
import AuthenticationContext from "../services/AuthenticationContext";

const Navbar = () => {
    const { user, logoutUser } = useContext(AuthenticationContext);
    // Responsive hooks (used to display hamburger menu on lower resolution displays)
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' })

    return (
        <nav id="navbar" className="mb-8 border-2 border-b-violet-700">
            <div className="flex flex-row w-3/4 h-32 mx-auto">
                <div className="basis-1/2 justify-around items-center shrink-0"></div>
                <div className="basis-1/2 justify-around items-center shrink-0">
                    {/* Desktop version of Navbar */}
                    {!isTabletOrMobile && <ul className="flex flex-row-reverse w-full h-full justify-evenly items-center list-none">
                        {user ? (
                            <>
                                <li><button onClick={logoutUser} className="2xl:w-24 2xl:h-10 xl:w-20 xl:h-8 lg:w-18 lg:h-6 2xl:p-2 lg:p-1 2xl:text-xl xl:text-base lg:text-xs flex justify-center items-center font-medium tracking-wide text-white bg-violet-700 rounded-none ring-offset-2 ring-offset-slate-50 outline-none no-underline cursor-pointer transition delay-100 ease-out hover:bg-white hover:text-violet-700 hover:ring hover:ring-violet-700 duration-300">
                                    Logout
                                </button></li>
                                <li><div className="2xl:text-3xl xl:text-2xl 2xl:font-bold xl:font-semibold text-violet-700">
                                    {user.username}
                                </div></li>
                                <li><NavigationLink Name={"Workout"} Hyperlink={"/protected/workout"} /></li>
                                <li><NavigationLink Name={"History"} Hyperlink={"/history"} /></li>
                                <li><NavigationLink Name={"Home"} Hyperlink={"/"} /></li>
                            </>
                        ) : (
                            <>
                                <li><div className="navbar__user">
                                    <UserCircleIcon className="2xl:w-12 2xl:h-12 xl:w-10 xl:h-10 lg:w-8 lg:h-8 text-violet-700" />
                                </div></li>
                                <li><NavigationLink Name={"Login"} Hyperlink={"/login"} /></li>
                                <li><NavigationLink Name={"Register"} Hyperlink={"/register"} /></li>
                            </>
                        )}
                    </ul>}
                </div>
                {/* Mobile version of Navbar (Hamburger Menu) */}
                {isTabletOrMobile && <div id="nav-container">
                    <div className="button" tabIndex="0">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </div>
                    <div id="nav-content" tabIndex="0">
                        <ul>
                            {user ? (
                                <>
                                    <li><div className="2xl:text-3xl xl:text-2xl 2xl:font-bold xl:font-semibold">
                                        {user.username}
                                    </div></li>
                                    <li><Link to={"/protected/workout"}>Workout</Link></li>
                                    <li><Link to={"/history"}>History</Link></li>
                                    <li><Link to={"/"}>Home</Link></li>
                                    <li><button onClick={logoutUser} className="2xl:w-24 2xl:h-10 xl:w-20 xl:h-8 lg:w-18 lg:h-6 2xl:p-2 lg:p-1 2xl:text-xl xl:text-base lg:text-xs flex justify-center items-center font-medium tracking-wide text-white bg-violet-700 rounded-none ring-offset-2 ring-offset-slate-50 outline-none no-underline cursor-pointer transition delay-100 ease-out hover:bg-white hover:text-violet-700 hover:ring hover:ring-violet-700 duration-300">
                                        Logout
                                    </button></li>
                                </>
                            ) : (
                                <>
                                    <li><div className="w-10 h-10">
                                        <UserCircleIcon />
                                    </div></li>
                                    <li><Link to={"/login"}>Login</Link></li>
                                    <li><Link to={"/register"}>Register</Link></li>
                                </>
                            )}
                            <li className="small"><a href="https://facebook.com" target="_blank">Facebook</a><a href="https://instagram.com" target="_blank">Instagram</a></li>
                        </ul>
                    </div>
                </div>}
            </div>
        </nav>
    )
}

export default Navbar;
