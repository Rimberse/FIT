import React, { useEffect, useState } from "react";
import useAxios from "../utils/UseAxios";
import Tracker from "./Tracker";

const Workout = () => {
    const [isTrackerVisible, setIsTrackerVisible] = useState(false);

    return(
        <div>
            <h1 className="text-7xl font-semibold tracking-wide text-stone-900 text-center align-middle max-w-7xl mx-auto my-20">Workout</h1>
            {isTrackerVisible
                ? <>
                    <Tracker />
                    <button onClick={() => setIsTrackerVisible(!isTrackerVisible)} className="p-2 rounded-lg shadow-lg ring-offset-2 ring-2 ring-zinc-900/50 hover:ring-zinc-800 w-44 h-12 text-xl text-white flex justify-center items-center bg-zinc-700 hover:bg-zinc-800 active:bg-zinc-900 focus:ring-zinc-300 mx-auto my-7">Cancel workout</button>
                </>
                : <button onClick={() => setIsTrackerVisible(!isTrackerVisible)} className="p-2 rounded-lg shadow-lg ring-offset-2 ring-2 ring-zinc-900/50 hover:ring-zinc-800 w-96 h-20 text-2xl font-bold uppercase tracking-wide text-white flex justify-center items-center bg-zinc-700 hover:bg-zinc-800 active:bg-zinc-900 focus:ring-zinc-300 mx-auto my-7">Start an empty workout</button>
            }
        </div>
    );
};

export default Workout;
