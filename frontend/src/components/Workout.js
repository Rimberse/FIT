import React, { useEffect, useState, useRef } from "react";
import useAxios from "../utils/UseAxios";
import Tracker from "./Tracker";

const Workout = () => {
    const [isTrackerVisible, setIsTrackerVisible] = useState(false);
    const [response, setResponse] = useState('');
    const api = useAxios();
    const tracker = useRef(null);

    const onFinish = () => {
        tracker.current.processChanges();
        console.log(tracker.current.workout);

        const body = {

        };

        const fetchData = async () => {
            try {
                const response = await api('/wokrouts/', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(body)
                });
                setResponse(response.data.response);
            } catch {
                setResponse('Something went wrong. Couldn\'t save workout session');
            }
        }

        // fetchData();
    };

    return (
        <div>
            <h1 className="text-7xl font-semibold tracking-wide text-stone-900 text-center align-middle max-w-7xl mx-auto my-20">Workout</h1>
            {isTrackerVisible
                ? <>
                    <Tracker ref={tracker} />
                    <div className="flex justify-evenly items-center">
                        <button onClick={() => setIsTrackerVisible(!isTrackerVisible)} className="inline-block p-2 text-center align-middle uppercase rounded-lg shadow-lg ring-offset-2 ring-2 ring-rose-900/50 hover:ring-rose-800 w-52 h-12 text-xl text-white bg-rose-700 hover:bg-rose-800 active:bg-rose-900 focus:ring-zinc-300 mx-7 my-7">Cancel workout</button>
                        <button onClick={() => onFinish()} className="inline-block p-2 text-center align-middle uppercase rounded-lg shadow-lg ring-offset-2 ring-2 ring-emerald-900/50 hover:ring-emerald-800 w-52 h-12 text-xl text-white bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 focus:ring-zinc-300 mx-7 my-7">Finish</button>
                    </div>
                </>
                : <button onClick={() => setIsTrackerVisible(!isTrackerVisible)} className="p-2 rounded-lg shadow-lg ring-offset-2 ring-2 ring-zinc-900/50 hover:ring-zinc-800 w-96 h-20 text-2xl font-bold uppercase tracking-wide text-white flex justify-center items-center bg-zinc-700 hover:bg-zinc-800 active:bg-zinc-900 focus:ring-zinc-300 mx-auto my-28">Start an empty workout</button>
            }
        </div>
    );
};

export default Workout;
