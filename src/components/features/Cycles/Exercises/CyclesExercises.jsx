import { loop } from "../data/cyclesExercises";
import styles from "../style/Cycles.module.css";
import ViewCode from "../../../reusables/ViewCode/ViewCode";
import { Link, useParams } from "react-router-dom";


function CyclesExercises({ }) {
    const { id } = useParams();
    const currentExercise = loop.find(ex => ex.id === parseInt(id)); 

    const currentId = parseInt(id);
    const prevId = currentId - 1;
    const nextId = currentId + 1;

    return (
        <div className={styles.container}>
            <h1>Ejercicio de ciclos</h1>
            <h2>{currentExercise.title}</h2>
            <p>{currentExercise.description}</p>
            <ViewCode code = {currentExercise.code}/>

            <div>
                {prevId > 0 && 
                    <Link to={`/cycles/exercises/${prevId}`}>
                        <button>Previous</button>
                    </Link>
                } 
                {nextId <= loop.length && (
                    <Link to={`/cycles/exercises/${nextId}`}>
                        <button>Next</button>
                    </Link>
                )}
            </div>
        </div>
    );
};
export default CyclesExercises;