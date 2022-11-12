import React from "react";
import '../styles/navbar.css';
import Link from "./Link";
import { UserCircleIcon, Bars3Icon } from '@heroicons/react/24/solid';
import { useMediaQuery } from 'react-responsive';

const Navbar = () => {
    // Responsive hooks (used to display hamburger menu on lower resolution displays)
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' })

    return (
        <nav id="navbar" className="mb-8 border-2 border-b-violet-700">
            <div className="flex flex-row w-3/4 h-32 mx-auto">
                <div className="basis-1/2 justify-around items-center shrink-0"></div>
                <div className="basis-1/2 justify-around items-center shrink-0">
                    {!isTabletOrMobile && <ul className="flex flex-row-reverse w-full h-full justify-evenly items-center list-none">
                        <li><div className="navbar__user">
                            <UserCircleIcon className="2xl:w-12 2xl:h-12 xl:w-10 xl:h-10 lg:w-8 lg:h-8 text-violet-700" />
                        </div></li>
                        <li><Link Name={"Workout"} Hyperlink={"workout"} /></li>
                        <li><Link Name={"History"} Hyperlink={"history"} /></li>
                        <li><Link Name={"Sign up"} Hyperlink={"sign-up"} /></li>
                        <li><Link Name={"Sign in"} Hyperlink={"sign-in"} /></li>
                        <li><Link Name={"Home"} Hyperlink={"home"} /></li>
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
                            <li><a href="home">Home</a></li>
                            <li><a href="sing-in">Sign in</a></li>
                            <li><a href="sign-up">Sign up</a></li>
                            <li><a href="history">History</a></li>
                            <li><a href="workout">Workout</a></li>
                            <li className="small"><a href="https://facebook.com" target="_blank">Facebook</a><a href="https://instagram.com" target="_blank">Instagram</a></li>
                        </ul>
                    </div>
                </div>}
            </div>
        </nav>
    )
}

export default Navbar;
