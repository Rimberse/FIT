import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import '../styles/landing.css';
import Navbar from "./Navbar";
import app from '../resources/illustrations/landing_fitness_tracker.svg';
import features from '../resources/illustrations/landing_personal_trainer.svg';
import differences from '../resources/illustrations/landing_fitness_stats.svg';

const Landing = () => {
    const scrollDown = () => {
        // Used to scroll not to the bottom exactly, but around button's position
        window.scrollTo({ top: document.body.scrollHeight - document.querySelector(".landing-page__button").scrollHeight, behavior: 'smooth' });
    }

    // Event to hide scroll to the bottom icon when approaching bottom of the page and show it when scrolling up
    const showHideScrollIcon = () => {
        const scrollIcon = document.querySelector('.landing-page__scroll');
        const scrollIconY = document.querySelector(".landing-page__button").getBoundingClientRect().top;
        const windowY = window.scrollY;

        if (scrollIconY  - windowY > 0) {
            // Scrolling UP
            scrollIcon.style.display = "block";
        } else {
            // Scrolling DOWN
            scrollIcon.style.display = "none";
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', showHideScrollIcon);
        // Removes event listener, once component has been unmounted
        return () => window.removeEventListener('scroll', showHideScrollIcon);
    }, []);

    // Landing is visible to both non-authorized and authorized users
    return (
        <div id="landing-page">
            <Navbar />

            <h1 className="font-mono 2xl:text-9xl xl:text-8xl lg:text-7xl text-4xl font-bold tracking-widest text-center text-violet-700 subpixel-antialiased max-w-7xl mx-auto lg:my-32 my-24">FIT</h1>
            <h2 className="font-mono 2xl:text-7xl xl:text-6xl lg:text-5xl text-2xl font-bold tracking-wide text-center text-violet-700 subpixel-antialiased max-w-7xl mx-auto">
                Enhance your workout routine for <span className="underline decoration-pink-500 decoration-4 underline-offset-8">Better Results</span>
            </h2>

            <div className="font-sans mx-auto 2xl:my-56 xl:my-48 lg:my-32 my-24 flex flex-col w-3/5 justify-items-center items-center">
                <div className="flex sm:flex-row flex-col justify-center items-center 2xl:my-16 xl:my-14 lg:my-12 my-8">
                    <div>
                        <h3 className="2xl:text-5xl xl:text-4xl lg:text-4xl sm:text-xl 2xl:my-20 xl:my-16 lg:my-12 sm:my-8 font-semibold tracking-wide text-violet-700 underline text-center">Why FIT</h3>
                        <p className="2xl:text-xl xl:text-lg lg:text-base sm:text-xs tracking-wider leading-relaxed text-justify">If you wonder why you should use <span className="underline decoration-pink-500/75 decoration-4">FIT</span>, then the reason is simple: <span className="underline decoration-pink-500/75 decoration-4">FIT</span> offers great user experience, performance analysis and progression overview.
                            <br /><br />Put simply - <span className="underline decoration-pink-500/75 decoration-4">FIT</span> is a fitness tracker, workout plan manager and above all it's your personal coach!</p>
                    </div>
                    <img className="w-full sm:w-2/3 sm:ml-5 mt-5 shrink-0" src={app} />
                </div>

                <div className="flex sm:flex-row flex-col justify-center items-center 2xl:my-16 xl:my-14 lg:my-12 my-8">
                    <img className="w-full sm:w-2/3 sm:mr-5 mb-5 shrink-0" src={features} />
                    <div>
                        <h3 className="2xl:text-5xl xl:text-4xl lg:text-4xl sm:text-xl 2xl:my-20 xl:my-16 lg:my-12 sm:my-8 font-semibold tracking-wide text-violet-700 underline text-center">What FIT offers</h3>
                        <p className="2xl:text-xl xl:text-lg lg:text-base sm:text-xs tracking-wider leading-relaxed text-justify"><span className="underline decoration-pink-500/75 decoration-4">FIT</span> offers many functionalites, from a simple workout tracker, workout history log to workout plan personalisation. All of its in one place. <br /><br />Here is a quick overview:</p>
                        <ul className="list-disc 2xl:text-xl xl:text-lg lg:text-base sm:text-xs sm:ml-5">
                            <li>Choose your favorite workout plan from a set of predefined plans or create your own</li>
                            <li>Personalize your workout plan by adding exercises, adding/modifying number of sets/repetition ranges</li>
                            <li>See your progression by looking into workout history</li>
                        </ul>
                    </div>
                </div>

                <div className="flex sm:flex-row flex-col justify-center items-center 2xl:my-16 xl:my-14 lg:my-12 my-8">
                    <div>
                        <h3 className="2xl:text-5xl xl:text-4xl lg:text-4xl sm:text-xl 2xl:my-20 xl:my-16 lg:my-12 sm:my-8 font-semibold tracking-wide text-violet-700 underline text-center">How FIT differentiates itself from other applications</h3>
                        <p className="2xl:text-xl xl:text-lg lg:text-base sm:text-xs tracking-wider leading-relaxed text-justify">Asking yourself why you should use <span className="underline decoration-pink-500/75 decoration-4">FIT</span>, instead of any other app, which provides the same functionalities?<br />
                            Have been already using an another app and been thinking about switching to other app or trying something new?<br /><br />
                            Think no more!<br />Give <span className="underline decoration-pink-500/75 decoration-4">FIT</span> a try and leave a feedback if you don't like it in the end, <span className="underline decoration-pink-500/75 decoration-4">FIT</span> is evolving and we need user feedbacks.
                            <br /><br />As for the differences:<br /><span className="underline decoration-pink-500/75 decoration-4">FIT</span> offers a fully personalized experience, change your workout plan, exercises, number of sets, ranges. Fully modifiable workout routine<br />
                            See how you progress throughout your journey by seeing your workout history, achievements, failures or loss of perfomance.<br />
                            And that's not all! You will also have a possibility to share your workout plan, history with others or see theirs.</p>
                    </div>
                    <img className="w-full sm:w-2/4 sm:ml-5 mt-5 shrink-0" src={differences} />
                </div>
            </div>

            <div className="landing-page__scroll text-violet-700 absolute bottom-10 2xl:right-64 xl:right-48 lg:right-36 sm:right-28 right-14 cursor-pointer" onClick={scrollDown}>
                <svg className="animate-bounce 2xl:w-12 2xl:h-12 xl:w-9 xl:h-9 sm:w-6 sm:h-6 w-4 h-4">
                    <i className="fa fa-solid fa-arrow-down"></i>
                </svg>
            </div>

            <Link to={"/protected/workout"} className="landing-page__button 2xl:w-96 2xl:h-24 xl:w-80 xl:h-24 lg:w-72 lg:h-20 w-56 h-16 p-4 2xl:text-4xl xl:text-3xl lg:text-2xl text-xl mx-auto xl:my-32 my-24 flex justify-center items-center font-bold tracking-wide uppercase text-white bg-violet-700 shadow-lg shadow-violet-700/50 hover:bg-indigo-500 rounded-md hover:-translate-y-2 ease-in-out duration-500">
                Start now
            </Link>
        </div>
    )
}

export default Landing;
