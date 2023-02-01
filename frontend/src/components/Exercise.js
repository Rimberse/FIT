import React from "react";

const Exercise = () => {

    return (
        <div className="table-fixed grid grid-rows-4 divide-y divide-stone-700 rounded shadow-md shadow-black text-center align-middle text-white text-base font-medium tracking-wide uppercase w-3/4 max-h-fit bg-clip-padding bg-stone-900 mx-auto my-20">
            <input type="text" id="exercise" name="exercise" placeholder="Enter exercise name" className="p-2 text-center bg-stone-700 justify-self-start w-1/4" />
            <div>
                <div className="grid grid-rows-1 grid-cols-5 gap-4">
                    <span className="p-2">Set</span>
                    <span className="p-2">Previous</span>
                    <span className="p-2">Kg / Lbs</span>
                    <span className="p-2">Reps</span>
                    <span className="p-2">Status</span>
                </div>
            </div>
            <div>
                <div className="grid grid-flow-row auto-rows-max grid-cols-5 gap-4">
                    <span className="p-2">1</span>
                    <span className="p-2">...</span>
                    <input type="number" id="weight" name="weight" required min={1} className="p-2 text-center bg-stone-700" />
                    <input type="number" id="repetitions" name="repetitions" required min={1} className="p-2 text-center bg-stone-700" />
                    <input type="checkbox" id="status" name="status" required  className="p-2 text-center bg-stone-700"/>
                </div>
            </div>
            <button className="p-2 text-center bg-white text-stone-900 justify-self-end w-1/4">Add set</button>
        </div>
    );
}

export default Exercise;
