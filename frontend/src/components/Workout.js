import React, { useEffect, useState, useRef } from "react";
import useAxios from "../utils/UseAxios";
import Navbar from "./Navbar";
import Tracker from "./Tracker";

const Workout = () => {
    const [isTrackerVisible, setIsTrackerVisible] = useState(false);
    const [responses, setResponses] = useState([]);
    const api = useAxios();
    const tracker = useRef(null);

    const onFinish = () => {
        tracker.current.processChanges();

        if (tracker.current.workout.exercises.length == 0 || tracker.current.workout.exercises[0].sets.length == 0)
            return;

        let body = {
            name: tracker.current.workout.name,
            length: tracker.current.workout.length,
            note: tracker.current.workout.note
        };

        postData('workouts/', body)
            .then(response => {
                tracker.current.workout.exercises.forEach(exercise => {
                    body = {
                        name: exercise.name,
                        instructions: exercise.instructions,
                        workout: response.data.id
                    }

                    postData('exercises/', body)
                        .then(response => {
                            exercise.sets.forEach(set => {
                                body = {
                                    kilograms: set.kilograms,
                                    repetitions: set.repetitions,
                                    isFinished: set.isFinished,
                                    isFailed: set.isFailed,
                                    exercise: response.data.id
                                }

                                postData('sets/', body);
                            });
                        });
                });

                setIsTrackerVisible(!isTrackerVisible);
            });
    };

    const postData = async (URL, body) => {
        try {
            const response = await api.post(URL, body);
            setResponses(responses.concat(response.data));
            return response;
        } catch {
            setResponses(responses.concat('Something went wrong. Couldn\'t save workout session'));
        }
    }

    return (
        <div>
            {!isTrackerVisible && <Navbar />}
            <h1 className="2xl:text-7xl xl:text-6xl lg:text-5xl text-3xl font-semibold tracking-wide text-stone-900 text-center align-middle max-w-7xl mx-auto my-20">Workout</h1>
            {isTrackerVisible
                ? <>
                    <Tracker ref={tracker} />
                    <div className="flex justify-evenly items-center">
                        <button onClick={() => setIsTrackerVisible(!isTrackerVisible)} className="inline-block p-2 text-center align-middle uppercase rounded-lg shadow-lg ring-offset-2 ring-2 ring-rose-900/50 hover:ring-rose-800 w-52 h-12 text-xl text-white bg-rose-700 hover:bg-rose-800 active:bg-rose-900 focus:ring-zinc-300 mx-7 my-7">Cancel workout</button>
                        <button onClick={() => onFinish()} className="inline-block p-2 text-center align-middle uppercase rounded-lg shadow-lg ring-offset-2 ring-2 ring-emerald-900/50 hover:ring-emerald-800 w-52 h-12 text-xl text-white bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 focus:ring-zinc-300 mx-7 my-7">Finish</button>
                    </div>
                </>
                : <button onClick={() => setIsTrackerVisible(!isTrackerVisible)} className="p-2 rounded-lg shadow-lg ring-offset-2 ring-2 ring-zinc-900/50 hover:ring-zinc-800 2xl:w-96 2xl:h-20 xl:w-80 xl:h-20 lg:w-72 lg:h-20 w-64 h-16 xl:text-2xl lg:text-xl text-base font-bold uppercase tracking-wide text-white flex justify-center items-center bg-zinc-700 hover:bg-zinc-800 active:bg-zinc-900 focus:ring-zinc-300 mx-auto my-28">Start an empty workout</button>
            }
        </div>
    );
};

export default Workout;
