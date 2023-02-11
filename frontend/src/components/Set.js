import React, { useRef, useEffect } from "react";
import { TrashIcon } from '@heroicons/react/24/solid'

const Set = ({ setNumber, removeSet }) => {
    const isMounted = useRef(false);

    useEffect(() => {
        isMounted.current = true;
        return () => { isMounted.current = false }
    }, []);

    return (
        <div className="grid grid-flow-col auto-rows-max grid-cols-[1fr,1fr,1fr,1fr,1fr,max-content] gap-x-8 place-content-evenly">
            <span className="p-2 inline-flex justify-self-center self-center my-4r">{setNumber}</span>
            <span className="p-2 inline-flex justify-self-center self-center my-4">...</span>
            <input type="number" id="weight" name="weight" required min={1} className="p-2 inline-flex justify-self-center self-center text-center bg-stone-700 border shadow-sm border-stone-700 placeholder-white focus:outline-none focus:border-stone-300 focus:ring-stone-300 rounded-lg focus:ring-1 my-4" />
            <input type="number" id="repetitions" name="repetitions" required min={1} className="p-2 inline-flex justify-self-center self-center text-center bg-stone-700 border shadow-sm border-stone-700 placeholder-white focus:outline-none focus:border-stone-300 focus:ring-stone-300 rounded-lg focus:ring-1 my-4" />
            <input type="checkbox" id="status" name="status" required className="p-2 h-7 w-7 inline-flex justify-self-center self-center text-center bg-stone-700 my-4" />
            <TrashIcon onClick={() => {if (isMounted.current) removeSet(setNumber - 1)}} className="h-7 w-7 justify-self-end self-center text-stone-300 mr-5 hover:cursor-pointer" />
        </div>
    );
}

export default Set;
