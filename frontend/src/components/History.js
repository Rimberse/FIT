import React from "react";
import Navbar from "./Navbar";

const History = () => {

    return (
        <div>
            <Navbar />
            <div className="rounded shadow-sm shadow-violet-500 text-violet-700 text-base font-medium tracking-wide max-h-fit bg-clip-padding p-8 w-3/4 mx-auto my-48">
                <div className="flex content-center text-3xl text-center align-middle">
                    <span className="justify-self-start mr-auto p-3">Workout name</span>
                    <span className="justify-self-end p-3">Length</span>
                    <span className="justify-self-end p-3">Date</span>
                </div>
                <div className="text-xl">
                    <ul>
                        <li>
                            <div className="p-3">Exercise name</div>
                            <p className="text-justify p-3">Exercise instructions</p>
                            <div className="flex justify-between content-center text-lg text-center p-3">
                                <span className="w-1/5">Set</span>
                                <span className="w-1/5">Previous</span>
                                <span className="w-1/5">Kg</span>
                                <span className="w-1/5">Reps</span>
                                <span className="w-1/5">Completion</span>
                            </div>
                            <ul>
                                <li>
                                    <div className="flex justify-between content-center text-base text-center p-3">
                                        <span className="w-1/5">1</span>
                                        <span className="w-1/5">...</span>
                                        <span className="w-1/5">60</span>
                                        <span className="w-1/5">7</span>
                                        <span className="w-1/5">Yes</span>
                                    </div>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default History;
