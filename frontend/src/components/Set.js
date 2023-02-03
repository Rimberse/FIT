import React from "react";

const Set = ({ setNumber }) => {
    return (
        <div className="grid grid-flow-row auto-rows-max grid-cols-5 gap-x-8 place-content-evenly">
            <span className="p-2 inline-flex justify-center items-cente my-4r">{setNumber}</span>
            <span className="p-2 inline-flex justify-center items-center my-4">...</span>
            <input type="number" id="weight" name="weight" required min={1} className="p-2 inline-flex justify-center items-center text-center bg-stone-700 border shadow-sm border-stone-700 placeholder-white focus:outline-none focus:border-stone-300 focus:ring-stone-300 rounded-lg focus:ring-1 my-4" />
            <input type="number" id="repetitions" name="repetitions" required min={1} className="p-2 inline-flex justify-center items-center text-center bg-stone-700 border shadow-sm border-stone-700 placeholder-white focus:outline-none focus:border-stone-300 focus:ring-stone-300 rounded-lg focus:ring-1 my-4" />
            <input type="checkbox" id="status" name="status" required className="p-2 inline-flex justify-center items-center text-center bg-stone-700 my-4" />
        </div>
    );
}

export default Set;
