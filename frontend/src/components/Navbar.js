import React from "react";
import '../styles/navbar.css';
import Button from "./Button";
import { UserCircleIcon } from '@heroicons/react/24/solid';
import { useMediaQuery } from 'react-responsive';

const Navbar = () => {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' })
    
    return (
        <div id="navbar" className="mb-8 border-2 border-b-indigo-700">
            {!isTabletOrMobile && <div className="flex flex-row w-3/4 h-32 mx-auto">
                <div className="basis-1/2 justify-around items-center shrink-0"></div>
                <div className="basis-1/2 justify-around items-center shrink-0">
                    <div className="flex flex-row-reverse w-full h-full justify-evenly items-center">
                        <div className="navbar__user">
                            <UserCircleIcon className="2xl:w-12 2xl:h-12 xl:w-10 xl:h-10 lg:w-8 lg:h-8 text-indigo-700"/>
                        </div>
                        <Button Name={"Workout"} />
                        <Button Name={"History"} />
                        <Button Name={"Sign up"} />
                        <Button Name={"Sign in"} />
                        <Button Name={"Home"} />
                    </div>
                </div>
            </div>}
        </div>
    )
}

export default Navbar;
