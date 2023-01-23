import React, { useEffect, useState } from "react";
import useAxios from "../utils/UseAxios";

const Workout = () => {
    const [response, setResponse] = useState('');
    const api = useAxios();

    return(
        <div>
            <h1>Workout</h1>
        </div>
    );
};

export default Workout;
