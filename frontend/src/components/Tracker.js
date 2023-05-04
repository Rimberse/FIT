import React, { useEffect, useState, useRef, createRef, forwardRef, useImperativeHandle } from "react";
import SelfAdjustingInterval from "../utils/SelfAdjustingInterval";
import Exercise from "./Exercise";
import { PencilSquareIcon, CheckCircleIcon } from '@heroicons/react/24/solid';
import "../styles/exercise.css";

const Tracker = forwardRef(({  }, ref) => {
    const [timer, setTimer] = useState('');
    const [date, setDate] = useState(new Date());
    const [exercises, setExercises] = useState([]);
    const [isNoteDisplayed, setIsNoteDisplayed] = useState(false);
    const refs = useRef([]);
    const name = createRef();
    const note = createRef();
    // The third argument is optional
    const ticker = useRef(new SelfAdjustingInterval(() => countUp(), 1000, () => countUpError()));

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
            instructions: '',
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
                name: name.current.value,
                length: timer,
                note: note.current.value,
                exercises
            }
        }
    });

    const onAddNote = () => {
        note.current.style.animation = "appearAnimation 500ms linear both";
        note.current.style.width = "20%";
        note.current.style.display = "inline-block";
        setIsNoteDisplayed(!isNoteDisplayed);
    };

    const onSaveNote = () => {
        note.current.style.animation = "disappearAnimation 500ms linear both";
        note.current.style.width = "0%";
        // Uses setTimeout to smooth animation (Prevent instant disappareance of textarea and lets animation play for 500ms)
        setTimeout(textarea => {
            textarea.style.display = "none";
            setIsNoteDisplayed(!isNoteDisplayed);
        }, 500, note.current);
    };

    return (
        <div className="table-fixed rounded shadow-md shadow-black text-center align-middle text-white xl:text-base lg:text-sm text-xs font-medium tracking-wide uppercase lg:w-3/4 max-h-fit bg-clip-padding bg-stone-900 lg:mx-auto mx-5 my-20 2xl:p-8 xl:p-7 lg:p-6 p-4">
            <div className="flex content-center lg:m-4 m-2">
                <span className="justify-self-start self-center 2xl:text-4xl xl:text-2xl lg:text-xl text-lg lg:font-bold font-semibold lg:tracking-wide w-1/4 mr-auto">{timer}</span>
                <input type="text" id="name" name="name" ref={name} className="justify-self-end self-center p-2 text-center 2xl:text-xl xl:text-base lg:text-sm text-xs lg:font-bold font-semibold lg:tracking-wide bg-stone-700 w-1/4 border shadow-sm border-stone-700 placeholder-white focus:outline-none focus:border-stone-300 focus:ring-stone-300 rounded-lg focus:ring-1 mr-4" defaultValue={'Enter workout name'} key={name} />
                <textarea id="note" name="note" ref={note} rows={3} cols={30} minLength={10} maxLength={512} className="lg:p-2 p-1 text-justify bg-stone-700 justify-self-end self-center border shadow-sm border-stone-700 placeholder-white focus:outline-none focus:border-stone-300 focus:ring-stone-300 rounded-lg focus:ring-1 mr-4 w-0 hidden" />
                {isNoteDisplayed
                    ? <button onClick={() => onSaveNote()} title="Save workout note" className="2xl:h-8 2xl:w-8 xl:h-7 xl:w-7 lg:h-6 lg:w-6 h-4 w-4 justify-self-end self-center text-stone-300 hover:cursor-pointer"><CheckCircleIcon /></button>
                    : <button onClick={() => onAddNote()} title="Add workout note" className="2xl:h-8 2xl:w-8 xl:h-7 xl:w-7 lg:h-6 lg:w-6 h-4 w-4 justify-self-end self-center text-stone-300 hover:cursor-pointer"><PencilSquareIcon /></button>}
            </div>
            {exercises.map((exercise, index) => <Exercise ref={ref => refs.current[index] = ref} key={index} exerciseNumber={index} exercises={exercises} setExercises={setExercises} removeExercise={onRemoveExercise} />)}
            <button onClick={onAddExercise} className="lg:p-4 p-2 bg-stone-300 text-stone-900 justify-self-center m-4 w-1/4 lg:font-bold font-semibold tracking-wide uppercase hover:bg-stone-700 hover:text-white rounded-md">Add exercise</button>
        </div>
    );
});

export default Tracker;
