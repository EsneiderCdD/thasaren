import React from 'react';
import ViewCode from '../../../reusables/ViewCode/ViewCode';
import { logicExercises } from '../data/logicExercises';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styles from "../style/Logic.module.css";


function LogicExercises({ }) {

    const { id } = useParams();
    const currentExercise = logicExercises.find((ex => ex.id === parseInt(id)));

    const currentId = parseInt(id);
    const prevId = currentId - 1;
    const nextId = currentId + 1;

    return (
        <div className={styles.container}>
            <h1>
                Ejercicios de Logica
            </h1>
            <h2>{currentExercise.title}</h2>
            <h3>{currentExercise.description}</h3>
            <p>{currentExercise.runway}</p>
            <ViewCode code={currentExercise.code} />

            <div>
                {prevId > 0 &&
                    <Link to={`/logic/exercises/${prevId}`}>
                        <button>Previous</button>
                    </Link>
                }
                {nextId <= logicExercises.length && (
                    <Link to={`/logic/exercises/${nextId}`}>
                        <button>Next</button>
                    </Link>
                )}
            </div>

        </div>
    );
};
export default LogicExercises