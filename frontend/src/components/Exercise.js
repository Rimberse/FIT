import React, { useState, useEffect, useRef, createRef, forwardRef, useImperativeHandle } from "react";
import Set from "./Set";

const Exercise = forwardRef(({ exerciseNumber, exercises, setExercises, removeExercise }, ref) => {
    const [sets, setSets] = useState([]);
    const refs = useRef([]);
    const name = createRef();
    const isMounted = useRef(false);

    // Pre-fills with existing sets, if some exercise got deleted
    useEffect(() => {
        console.log("Use effect:");
        console.log(exercises[exerciseNumber]['sets']);
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
        updatedExercise['sets'] = sets;
        setExercises(exercises.slice(0, exerciseNumber).concat([updatedExercise].concat(exercises.slice(exerciseNumber + 1))));
    }

    useImperativeHandle(ref, () => {
        return {
            processChanges: processChanges
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

    return (
        <div className="grid auto-rows-auto divide-y divide-stone-700">
            <input type="text" id="exercise" name="exercise" ref={name} className="p-2 text-center bg-stone-700 justify-self-start m-4 w-1/4 border shadow-sm border-stone-700 placeholder-white focus:outline-none focus:border-stone-300 focus:ring-stone-300 rounded-lg focus:ring-1" defaultValue={exercises[exerciseNumber]['name'] || ''} key={exercises[exerciseNumber]['name']} />
            <div className="grid grid-flow-col auto-rows-max grid-cols-[1fr,1fr,1fr,1fr,1fr,max-content] gap-x-8 place-content-evenly">
                <span className="p-2 inline-flex justify-center items-center my-2">Set</span>
                <span className="p-2 inline-flex justify-center items-center my-2">Previous</span>
                <span className="p-2 inline-flex justify-center items-center my-2">Kg / Lbs</span>
                <span className="p-2 inline-flex justify-center items-center my-2">Reps</span>
                <span className="p-2 inline-flex justify-center items-center my-2">Status</span>
                <span className="h-7 w-7 justify-self-end self-center mr-5 my-2"></span>
            </div>
            {sets.map((set, index) => <Set ref={ref => refs.current[index] = ref} key={index} setNumber={index + 1} sets={sets} setSets={setSets} removeSet={onRemoveSet} />)}
            <button onClick={onAddSet} className="p-4 text-center bg-stone-300 text-stone-900 justify-self-end m-4 w-1/4 font-bold tracking-wide uppercase hover:bg-stone-700 hover:text-white rounded-md">Add set</button>
            <button onClick={onRemoveExercise} className="p-4 bg-red-500 text-stone-300 justify-self-end m-4 w-1/4 font-bold tracking-wide uppercase hover:bg-red-900 hover:text-white rounded-md">Remove exercise</button>
        </div>
    );
});

export default Exercise;
