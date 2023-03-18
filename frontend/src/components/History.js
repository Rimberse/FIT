import React, { createRef } from "react";
import Navbar from "./Navbar";
import { ChevronDoubleDownIcon, ChevronDoubleUpIcon } from '@heroicons/react/24/solid';
import { useState } from "react";

const History = () => {
    const [exercisesRevealed, setExercisesRevealed] = useState(false);
    const [setsRevealed, setSetsRevealed] = useState(false);
    const exercises = createRef();
    const sets = createRef();

    const onToggleExercisesVisibility = () => {
        exercises.current.style.display = (exercises.current.style.display == 'block') ? 'none' : 'block';
        setExercisesRevealed(!exercisesRevealed);
    };

    const onToggleSetsVisibility = () => {
        sets.current.style.display = (sets.current.style.display == 'block') ? 'none' : 'block';
        setSetsRevealed(!setsRevealed);
    };

    return (
        <div>
            <Navbar />
            <div className="rounded shadow-sm shadow-violet-500 text-violet-700 text-base font-medium tracking-wide max-h-fit bg-clip-padding p-8 w-3/4 mx-auto my-48">
                <div className="flex content-center text-3xl text-center align-middle">
                    <span className="justify-self-start mr-auto p-3">Workout name</span>
                    <span className="justify-self-end p-3">Length</span>
                    <span className="justify-self-end p-3">Date</span>
                </div>
                <button onClick={() => onToggleExercisesVisibility()} className="h-14 w-14 hover:cursor-pointer p-3 rounded-full shadow-sm shadow-violet-500">{exercisesRevealed ? <ChevronDoubleUpIcon /> : <ChevronDoubleDownIcon />}</button>
                <div className="text-xl">
                    <ul ref={exercises} className="hidden">
                        <li>
                            <div className="px-9 py-3">Exercise name</div>
                            <p className="text-justify px-9 py-3">Exercise instructions</p>
                            <div className="flex justify-between content-center text-lg text-center px-16 py-3">
                                <span className="w-1/5">Set</span>
                                <span className="w-1/5">Previous</span>
                                <span className="w-1/5">Kg</span>
                                <span className="w-1/5">Reps</span>
                                <span className="w-1/5">Completion</span>
                            </div>
                            <button onClick={() => onToggleSetsVisibility()} className="h-14 w-14 hover:cursor-pointer p-3 rounded-full shadow-sm shadow-violet-500">{setsRevealed ? <ChevronDoubleUpIcon /> : <ChevronDoubleDownIcon />}</button>
                            <ul ref={sets} className="hidden">
                                <li>
                                    <div className="flex justify-between content-center text-base text-center px-16 py-3">
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
