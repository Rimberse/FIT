import React, { useState, useEffect, useRef, createRef, forwardRef, useImperativeHandle } from "react";
import Set from "./Set";
import { PencilSquareIcon, CheckCircleIcon } from '@heroicons/react/24/solid'
import "../styles/exercise.css";

const Exercise = forwardRef(({ exerciseNumber, exercises, setExercises, removeExercise }, ref) => {
    const [sets, setSets] = useState([]);
    const [isInstructionsDisplayed, setIsInstructionsDisplayed] = useState(false);
    const refs = useRef([]);
    const name = createRef();
    const instructions = createRef();
    const isMounted = useRef(false);

    // Pre-fills with existing sets, if some of the exercises has been removed
    useEffect(() => {
        setSets(exercises[exerciseNumber]['sets']);
    }, [exercises]);

    // Scales refs Array accordingly to the numbers of existing Sets
    useEffect(() => {
        refs.current = refs.current.slice(0, sets.length);
        isMounted.current = true;
        return () => { isMounted.current = false }
    }, [sets]);

    const processChanges = () => {
        const updatedExercise = exercises[exerciseNumber];
        // Retrieve latest input field values, if changed
        refs.current.forEach(ref => ref.processChanges());
        updatedExercise['name'] = name.current.value;
        updatedExercise['instructions'] = instructions.current.value;
        updatedExercise['sets'] = sets;
        setExercises(exercises.slice(0, exerciseNumber).concat([updatedExercise].concat(exercises.slice(exerciseNumber + 1))));
    }

    useImperativeHandle(ref, () => {
        return {
            processChanges
        }
    });

    const onAddSet = () => {
        // Respect immutability
        setSets(sets.concat([{
            number: sets.length + 1,
            previous: '...',
            kilograms: '',
            repetitions: '',
            isFinished: false,
            isFailed: false
        }]));
    };

    const onRemoveSet = index => {
        refs.current.filter((ref, i) => i !== index).forEach(ref => ref.processChanges());
        setSets(sets.slice(0, index).concat(sets.slice(index + 1)));
    }

    const onRemoveExercise = () => {
        if (isMounted.current)
            removeExercise(exerciseNumber);
    }

    const onAddInstructions = () => {
        instructions.current.style.animation = "appearAnimation 500ms linear both";
        instructions.current.style.width = "20%";
        instructions.current.style.display = "inline-block";
        setIsInstructionsDisplayed(!isInstructionsDisplayed);
    };

    const onSaveInstructions = () => {
        instructions.current.style.animation = "disappearAnimation 500ms linear both";
        instructions.current.style.width = "0%";
        // Uses setTimeout to smooth animation (Prevent instant disappareance of textarea and lets animation play for 500ms)
        setTimeout(textarea => {
            textarea.style.display = "none";
            setIsInstructionsDisplayed(!isInstructionsDisplayed);
        }, 500, instructions.current);
    };

    return (
        <div className="grid auto-rows-auto divide-y divide-stone-700">
            <div className="flex content-center lg:m-4 m-2">
                <input type="text" id="exercise" name="exercise" ref={name} className="p-2 text-center bg-stone-700 justify-self-start self-center w-1/4 border shadow-sm border-stone-700 placeholder-white focus:outline-none focus:border-stone-300 focus:ring-stone-300 rounded-lg focus:ring-1 mr-auto" defaultValue={exercises[exerciseNumber]['name'] || ''} key={exercises[exerciseNumber]['name']} />
                <textarea id="instructions" name="instructions" ref={instructions} rows={5} cols={50} minLength={10} maxLength={2048} className="p-2 text-justify bg-stone-700 justify-self-end self-center border shadow-sm border-stone-700 placeholder-white focus:outline-none focus:border-stone-300 focus:ring-stone-300 rounded-lg focus:ring-1 mr-4 w-0 hidden" />
                {isInstructionsDisplayed
                    ? <button onClick={() => onSaveInstructions()} title="Save instructions" className="2xl:h-8 2xl:w-8 xl:h-7 xl:w-7 lg:h-6 lg:w-6 h-4 w-4 justify-self-end self-center text-stone-300 hover:cursor-pointer"><CheckCircleIcon /></button>
                    : <button onClick={() => onAddInstructions()} title="Add instructions" className="2xl:h-8 2xl:w-8 xl:h-7 xl:w-7 lg:h-6 lg:w-6 h-4 w-4 justify-self-end self-center text-stone-300 hover:cursor-pointer"><PencilSquareIcon /></button>}
            </div>
            <div className="grid grid-flow-col auto-rows-max grid-cols-[1fr,1fr,1fr,1fr,1fr,max-content] lg:gap-x-8 gap-x-4 place-content-evenly">
                <span className="p-2 inline-flex justify-center items-center my-2">Set</span>
                <span className="p-2 inline-flex justify-center items-center my-2">Previous</span>
                <span className="p-2 inline-flex justify-center items-center my-2">Kg</span>
                <span className="p-2 inline-flex justify-center items-center my-2">Reps</span>
                <span className="p-2 inline-flex justify-center items-center my-2">Completion</span>
                <span className="2xl:h-7 2xl:w-7 xl:h-6 xl:w-6 lg:h-5 lg:w-5 h-3 w-3 justify-self-end self-center mr-5 my-2"></span>
            </div>
            {sets.map((set, index) => <Set ref={ref => refs.current[index] = ref} key={index} setNumber={index + 1} sets={sets} setSets={setSets} removeSet={onRemoveSet} />)}
            <button onClick={onAddSet} className="lg:p-4 p-2 text-center bg-stone-300 text-stone-900 justify-self-end m-4 w-1/4 lg:font-bold font-semibold lg:tracking-wide uppercase hover:bg-stone-700 hover:text-white rounded-md">Add set</button>
            <button onClick={onRemoveExercise} className="lg:p-4 p-2 bg-red-500 text-stone-300 justify-self-end m-4 w-1/4 lg:font-bold font-semibold lg:tracking-wide uppercase hover:bg-red-900 hover:text-white rounded-md">Remove exercise</button>
        </div>
    );
});

export default Exercise;
