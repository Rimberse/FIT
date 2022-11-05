import React from "react";
import '../styles/navbar.css';
import Button from "./Button";
import { UserCircleIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
    
    return (
        <div id="navbar">
            <div className="flex flex-row w-3/4 h-32 mx-auto my-8">
                <div className="basis-1/2 justify-around items-center"></div>
                <div className="basis-1/2 justify-around items-center">
                    <div className="flex flex-row-reverse w-full h-full justify-around items-center">
                        <div className="navbar__user">
                            <UserCircleIcon className="h-12 w-12 text-indigo-700"/>
                        </div>
                        <Button Name={"Home"} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
