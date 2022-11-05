import React from "react";

const Button = ({ Name }) => {
    
    return (
        <button className="w-44 h-12 p-2 text-2xl flex justify-center items-center font-medium tracking-wide text-white bg-indigo-700 rounded-none ring-offset-2 ring-offset-slate-50 transition delay-100 ease-out hover:bg-white hover:text-indigo-700 hover:ring hover:ring-indigo-700 duration-300">
            { Name }
        </button>
    )
}

export default Button;
