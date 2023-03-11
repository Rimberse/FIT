import React, { useEffect, useState, useRef, forwardRef, useImperativeHandle } from "react";
import useAxios from "../utils/UseAxios";
import SelfAdjustingInterval from "../utils/SelfAdjustingInterval";
import Exercise from "./Exercise";

const Tracker = forwardRef(({  }, ref) => {
    const [response, setResponse] = useState('');
    const [timer, setTimer] = useState('');
    const [date, setDate] = useState(new Date());
    const [exercises, setExercises] = useState([]);
    const refs = useRef([]);
    // The third argument is optional
    const ticker = useRef(new SelfAdjustingInterval(() => countUp(), 1000, () => countUpError()));
    const api = useAxios();

    // Increments timer's second's value by 1
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

    // Scales refs Array accordingly to the numbers of existing Exercises
    useEffect(() => {
        refs.current = refs.current.slice(0, exercises.length);
    }, [exercises]);

    const onAddExercise = () => {
        // Keeps pre-filled input values of existing sets
        refs.current.forEach(ref => ref.processChanges());

        setExercises(exercises.concat([{
            name: 'Enter exercise name',
            sets: []
        }]));
    }

    const onRemoveExercise = index => {
        refs.current.filter((ref, i) => i !== index).forEach(ref => ref.processChanges());
        setExercises(exercises.slice(0, index).concat(exercises.slice(index + 1)));
    }

    const processChanges = () => {
        refs.current.forEach(ref => ref.processChanges());
    }

    useImperativeHandle(ref, () => {
        return {
            processChanges,
            
            workout: {
                name: '',
                length: timer,
                exercises
            }
        }
    });

    return (
        <div className="table-fixed rounded shadow-md shadow-black text-center align-middle text-white text-base font-medium tracking-wide uppercase w-3/4 max-h-fit bg-clip-padding bg-stone-900 mx-auto my-20 p-8">
            <div className="justify-self-start text-4xl font-bold tracking-wide w-1/4 m-2">{timer}</div>
            {exercises.map((exercise, index) => <Exercise ref={ref => refs.current[index] = ref} key={index} exerciseNumber={index} exercises={exercises} setExercises={setExercises} removeExercise={onRemoveExercise} />)}
            <button onClick={onAddExercise} className="p-4 bg-stone-300 text-stone-900 justify-self-center m-4 w-1/4 font-bold tracking-wide uppercase hover:bg-stone-700 hover:text-white rounded-md">Add exercise</button>
        </div>
    );
});

export default Tracker;
