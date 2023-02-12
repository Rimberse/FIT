import React, { useState, useEffect, useRef, createRef } from "react";
import Set from "./Set";

const Exercise = () => {
    const [sets, setSets] = useState([]);
    const [totalSets, setTotalSets] = useState(1);
    const [refs, setRefs] = useState([]);

    // Scales refs Array accordingly to then numbers of sets
    /*useEffect(() => {
        console.log(sets);
        setRefs(refs => 
            // Creates references to existing sets
            Array(sets.length).fill().map((_, index) => refs[index] || createRef() ));
    }, [sets]);*/


    const onAddSet = () => {
        // Respects immutability
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
        console.log("Index: " + index);
        // console.log(refs.current.slice(0, index).concat(refs.current.slice(index + 1)));
        // console.log(sets.slice(0, index).concat(sets.slice(index + 1))); 
        setSets(sets.slice(0, index).concat(sets.slice(index + 1)));
        // console.log(refs);
        // refs.forEach(ref => ref.processChanges());
        // refs.current = refs.current.slice(0, index).concat(refs.current.slice(index + 1));
        // if (removedSets.includes(index))
        //     return;

        // setRemovedSets([...removedSets, index]);
    }

    return (
        <div className="table-fixed grid grid-rows-4 divide-y divide-stone-700 rounded shadow-md shadow-black text-center align-middle text-white text-base font-medium tracking-wide uppercase w-3/4 max-h-fit bg-clip-padding bg-stone-900 mx-auto my-20">
            <input type="text" id="exercise" name="exercise" placeholder="Enter exercise name" className="p-2 text-center bg-stone-700 justify-self-start m-4 w-1/4 border shadow-sm border-stone-700 placeholder-white focus:outline-none focus:border-stone-300 focus:ring-stone-300 rounded-lg focus:ring-1" />
            <div className="grid grid-rows-1 grid-cols-5 gap-x-8 place-content-evenly">
                <span className="p-2 inline-flex justify-center items-center">Set</span>
                <span className="p-2 inline-flex justify-center items-center">Previous</span>
                <span className="p-2 inline-flex justify-center items-center">Kg / Lbs</span>
                <span className="p-2 inline-flex justify-center items-center">Reps</span>
                <span className="p-2 inline-flex justify-center items-center">Status</span>
            </div>
            {sets.map((set, index) => <Set ref={refs[index]} key={index} setNumber={index + 1} sets={sets} setSets={setSets} removeSet={onRemoveSet} />)}
            <button onClick={onAddSet} className="p-4 text-center bg-stone-300 text-stone-900 justify-self-end m-4 w-1/4 font-bold tracking-wide uppercase hover:bg-stone-700 hover:text-white rounded-md">Add set</button>
        </div>
    );
}

export default Exercise;
