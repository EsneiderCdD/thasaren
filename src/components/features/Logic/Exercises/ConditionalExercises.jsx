import React from 'react';
import ViewCode from '../../../reusables/ViewCode/ViewCode';
import { conditionalExercises } from '../data/conditionalExercises';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styles from "../style/Logic.module.css";


function ConditionalExercises({ }) {

    const { id } = useParams();
    const currentExercise = conditionalExercises.find((ex => ex.id === parseInt(id)));

    const currentId = parseInt(id);
    const prevId = currentId - 1;
    const nextId = currentId + 1;

    if (!currentExercise) return <div>Ejercicio no encontrado</div>;

    return (
        <div className={styles.container}>
            <h1>
                Ejercicios de Estructuras de Control
            </h1>
            <h2>{currentExercise.title}</h2>
            <h3>{currentExercise.description}</h3>
            <p>{currentExercise.runway}</p>
            <ViewCode code={currentExercise.code} />

            <div className={styles.navigation_buttons}>
                {prevId > 0 &&
                    <Link to={`/conditionals/exercises/${prevId}`}>
                        <button>Anterior</button>
                    </Link>
                }
                {nextId <= conditionalExercises.length && (
                    <Link to={`/conditionals/exercises/${nextId}`}>
                        <button>Siguiente</button>
                    </Link>
                )}
            </div>

        </div>
    );
};
export default ConditionalExercises
