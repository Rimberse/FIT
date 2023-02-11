import React, { useState, useEffect } from "react";
import Set from "./Set";

const Exercise = () => {
    const [sets, setSets] = useState([]);
    const [totalSets, setTotalSets] = useState(1);
    const [removedSets, setRemovedSets] = useState([]);

    const onAddSet = () => {
        // Respects immutability
        setSets(sets.concat([<Set key={totalSets - 1} setNumber={totalSets} removeSet={onRemoveSet} />]));
        setTotalSets(totalSets + 1);
    };

    const onRemoveSet = index => {
        if (removedSets.includes(index))
            return;

        setRemovedSets([...removedSets, index]);
    }

    useEffect(() => {
        // Find out the difference between Displayed sets and Removed sets
        setSets(sets.filter(set => !removedSets.includes(Number(set.key))));
    }, [removedSets]);

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
            { sets }
            <button onClick={onAddSet} className="p-4 text-center bg-stone-300 text-stone-900 justify-self-end m-4 w-1/4 font-bold tracking-wide uppercase hover:bg-stone-700 hover:text-white rounded-md">Add set</button>
        </div>
    );
}

export default Exercise;
