import React, { useState, useRef, useEffect, createRef, useImperativeHandle, forwardRef } from "react";
import { TrashIcon } from '@heroicons/react/24/solid'

const Set = forwardRef(({ setNumber, sets, setSets, removeSet }, ref) => {
    const weight = createRef();
    const repetitions = createRef();
    const completion = createRef();
    const isMounted = useRef(false);

    useEffect(() => {
        isMounted.current = true;
        return () => { isMounted.current = false }
    }, [sets]);

    const processChanges = () => {
        const updatedSet = sets[setNumber - 1];
        updatedSet['kilograms'] = Number(weight.current.value);
        updatedSet['repetitions'] = Number(repetitions.current.value);
        updatedSet['isFinished'] = completion.current.checked;
        updatedSet['isFailed'] = !completion.current.value;
        setSets(sets.slice(0, setNumber - 1).concat([updatedSet].concat(sets.slice(setNumber))));
    }

    useImperativeHandle(ref, () => {
        return {
            processChanges: processChanges
        }
    });

    const onRemoveSet = () => {
        if (isMounted.current)
            removeSet(setNumber - 1);
    }

    return (
        <div className="grid grid-flow-col auto-rows-max grid-cols-[1fr,1fr,1fr,1fr,1fr,max-content] gap-x-8 place-content-evenly">
            <span className="p-2 inline-flex justify-self-center self-center my-2">{setNumber}</span>
            <span className="p-2 inline-flex justify-self-center self-center my-2">{sets[setNumber - 1]['previous']}</span>
            <input type="number" id="weight" name="weight" ref={weight} required min={1} className="p-2 inline-flex justify-self-center self-center text-center bg-stone-700 border shadow-sm border-stone-700 placeholder-white focus:outline-none focus:border-stone-300 focus:ring-stone-300 rounded-lg focus:ring-1 my-2" defaultValue={sets[setNumber - 1]['kilograms'] || ''} key={"kg: " + sets[setNumber - 1]['kilograms']} />
            <input type="number" id="repetitions" name="repetitions" ref={repetitions} required min={0} step={1} className="p-2 inline-flex justify-self-center self-center text-center bg-stone-700 border shadow-sm border-stone-700 placeholder-white focus:outline-none focus:border-stone-300 focus:ring-stone-300 rounded-lg focus:ring-1 my-2" defaultValue={sets[setNumber - 1]['repetitions'] || ''} key={"reps: " + sets[setNumber - 1]['repetitions']} />
            <input type="checkbox" id="status" name="status" ref={completion} required className="p-2 h-7 w-7 inline-flex justify-self-center self-center text-center bg-stone-700 my-2" defaultChecked={sets[setNumber - 1]['isFinished'] || false} key={sets[setNumber - 1]['isFinished']}/>
            <button onClick={() => onRemoveSet()} className="h-7 w-7 justify-self-end self-center text-stone-300 mr-5 hover:cursor-pointer"><TrashIcon /></button>
        </div>
    );
});

export default Set;
