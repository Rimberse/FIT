import React from "react";

const Link = ({ Name, Hyperlink }) => {
    
    return (
        <a className="2xl:w-24 2xl:h-10 xl:w-20 xl:h-8 lg:w-18 lg:h-6 2xl:p-2 lg:p-1 2xl:text-xl xl:text-base lg:text-xs flex justify-center items-center font-medium tracking-wide text-white bg-indigo-700 rounded-none ring-offset-2 ring-offset-slate-50 outline-none no-underline cursor-pointer transition delay-100 ease-out hover:bg-white hover:text-indigo-700 hover:ring hover:ring-indigo-700 duration-300" href={Hyperlink}>
            { Name }
        </a>
    )
}

export default Link;
