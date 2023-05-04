import React, { createRef, useRef, useState } from "react";
import { CheckCircleIcon, NoSymbolIcon, ClockIcon, CalendarIcon } from '@heroicons/react/24/outline';
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

    const formatLength = length => {
        const parts = length.replaceAll("0", "").split(":");
        let lengthFormatted = "";

        if (parts[0].length !== 0)
            lengthFormatted = lengthFormatted.concat(parts[0]).concat('h ');

        if (parts[1].length !== 0)
            lengthFormatted = lengthFormatted.concat(parts[1]).concat('m');
        else
            lengthFormatted = lengthFormatted.concat(parts[2]).concat('s');

        return lengthFormatted;
    }

    const formatDate = date => {
        const parts = date.split(":");
        return `${parts[0]}:${parts[1]}`;
    }

    return (
        <div className="rounded shadow-sm shadow-violet-500 bg-clip-padding lg:p-8 p-4 mx-auto my-6">
            <div className="flex content-center 2xL:text-3xl xL:text-xl lg:text-base text-sm text-center align-middle">
                <span className="justify-self-start self-center mr-auto lg:p-3 p-1">{workout.name}</span>
                <ClockIcon className="justify-self-end self-center inline-block xl:w-8 xl:h-8 lg:w-6 lg:h-6 w-4 h-4" />
                <span className="justify-self-end self-center lg:p-3 p-1 mr-3">{formatLength(workout.length)}</span>
                <CalendarIcon className="justify-self-end self-center inline-block xl:w-8 xl:h-8 lg:w-6 lg:h-6 w-4 h-4" />
                <span className="justify-self-end self-center lg:p-3 p-1">{formatDate(workout.date)}</span>
            </div>
            <blockquote><p className="text-justify 2xl:indent-8 xl:indent-6 lg:indent-4 indent-3 italic font-normal p-3">{workout.note}</p></blockquote>
            <button onClick={() => onToggleExercisesVisibility()} className="2xl:h-14 2xl:w-14 xl:h-12 xl:w-12 lg:h-10 lg:w-10 h-8 w-8 hover:cursor-pointer lg:p-3 p-1 rounded-full shadow-sm shadow-violet-500 my-2">{exercisesRevealed ? <ChevronDoubleUpIcon /> : <ChevronDoubleDownIcon />}</button>
            <div className="text-violet-500 2xl:text-xl xl:text-base lg:text-sm text-xs font-normal">
                <ul ref={exercises} className="hidden">
                    {workout.exercises.map((exercise, index) => <li key={index}>
                            <div className="font-medium px-9 lg:py-3 py-1">{exercise.name}</div>
                            <blockquote><p className="text-justify indent-8 italic px-9 lg:py-3 py-1">{exercise.instructions}</p></blockquote>
                            <button onClick={() => onToggleSetsVisibility(index)} className="2xl:h-14 2xl:w-14 xl:h-12 xl:w-12 lg:h-10 lg:w-10 h-8 w-8 hover:cursor-pointer lg:p-3 p-1 rounded-full shadow-sm shadow-violet-500 ml-9 my-2">{setsRevealed[index] ? <ChevronDoubleUpIcon /> : <ChevronDoubleDownIcon />}</button>
                            {setsRevealed[index] && <div className="flex justify-between content-center 2xl:text-lg xl:text-base lg:text-sm text-xs font-medium text-center px-16 lg:py-3 py-1">
                                <span className="w-1/4">Set</span>
                                <span className="w-1/4">Kg</span>
                                <span className="w-1/4">Reps</span>
                                <span className="w-1/4">Completed</span>
                            </div>}
                            <ul ref={ref => sets.current[index] = ref} className="hidden">
                                {exercise.sets.map((set, index) => <li key={index}>
                                        <div className="flex justify-between content-center 2xl:text-base lg:text-sm text-xs text-center px-16 lg:py-3 py-1">
                                            <span className="w-1/4">{index + 1}</span>
                                            <span className="w-1/4">{set.kilograms}</span>
                                            <span className="w-1/4">{set.repetitions}</span>
                                            <span className="w-1/4">{set.isFinished ? <CheckCircleIcon className="xl:w-8 xl:h-8 lg:w-6 lg:h-6 w-4 h-4 mx-auto" /> : <NoSymbolIcon className="xl:w-8 xl:h-8 lg:w-6 lg:h-6 w-4 h-4 mx-auto" />}</span>
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
