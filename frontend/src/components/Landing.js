import React from "react";
import '../styles/landing.css';
import app from '../resources/illustrations/landing_fitness_tracker.svg';
import features from '../resources/illustrations/landing_personal_trainer.svg';

const Landing = () => {
    const scrollDown = () => {
        console.log('clicked');
    }

    return (
        <div id="landing-page">
            <h1 className="font-mono text-9xl font-bold tracking-widest text-center text-violet-700 subpixel-antialiased max-w-7xl mx-auto my-32">FIT</h1>
            <h2 className="font-mono text-7xl font-bold tracking-wide text-center text-violet-700 subpixel-antialiased max-w-7xl mx-auto">
                Enhance your workout routine for <span className="underline decoration-pink-500 decoration-4 underline-offset-8">Better Results</span>
            </h2>

            <div className="font-sans mx-auto my-64 flex flex-col w-3/4 justify-center items-center">
                <div className="flex flex-row justify-center">
                    <div>
                        <h3 className="text-7xl my-24 font-semibold tracking-wide text-violet-700 underline">Why FIT</h3>
                        <p className="text-3xl tracking-wider leading-relaxed text-justify">If you wonder why you should use <span className="underline decoration-pink-500/75 decoration-4">FIT</span>, then the reason is simple: <span className="underline decoration-pink-500/75 decoration-4">FIT</span> offers great user experience, performance analysis and progression overview.
                        <br/><br/>Put simply - <span className="underline decoration-pink-500/75 decoration-4">FIT</span> is a fitness tracker, workout program manager and above all it's your personal coach!</p>
                    </div>
                    <img className="w-2/3 shrink-0" src={app} />
                </div>
            </div>

            <div className="landing-page__scroll text-violet-700 absolute bottom-10 left-3/4" onClick={scrollDown}>
                <svg className="animate-bounce w-12 h-12">
                    <i className="fa fa-solid fa-arrow-down"></i>
                </svg>
            </div>
        </div>
    )
}

export default Landing;
