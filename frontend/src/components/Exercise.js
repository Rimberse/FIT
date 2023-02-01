import React from "react";

const Exercise = () => {

    return (
        <div className="table-fixed grid grid-rows-4 gap-4 divide-y divide-slate-500 rounded shadow-lg shadow-black w-3/4 max-h-fit mx-auto my-20">
            <input type="text" id="exercise" name="exercise" placeholder="Enter exercise name" className="p-2" />
            <div>
                <div className="grid grid-rows-1 grid-cols-5 gap-4 text-center align-middle">
                    <span className="p-2">Set</span>
                    <span className="p-2">Previous</span>
                    <span className="p-2">Kg / Lbs</span>
                    <span className="p-2">Reps</span>
                    <span className="p-2">Status</span>
                </div>
            </div>
            <div>
                <div className="grid grid-rows-1 grid-cols-5 gap-4 text-center align-middle">
                    <span className="p-2">1</span>
                    <span className="p-2">...</span>
                    <input type="number" id="weight" name="weight" required min={1} className="p-2" />
                    <input type="number" id="repetitions" name="repetitions" required min={1} className="p-2" />
                    <input type="checkbox" id="status" name="status" required  className="p-2"/>
                </div>
            </div>
            <button>Add set</button>
        </div>
    );
}

export default Exercise;
