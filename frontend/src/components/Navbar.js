import React from "react";
import '../styles/navbar.css';
import NavigationLink from "./NavigationLink";
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
                    {!isTabletOrMobile && <ul className="flex flex-row-reverse w-full h-full justify-evenly items-center list-none">
                        {user ? (
                            <>
                                <li><button onClick={logoutUser} className="2xl:w-24 2xl:h-10 xl:w-20 xl:h-8 lg:w-18 lg:h-6 2xl:p-2 lg:p-1 2xl:text-xl xl:text-base lg:text-xs flex justify-center items-center font-medium tracking-wide text-white bg-violet-700 rounded-none ring-offset-2 ring-offset-slate-50 outline-none no-underline cursor-pointer transition delay-100 ease-out hover:bg-white hover:text-violet-700 hover:ring hover:ring-violet-700 duration-300">
                                    Logout
                                </button></li>
                                <li><div className="navbar__user">
                                    <UserCircleIcon className="2xl:w-12 2xl:h-12 xl:w-10 xl:h-10 lg:w-8 lg:h-8 text-violet-700" />
                                </div></li>
                                <li><NavigationLink Name={"Workout"} Hyperlink={"/workout"} /></li>
                                <li><NavigationLink Name={"History"} Hyperlink={"/history"} /></li>
                                <li><NavigationLink Name={"Protected page"} Hyperlink={"/protected"} /></li>
                                <li><NavigationLink Name={"Home"} Hyperlink={"/"} /></li>
                            </>
                        ) : (
                            <>
                                <li><NavigationLink Name={"Login"} Hyperlink={"/login"} /></li>
                                <li><NavigationLink Name={"Register"} Hyperlink={"/register"} /></li>
                            </>
                        )}
                    </ul>}
                </div>
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
                                    <li><Link Name={"Workout"} Hyperlink={"/workout"} /></li>
                                    <li><Link Name={"History"} Hyperlink={"/history"} /></li>
                                    <li><Link Name={"Protected page"} Hyperlink={"/protected"} /></li>
                                    <li><Link Name={"Home"} Hyperlink={"/"} /></li>
                                    <li><div className="navbar__user">
                                        <UserCircleIcon className="2xl:w-12 2xl:h-12 xl:w-10 xl:h-10 lg:w-8 lg:h-8 text-violet-700" />
                                    </div></li>
                                    <li><button onClick={logoutUser} className="2xl:w-24 2xl:h-10 xl:w-20 xl:h-8 lg:w-18 lg:h-6 2xl:p-2 lg:p-1 2xl:text-xl xl:text-base lg:text-xs flex justify-center items-center font-medium tracking-wide text-white bg-violet-700 rounded-none ring-offset-2 ring-offset-slate-50 outline-none no-underline cursor-pointer transition delay-100 ease-out hover:bg-white hover:text-violet-700 hover:ring hover:ring-violet-700 duration-300">
                                        Logout
                                    </button></li>
                                </>
                            ) : (
                                <>
                                    <li><Link Name={"Login"} Hyperlink={"/login"} /></li>
                                    <li><Link Name={"Register"} Hyperlink={"/register"} /></li>
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
