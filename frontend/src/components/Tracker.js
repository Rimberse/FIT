import React, { useEffect, useState } from "react";
import useAxios from "../utils/UseAxios";
import SelfAdjustingInterval from "../utils/SelfAdjustingInterval";

const Tracker = () => {
    const [response, setResponse] = useState('');
    const [isTrackerVisible, setIsTrackerVisible] = useState(false);
    const [time, setTimer] = useState('');
    const api = useAxios();

    return (
        <div>
            <h1>Test</h1>
            <div>{time}</div>
        </div>
    );
}

export default Tracker;
