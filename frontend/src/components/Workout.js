import React, { useEffect, useState } from "react";
import useAxios from "../utils/UseAxios";
import Tracker from "./Tracker";

const Workout = () => {
    const [isTrackerVisible, setIsTrackerVisible] = useState(false);

    return(
        <div>
            <h1 className="text-9xl font-bold tracking-wide text-stone-900 text-center align-middle max-w-7xl mx-auto my-24">Workout</h1>
            {isTrackerVisible
                ? <>
                    <Tracker />
                    <button onClick={() => setIsTrackerVisible(!isTrackerVisible)}>Cancel workout</button>
                </>
                : <button onClick={() => setIsTrackerVisible(!isTrackerVisible)}>Start an empty workout</button>
            }
        </div>
    );
};

export default Workout;
