import React from "react";
import '../styles/navbar.css';
import { UserCircleIcon } from '@heroicons/react/24/solid';

const Navbar = () => {
    
    return (
        <div id="navbar">
            <div className="navbar__user">
                <UserCircleIcon className="h-10 w-10 text-indigo-700"/>
            </div>
        </div>
    )
}

export default Navbar;
