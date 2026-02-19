
import ViewCode from "../../../components/reusables/ViewCode/ViewCode";
import {
    definicionBucle,
    bucleWhile,
    bucleDoWhile,
    bucleFor,
    bucleForIn,
    bucleForOf,
    breakContinue
} from "../../../data/codes/cycles";
import styles from "./style/Cycles.module.css";

const Cycles = () => {
    return (
        <section className={styles.cycles}>
            <h2>El Ciclo (Bucles e Iteraciones)</h2>
            <p>
                La capacidad de <strong>repetir</strong> una instrucción es la base de la automatización.
                Los bucles nos permiten ejecutar un bloque de código múltiples veces, ya sea un número fijo o mientras se cumpla una condición.
            </p>

            <div className={styles.block}>
                <h3>Definición Básica</h3>
                <p>
                    Un bucle consta de una <strong>condición</strong> y un <strong>cuerpo</strong>.
                    Si la condición es verdadera, el cuerpo se ejecuta. Esto se repite hasta que la condición sea falsa.
                </p>
                <ViewCode code={definicionBucle} />
            </div>

            <h3>Bucles Condicionales (Indeterminados)</h3>
            <p>
                Se usan cuando <strong>no sabemos cuántas veces</strong> vamos a repetir algo, sino que dependemos de que algo ocurra (o deje de ocurrir).
            </p>

            <div className={styles.block}>
                <h4>While (Mientras)</h4>
                <p>
                    Evalúa la condición <strong>antes</strong> de entrar. Si es falsa de inicio, nunca se ejecuta.
                </p>
                <ViewCode code={bucleWhile} />
            </div>

            <div className={styles.block}>
                <h4>Do...While (Hacer... Mientras)</h4>
                <p>
                    Garantiza que el código se ejecute <strong>al menos una vez</strong>, porque evalúa la condición al final.
                </p>
                <ViewCode code={bucleDoWhile} />
            </div>

            <h3>Bucles de Conteo (Determinados)</h3>
            <p>
                Se usan cuando sabemos (o podemos calcular) el número exacto de repeticiones. Ideal para recorrer listas o contar.
            </p>

            <div className={styles.block}>
                <h4>For (Clásico)</h4>
                <p>
                    El estándar en casi todos los lenguajes. Tienes control total sobre el índice: dónde empieza, dónde termina y cómo avanza.
                </p>
                <ViewCode code={bucleFor} />
            </div>

            <h3>Iteración de Estructuras</h3>
            <p>
                JavaScript moderno ofrece formas especializadas para recorrer Objetos y Arrays sin lidiar con índices manuales.
            </p>

            <div className={styles.block}>
                <h4>For...in (Para Objetos)</h4>
                <p>
                    Diseñado para iterar sobre las <strong>claves</strong> (propiedades) de un objeto.
                </p>
                <ViewCode code={bucleForIn} />
            </div>

            <div className={styles.block}>
                <h4>For...of (Para Colecciones)</h4>
                <p>
                    Diseñado para iterar sobre los <strong>valores</strong> de elementos iterables (como Arrays o Strings). Es más limpio que el <code>for</code> clásico.
                </p>
                <ViewCode code={bucleForOf} />
            </div>

            <div className={styles.block}>
                <h3>Control de Flujo (Break / Continue)</h3>
                <p>
                    A veces necesitamos alterar el ciclo manualmente.
                </p>
                <ul>
                    <li><strong>Continue:</strong> "Salta" la vuelta actual y pasa a la siguiente.</li>
                    <li><strong>Break:</strong> "Rompe" el bucle por completo y sale de él.</li>
                </ul>
                <ViewCode code={breakContinue} />
            </div>

        </section>
    );
};

export default Cycles;
