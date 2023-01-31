import React from "react";

const Exercise = () => {

    return (
        <div>
            <h2>Exercise name</h2>
            <div>
                <div>
                    <span>Set</span>
                    <span>Previous</span>
                    <span>Kg / Lbs</span>
                    <span>Reps</span>
                    <span>Status</span>
                </div>
            </div>
            <div>
                <div>
                    <span></span>
                    <span>...</span>
                    <label htmlFor="name">Weight</label>
                    <input type="number" id="weight" name="weight" required min={1} />
                    <input type="number" id="repetitions" name="repetitions" required min={1} />
                    <input type="checkbox" id="status" name="status" required />
                </div>
            </div>
            <button>Add set</button>
        </div>
    );
}

export default Exercise;
