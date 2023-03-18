import React from "react";

const History = () => {

    return (
        <div className="w-3/4 mx-auto my-48">
            <div className="flex justify-between content-center">
                <span>Workout name</span>
                <span>Length</span>
                <span>Date</span>
            </div>
            <div>
                <ul>
                    <li>
                        <div>Exercise name</div>
                        <p>Exercise instructions</p>
                        <div>
                            <span>Set</span>
                            <span>Previous</span>
                            <span>Kg</span>
                            <span>Reps</span>
                            <span>Completion</span>
                        </div>
                        <ul>
                            <li>
                                <div>
                                    <span>1</span>
                                    <span>...</span>
                                    <span>60</span>
                                    <span>7</span>
                                    <span>Yes</span>
                                </div>
                            </li>
                        </ul>
                    </li>
                </ul>

            </div>
        </div>
    );
};

export default History;
