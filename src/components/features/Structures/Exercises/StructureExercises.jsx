import React from 'react';
import ViewCode from '../../../reusables/ViewCode/ViewCode';
import { structureExercises } from '../data/structureExercises';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styles from "../style/Structures.module.css";


function StructureExercises({ }) {

    const { id } = useParams();
    const currentExercise = structureExercises.find((ex => ex.id === parseInt(id)));

    const currentId = parseInt(id);
    const prevId = currentId - 1;
    const nextId = currentId + 1;

    if (!currentExercise) return <div className={styles.container}>Ejercicio no encontrado</div>;

    return (
        <div className={styles.container}>
            <h1>
                Ejercicios de Estructuras
            </h1>
            <h2>{currentExercise.title}</h2>
            <h3>{currentExercise.description}</h3>
            <p>{currentExercise.runway}</p>
            <ViewCode code={currentExercise.code} />

            <div>
                {prevId > 0 &&
                    <Link to={`/structures/exercises/${prevId}`}>
                        <button>Previous</button>
                    </Link>
                }
                {nextId <= structureExercises.length && (
                    <Link to={`/structures/exercises/${nextId}`}>
                        <button>Next</button>
                    </Link>
                )}
            </div>

        </div>
    );
};
export default StructureExercises;
