
import ViewCode from "../../../components/reusables/ViewCode/ViewCode";
import {
    declaracionArray,
    accesoArray,
    modificarArray,
    metodoPush,
    metodoPop,
    metodoUnshift,
    metodoShift,
    metodoMap,
    metodoFilter,
    metodoFind,
    destructuringArray,
    spreadArray
} from "../../../data/codes/structures";
import styles from "./style/Structures.module.css";

const Arrays = () => {
    return (
        <section className={styles.arrays}>
            <h2>Arrays (Listas)</h2>
            <p>
                Colecciones ordenadas de elementos, donde cada posición tiene un <strong>índice numérico</strong> (empezando en 0).
            </p>

            <div className={styles.block}>
                <h3>Declaración y Acceso</h3>
                <p>
                    Se crean con corchetes <code>[]</code>. Para leer un valor, usamos su posición numérica.
                </p>
                <ViewCode code={declaracionArray} />
                <p className={styles.text_muted}>
                    Intentar acceder a un índice que no existe no da error, devuelve <code>undefined</code>.
                </p>
                <ViewCode code={accesoArray} />
            </div>

            <div className={styles.block}>
                <h3>Modificación Básica</h3>
                <p>
                    Los arrays son mutables. Podemos reasignar valores en índices específicos directamente.
                </p>
                <ViewCode code={modificarArray} />
            </div>

            <h3>Métodos de Modificación (Mutables)</h3>
            <p>
                JavaScript ofrece herramientas para gestionar el array como una pila o cola. Estos métodos <strong>alteran</strong> el array original.
            </p>

            <div className={styles.block}>
                <h4>Push (Agregar al final)</h4>
                <p>
                    Añade uno o más elementos al final del array. Es una operación rápida.
                </p>
                <ViewCode code={metodoPush} />
            </div>

            <div className={styles.block}>
                <h4>Pop (Eliminar del final)</h4>
                <p>
                    Elimina el último elemento y lo devuelve. También es rápido.
                </p>
                <ViewCode code={metodoPop} />
            </div>

            <div className={styles.block}>
                <h4>Unshift (Agregar al inicio)</h4>
                <p>
                    Añade elementos al principio. Es más lento porque debe mover todos los índices existentes.
                </p>
                <ViewCode code={metodoUnshift} />
            </div>

            <div className={styles.block}>
                <h4>Shift (Eliminar del inicio)</h4>
                <p>
                    Elimina el primer elemento y lo devuelve. Obliga a re-indexar todo el array.
                </p>
                <ViewCode code={metodoShift} />
            </div>

            <h3>Métodos Funcionales (Inmutables)</h3>
            <p>
                La forma moderna de trabajar. En lugar de bucles <code>for</code>, usamos métodos que recorren el array y nos devuelven <strong>uno nuevo</strong>, dejando el original intacto.
            </p>

            <div className={styles.block}>
                <h4>Transformar (Map)</h4>
                <p>
                    Crea un array nuevo con el resultado de aplicar una función a <strong>cada elemento</strong>. Mismo tamaño que el original.
                </p>
                <ViewCode code={metodoMap} />
            </div>

            <div className={styles.block}>
                <h4>Filtrar (Filter)</h4>
                <p>
                    Crea un array nuevo solo con los elementos que cumplan una condición (devuelvan <code>true</code>).
                </p>
                <ViewCode code={metodoFilter} />
            </div>

            <div className={styles.block}>
                <h4>Buscar (Find)</h4>
                <p>
                    Devuelve el <strong>primer elemento</strong> que coincida. Si no encuentra nada, devuelve <code>undefined</code>.
                </p>
                <ViewCode code={metodoFind} />
            </div>

            <div className={styles.block}>
                <h3>Destructuring (Extracción Posicional)</h3>
                <p>
                    A diferencia de los Objetos (donde importa el nombre), en los Arrays importa la <strong>posición</strong>.
                </p>
                <p>
                    Puedes asignar los nombres de variable que quieras. Si deseas saltarte un elemento, simplemente deja el espacio vacío entre comas.
                </p>
                <ViewCode code={destructuringArray} />
            </div>

            <div className={styles.block}>
                <h3>Spread Operator (...)</h3>
                <p>
                    Una herramienta esencial para la inmutabilidad. Nos permite dos cosas clave:
                </p>
                <ul>
                    <li><strong>Combinar y Expandir:</strong> "Soltar" los elementos de un array dentro de otro.</li>
                    <li><strong>Clonar:</strong> Crear una copia nueva e independiente para evitar modificar el original por accidente.</li>
                </ul>
                <ViewCode code={spreadArray} />
            </div>

        </section>
    );
};

export default Arrays;
