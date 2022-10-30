import React from "react";
import '../styles/landing.css';

const Landing = () => {
    const scrollDown = () => {
        console.log('clicked');
    }

    return(
        <div id="landing-page">
            <h1 className="font-mono text-9xl font-bold tracking-wide text-center text-violet-700 subpixel-antialiased max-w-7xl mx-auto my-16">FIT</h1>
            <h1 className="font-mono text-7xl font-bold tracking-wide text-center text-violet-700 subpixel-antialiased max-w-7xl mx-auto">
                Enhance your workout routine for <span className="underline decoration-pink-500 decoration-4 underline-offset-8">Better Results</span>
            </h1>
            <div>
                
            </div>
            <div className="landing-page__div text-violet-700 absolute bottom-10 left-3/4" onClick={scrollDown}>
                <svg className="animate-bounce w-12 h-12">
                    <i className="fa fa-solid fa-arrow-down"></i>
                </svg>
            </div>
        </div>
    )
}

export default Landing;
