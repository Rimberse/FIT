import React, { createRef, useRef, useState, useEffect } from "react";
import Navbar from "./Navbar";
import { ChevronDoubleDownIcon, ChevronDoubleUpIcon } from '@heroicons/react/24/solid';
import Entry from "./Entry";

const History = () => {
    const [workouts, setWorkouts] = useState([]);
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

    useEffect(() => {
        setWorkouts([
            {
                name: 'Arms training',
                length: '01:02:37',
                note: 'Regular routine',
                date: '03/06/2023',
                exercises: [
                    {
                        name: 'Skull crushers',
                        instructions: 'Use Ez-bar and swing it',
                        sets: [
                            {
                                kilograms: 25,
                                repetitions: 10,
                                isFinished: true,
                                isFailed: false
                            },
                            {
                                kilograms: 25,
                                repetitions: 10,
                                isFinished: true,
                                isFailed: false
                            },
                            {
                                kilograms: 25,
                                repetitions: 10,
                                isFinished: true,
                                isFailed: false
                            },
                            {
                                kilograms: 25,
                                repetitions: 10,
                                isFinished: true,
                                isFailed: false
                            },
                            {
                                kilograms: 25,
                                repetitions: 10,
                                isFinished: true,
                                isFailed: false
                            }
                        ]
                    },
                    {
                        name: 'Biceps curl',
                        instructions: 'Use Ez-bar and lift it with both hands',
                        sets: [
                            {
                                kilograms: 25,
                                repetitions: 7,
                                isFinished: true,
                                isFailed: false
                            },
                            {
                                kilograms: 25,
                                repetitions: 7,
                                isFinished: true,
                                isFailed: false
                            },
                            {
                                kilograms: 25,
                                repetitions: 7,
                                isFinished: true,
                                isFailed: false
                            }
                        ]
                    },
                    {
                        name: 'Dumbell fly',
                        instructions: 'Use dumbells and lift the pair with both hands',
                        sets: [
                            {
                                kilograms: 20,
                                repetitions: 8,
                                isFinished: true,
                                isFailed: false
                            }
                        ]
                    }
                ]
            },
            {
                name: 'Grey skull',
                length: '00:57:39',
                note: 'Calendar program',
                date: '27/10/2023',
                exercises: [
                    {
                        name: 'Squat',
                        instructions: 'Use olympic bar to perform squats',
                        sets: [
                            {
                                kilograms: 95,
                                repetitions: 3,
                                isFinished: true,
                                isFailed: false
                            },
                            {
                                kilograms: 95,
                                repetitions: 3,
                                isFinished: true,
                                isFailed: false
                            }
                        ]
                    },
                    {
                        name: 'Deadlift',
                        instructions: 'Use olympic bar and lift heavy weights',
                        sets: [
                            {
                                kilograms: 100,
                                repetitions: 7,
                                isFinished: true,
                                isFailed: false
                            },
                            {
                                kilograms: 110,
                                repetitions: 7,
                                isFinished: true,
                                isFailed: false
                            },
                            {
                                kilograms: 125,
                                repetitions: 7,
                                isFinished: false,
                                isFailed: true
                            }
                        ]
                    }
                ]
            }
        ]);
    }, []);

    return (
        <div>
            <Navbar />
            <div className="rounded shadow-sm shadow-violet-500 text-violet-700 text-base font-medium tracking-wide max-h-fit bg-clip-padding p-8 w-3/4 mx-auto my-48">
                {workouts.map((workout, index) => <Entry workout={workout} key={index} />)}
            </div>
        </div>
    );
};

export default History;
