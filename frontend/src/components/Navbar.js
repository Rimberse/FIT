import React, { useState } from "react";
import '../styles/navbar.css';
import Button from "./Button";
import { UserCircleIcon, Bars3Icon } from '@heroicons/react/24/solid';
import { useMediaQuery } from 'react-responsive';

const Navbar = () => {
    // const [menuVisibility, setMenuVisibility] = useState(false);

    // Responsive hooks (used to display hamburger menu on lower resolution displays)
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' })

    return (
        <nav id="navbar" className="mb-8 border-2 border-b-indigo-700">
            <div className="flex flex-row w-3/4 h-32 mx-auto">
                <div className="basis-1/2 justify-around items-center shrink-0"></div>
                <div className="basis-1/2 justify-around items-center shrink-0">
                    {!isTabletOrMobile && <div className="flex flex-row-reverse w-full h-full justify-evenly items-center">
                        <div className="navbar__user">
                            <UserCircleIcon className="2xl:w-12 2xl:h-12 xl:w-10 xl:h-10 lg:w-8 lg:h-8 text-indigo-700" />
                        </div>
                        <Button Name={"Workout"} />
                        <Button Name={"History"} />
                        <Button Name={"Sign up"} />
                        <Button Name={"Sign in"} />
                        <Button Name={"Home"} />
                    </div>}
                    {/* {isTabletOrMobile && <div className="flex flex-row w-full h-full justify-end items-center">
                        <button onClick={() => setMenuVisibility(!menuVisibility)}>
                            <Bars3Icon className="w-16 h-16 text-indigo-700" />
                        </button>
                    </div>} */}
                </div>
                {isTabletOrMobile && <div id="nav-container">
                    <div className="button" tabIndex="0">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </div>
                    <div id="nav-content" tabIndex="0">
                        <ul>
                            <li><a href="#0">Home</a></li>
                            <li><a href="#0">Sign in</a></li>
                            <li><a href="#0">Sign up</a></li>
                            <li><a href="#0">History</a></li>
                            <li><a href="#0">Workout</a></li>
                            <li className="small"><a href="#0">Facebook</a><a href="#0">Instagram</a></li>
                        </ul>
                    </div>
                </div>}
            </div>
        </nav>
    )
}

export default Navbar;
