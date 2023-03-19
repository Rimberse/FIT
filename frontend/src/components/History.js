import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Entry from "./Entry";
import useAxios from "../utils/UseAxios";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const History = () => {
    const [workouts, setWorkouts] = useState([]);
    const [workoutsOnCurrentPage, setWorkoutsOnCurrentPage] = useState([]);
    const [page, setPage] = useState(1);
    // Offset defines the number of history entries displayed on each page
    const [offset, setOffset] = useState(25);
    const api = useAxios();

    // Loads up data retried from API
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
                                setWorkoutsOnCurrentPage(allWorkouts.slice(0, offset));
                            });
                    });
            });
    }, []);

    // Dynamically alters contents of displayed workout entries during page navigation
    useEffect(() => {
        const offsetSize = (page - 1) * offset;
        setWorkoutsOnCurrentPage(workouts.slice(offsetSize, offsetSize + offset));
    }, [page]);

    const onSwitchToPreviousPage = () => {
        if (page == 1)
            return;

        setPage(page - 1);
    }

    const onSwitchToNextPage = () => {
        if (page + 1 > workouts.length / offset)
            return;

        setPage(page + 1);
    }

    return (
        <div>
            <Navbar />
            <div className="text-violet-700 text-base font-medium tracking-wide max-h-fit bg-clip-padding p-8 w-3/4 mx-auto my-40">
                {workoutsOnCurrentPage.map((workout, index) => <Entry workout={workout} key={index} />)}
            </div>
            <div className="flex justify-center content-center text-xl text-violet-700 font-semibold text-center align-middle">
                <button disabled={(page > 1) ? false : true} onClick={() => onSwitchToPreviousPage()} className="h-16 w-16 hover:cursor-pointer p-5 rounded-full shadow-sm shadow-violet-700 m-5"><ChevronLeftIcon /></button>
                <span className="h-16 w-16 p-5 rounded-full shadow-sm shadow-violet-700 m-5">{page}</span>
                <button disabled={(page + 1 < workouts.length / offset) ? false : true} onClick={() => onSwitchToNextPage()} className="h-16 w-16 hover:cursor-pointer p-5 rounded-full shadow-sm shadow-violet-700 m-5"><ChevronRightIcon /></button>
            </div>
        </div>
    );
};

export default History;
