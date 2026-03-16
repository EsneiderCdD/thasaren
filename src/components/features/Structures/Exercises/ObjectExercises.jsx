import React from 'react';
import ViewCode from '../../../reusables/ViewCode/ViewCode';
import { objectExercises } from '../data/objectExercises';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styles from "../style/Structures.module.css";


function ObjectExercises({ }) {

    const { id } = useParams();
    const currentExercise = objectExercises.find((ex => ex.id === parseInt(id)));

    const currentId = parseInt(id);
    const prevId = currentId - 1;
    const nextId = currentId + 1;

    if (!currentExercise) return <div className={styles.container}>Ejercicio no encontrado</div>;

    return (
        <div className={styles.container}>
            <h1>
                Ejercicios de Objetos
            </h1>
            <h2>{currentExercise.title}</h2>
            <h3>{currentExercise.description}</h3>
            <p>{currentExercise.runway}</p>
            {Array.isArray(currentExercise.code) ? (
                currentExercise.code.map((c, index) => <ViewCode key={index} code={c} />)
            ) : (
                <ViewCode code={currentExercise.code} />
            )}
            <div className={styles.navigation_buttons}>
                {prevId > 0 &&
                    <Link to={`/objects/${prevId}`}>
                        <button>Previous</button>
                    </Link>
                }
                {nextId <= objectExercises.length && (
                    <Link to={`/objects/${nextId}`}>
                        <button>Next</button>
                    </Link>
                )}
            </div>

        </div>
    );
};
export default ObjectExercises;
