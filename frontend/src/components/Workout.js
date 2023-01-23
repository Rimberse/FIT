import React, { useEffect, useState } from "react";
import useAxios from "../utils/UseAxios";

const Workout = () => {
    const [response, setResponse] = useState('');
    const api = useAxios();

    return(
        <div>
            <h1 className="text-9xl font-bold tracking-wide text-stone-900 text-center align-middle max-w-7xl mx-auto my-24">Workout</h1>
        </div>
    );
};

export default Workout;
