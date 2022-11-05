import React from "react";
import '../styles/navbar.css';
import { UserCircleIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
    
    return (
        <div id="navbar">
            <div className="flex flex-row w-3/4 h-32 mx-auto my-8">
                <div className="basis-1/2"></div>
                <div className="basis-1/2">
                    <div className="flex flex-row">
                        <div className="navbar__user">
                            <UserCircleIcon className="h-10 w-10 text-indigo-700"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;
