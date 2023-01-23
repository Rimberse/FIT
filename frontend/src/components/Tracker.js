import React, { useState } from "react";
import useAxios from "../utils/UseAxios";

const Tracker = () => {
    const [response, setResponse] = useState('');
    const [isTrackerVisible, setIsTrackerVisible] = useState(false);
    const api = useAxios();

    return(
        <h1>Test</h1>
    );
}

export default Tracker;
