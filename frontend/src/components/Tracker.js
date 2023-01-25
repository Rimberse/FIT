import React, { useEffect, useState } from "react";
import useAxios from "../utils/UseAxios";
import SelfAdjustingInterval from "../utils/SelfAdjustingInterval";
import { useRef } from "react";

const Tracker = () => {
    const [response, setResponse] = useState('');
    const [timer, setTimer] = useState('');
    const [date, setDate] = useState(new Date());
    // The third argument is optional
    const ticker = useRef(new SelfAdjustingInterval(() => countUp(), 1000, () => countUpError()));
    const api = useAxios();

    // Increments timer's seconds value by 1
    const countUp = () => {
        const time = date;
        time.setTime(time.getTime() + 1000);            // 1000 ms = 1s
        setDate(time);
        setTimer(time.toTimeString().split(" ")[0]);

        if (
            date.getHours() === 23 &&
            date.getMinutes() === 59 &&
            date.getSeconds() === 59
        ) {
            // Timer should stop
            ticker.current.stop();
        }
    };

    // Error function which warns if something goes wrong
    const countUpError = () => console.warn('The drift exceededs the interval!');

    // Sets up timer, provides date object with initial values
    const init = () => {
        // Set the count up date time with the counter values
        let time = date;
        time.setHours(0);
        time.setMinutes(0);
        time.setSeconds(0);
        time.setMilliseconds(0);
        setDate(time);
        setTimer(time.toTimeString().split(" ")[0]);
    }

    useEffect(() => {
        let isCancelled = false;

        if (!isCancelled) {
            init();
            ticker.current.start();
        }

        return () => {
            isCancelled = true;
            ticker.current.stop();
        };
    }, []);

    return (
        <div>
            <h1>Test</h1>
            <div>{timer}</div>
            <table>
                <tr>
                    <th>Title1</th>
                    <th>Title2</th>
                    <th>Title3</th>
                </tr>
                <tr>
                    <td>a</td>
                    <td>b</td>
                    <td>c</td>
                </tr>
                <tr>
                    <td>d</td>
                    <td>e</td>
                    <td>f</td>
                </tr>
            </table>
        </div>
    );
}

export default Tracker;
