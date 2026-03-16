import React from 'react';
import ViewCode from '../../../reusables/ViewCode/ViewCode';
import { operatorExercises } from '../data/operatorExercises';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styles from "../../Logic/style/Logic.module.css";


function OperatorExercises({ }) {

    const { id } = useParams();
    const currentExercise = operatorExercises.find((ex => ex.id === parseInt(id)));

    const currentId = parseInt(id);
    const prevId = currentId - 1;
    const nextId = currentId + 1;

    if (!currentExercise) return <div className={styles.container}>Ejercicio no encontrado</div>;

    return (
        <div className={styles.container}>
            <h1>
                Ejercicios de Operadores
            </h1>
            <h2>{currentExercise.title}</h2>
            <h3>{currentExercise.description}</h3>
            <ViewCode code={currentExercise.code} />

            <div className={styles.navigation_buttons}>
                {prevId > 0 &&
                    <Link to={`/operators/exercises/${prevId}`}>
                        <button>Anterior</button>
                    </Link>
                }
                {nextId <= operatorExercises.length && (
                    <Link to={`/operators/exercises/${nextId}`}>
                        <button>Siguiente</button>
                    </Link>
                )}
            </div>

        </div>
    );
};
export default OperatorExercises
