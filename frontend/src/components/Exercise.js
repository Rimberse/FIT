import React from "react";

const Exercise = () => {

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
            <div className="grid grid-flow-row auto-rows-max grid-cols-5 gap-x-8 place-content-evenly">
                <span className="p-2 inline-flex justify-center items-center">1</span>
                <span className="p-2 inline-flex justify-center items-center">...</span>
                <input type="number" id="weight" name="weight" required min={1} className="p-2 inline-flex justify-center items-center text-center bg-stone-700 border shadow-sm border-stone-700 placeholder-white focus:outline-none focus:border-stone-300 focus:ring-stone-300 rounded-lg focus:ring-1" />
                <input type="number" id="repetitions" name="repetitions" required min={1} className="p-2 inline-flex justify-center items-center text-center bg-stone-700 border shadow-sm border-stone-700 placeholder-white focus:outline-none focus:border-stone-300 focus:ring-stone-300 rounded-lg focus:ring-1" />
                <input type="checkbox" id="status" name="status" required  className="p-2 inline-flex justify-center items-center text-center bg-stone-700"/>
            </div>
            <button className="p-4 text-center bg-stone-300 text-stone-900 justify-self-end m-4 w-1/4 font-bold tracking-wide uppercase hover:bg-stone-700 hover:text-white rounded-md">Add set</button>
        </div>
    );
}

export default Exercise;
