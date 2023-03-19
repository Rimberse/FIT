import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Entry from "./Entry";
import useAxios from "../utils/UseAxios";

const History = () => {
    const [workouts, setWorkouts] = useState([]);
    const api = useAxios();

    useEffect(() => {
        const fetchData = async (URL) => {
            try {
                return await api.get(URL);
            } catch {
                console.warn('Something went wrong. Couldn\'t fetch workout related info');
            }
        }

        let allWorkouts, allExercises, allSets;

        fetchData('workouts/')
            .then(response => {
                allWorkouts = response.data;

                fetchData('exercises/')
                    .then(response => {
                        allExercises = response.data;

                        fetchData('sets/')
                            .then(response => {
                                allSets = response.data;

                                allExercises.forEach(exercise => exercise.sets = allSets.filter(set => set.exercise === exercise.id));
                                allWorkouts.forEach(workout => {
                                    workout.date = new Date(workout.date).toLocaleString('fr-FR');
                                    workout.exercises = allExercises.filter(exercise => exercise.workout === workout.id);
                                });

                                setWorkouts(allWorkouts.reverse());
                            });
                    });
            });
    }, []);

    return (
        <div>
            <Navbar />
            <div className="text-violet-700 text-base font-medium tracking-wide max-h-fit bg-clip-padding p-8 w-3/4 mx-auto my-40">
                {workouts.map((workout, index) => <Entry workout={workout} key={index} />)}
            </div>
        </div>
    );
};

export default History;
