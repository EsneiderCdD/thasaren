
import ViewCode from "../../../components/reusables/ViewCode/ViewCode";
import {
    declaracionArray,
    metodosMutables,
    metodosInmutables,
    destructuringArray,
    spreadArray
} from "../../../data/codes/structures";
import styles from "./style/Structures.module.css";

const Arrays = () => {
    return (
        <section className={styles.arrays}>
            <h2>Arrays (Colecciones)</h2>
            <p>
                Listas ordenadas de elementos, indexados por posición numérica.
            </p>

            <div className={styles.block}>
                <h3>Declaración y Longitud</h3>
                <p>
                    Literal con corchetes <code>[]</code>. Propiedad <code>length</code> para obtener el tamaño.
                </p>
                <ViewCode code={declaracionArray} />
            </div>

            <div className={styles.block}>
                <h3>Mutación (Pilas/Colas)</h3>
                <p>
                    Métodos que modifican el array original. <code>push/pop</code> son rápidos, <code>shift/unshift</code> lentos.
                </p>
                <ViewCode code={metodosMutables} />
            </div>

            <div className={styles.block}>
                <h3>High Order Methods (Iteración)</h3>
                <p>
                    Funciones que reciben a otra función para procesar datos. <strong>No mutan</strong> el original, retornan uno nuevo.
                </p>
                <ViewCode code={metodosInmutables} />
            </div>

            <div className={styles.block}>
                <h3>Destructuring (Posicional)</h3>
                <p>
                    Extraer valores a variables según su posición en el array.
                </p>
                <ViewCode code={destructuringArray} />
            </div>

            <div className={styles.block}>
                <h3>Spread Operator (...)</h3>
                <p>
                    Expandir los elementos de un array para crear nuevas copias o combinar listas.
                </p>
                <ViewCode code={spreadArray} />
            </div>

        </section>
    );
};

export default Arrays;
