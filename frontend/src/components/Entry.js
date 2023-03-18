import React, { createRef, useRef, useState } from "react";
import Navbar from "./Navbar";
import { ChevronDoubleDownIcon, ChevronDoubleUpIcon } from '@heroicons/react/24/solid';

const Entry = ({ workout }) => {
    const [exercisesRevealed, setExercisesRevealed] = useState(false);
    const [setsRevealed, setSetsRevealed] = useState([]);
    const exercises = createRef();
    const sets = useRef([]);

    const onToggleExercisesVisibility = () => {
        exercises.current.style.display = (exercises.current.style.display == 'block') ? 'none' : 'block';
        setExercisesRevealed(!exercisesRevealed);
    };

    const onToggleSetsVisibility = exerciseNumber => {
        sets.current[exerciseNumber].style.display = (sets.current[exerciseNumber].style.display == 'block') ? 'none' : 'block';
        const newSetsRevealed = setsRevealed.slice(0, exerciseNumber);
        newSetsRevealed.push(!setsRevealed[exerciseNumber]);
        setSetsRevealed(newSetsRevealed);
    };

    return (
        <div className="my-5">
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
                        <button onClick={() => onToggleSetsVisibility(0)} className="h-14 w-14 hover:cursor-pointer p-3 rounded-full shadow-sm shadow-violet-500">{setsRevealed[0] ? <ChevronDoubleUpIcon /> : <ChevronDoubleDownIcon />}</button>
                        <ul ref={ref => sets.current[0] = ref} className="hidden">
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
                        <button onClick={() => onToggleSetsVisibility(1)} className="h-14 w-14 hover:cursor-pointer p-3 rounded-full shadow-sm shadow-violet-500">{setsRevealed[1] ? <ChevronDoubleUpIcon /> : <ChevronDoubleDownIcon />}</button>
                        <ul ref={ref => sets.current[1] = ref} className="hidden">
                            <li>
                                <div className="flex justify-between content-center text-base text-center px-16 py-3">
                                    <span className="w-1/5">1</span>
                                    <span className="w-1/5">...</span>
                                    <span className="w-1/5">60</span>
                                    <span className="w-1/5">7</span>
                                    <span className="w-1/5">Yes</span>
                                </div>
                            </li>
                            <li>
                                <div className="flex justify-between content-center text-base text-center px-16 py-3">
                                    <span className="w-1/5">2</span>
                                    <span className="w-1/5">...</span>
                                    <span className="w-1/5">60</span>
                                    <span className="w-1/5">7</span>
                                    <span className="w-1/5">No</span>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Entry;
