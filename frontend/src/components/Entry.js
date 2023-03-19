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
        // Toggles display value of html element
        sets.current[exerciseNumber].style.display = (sets.current[exerciseNumber].style.display == 'block') ? 'none' : 'block';
        // Makes a copy of existing array of references and toggles visibility of sets of given exercise
        const newSetsRevealed = setsRevealed.slice();
        newSetsRevealed[exerciseNumber] = !setsRevealed[exerciseNumber];
        setSetsRevealed(newSetsRevealed);
    };

    return (
        <div className="my-5">
            <div className="flex content-center text-3xl text-center align-middle">
                <span className="justify-self-start mr-auto p-3">{workout.name}</span>
                <span className="justify-self-end p-3">{workout.length}</span>
                <span className="justify-self-end p-3">{workout.date}</span>
            </div>
            <button onClick={() => onToggleExercisesVisibility()} className="h-14 w-14 hover:cursor-pointer p-3 rounded-full shadow-sm shadow-violet-500 my-2">{exercisesRevealed ? <ChevronDoubleUpIcon /> : <ChevronDoubleDownIcon />}</button>
            <div className="text-xl">
                <ul ref={exercises} className="hidden">
                    {workout.exercises.map((exercise, index) => <li key={index}>
                            <div className="px-9 py-3">{exercise.name}</div>
                            <p className="text-justify px-9 py-3">{exercise.instructions}</p>
                            <button onClick={() => onToggleSetsVisibility(index)} className="h-14 w-14 hover:cursor-pointer p-3 rounded-full shadow-sm shadow-violet-500 ml-9 my-2">{setsRevealed[index] ? <ChevronDoubleUpIcon /> : <ChevronDoubleDownIcon />}</button>
                            {setsRevealed[index] && <div className="flex justify-between content-center text-lg text-center px-16 py-3">
                                <span className="w-1/4">Set</span>
                                <span className="w-1/4">Kg</span>
                                <span className="w-1/4">Reps</span>
                                <span className="w-1/4">Completed</span>
                            </div>}
                            <ul ref={ref => sets.current[index] = ref} className="hidden">
                                {exercise.sets.map((set, index) => <li key={index}>
                                        <div className="flex justify-between content-center text-base text-center px-16 py-3">
                                            <span className="w-1/4">{index + 1}</span>
                                            <span className="w-1/4">{set.kilograms}</span>
                                            <span className="w-1/4">{set.repetitions}</span>
                                            <span className="w-1/4">{set.isFinished ? 'Yes' : 'No'}</span>
                                        </div>
                                    </li>
                                )}
                            </ul>
                        </li>
                    )}
                </ul>
            </div>
        </div>
    );
};

export default Entry;
