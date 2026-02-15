import ViewCode from "../../../components/reusables/ViewCode/ViewCode";
import {
    ejemploAsignacion,
    ejemploAsignacionCompuesta,
    ejemploAritmetica,
    ejemploModulo,
    ejemploUnarios,
    ejemploExponenciacion,
    ejemploComparacion,
    ejemploIgualdad,
    ejemploLogicos,
    ejemploShortCircuit,
    ejemploTernario
} from "../../../data/codes/operators";
import styles from "./style/Logic.module.css";

const Operators = () => {
    return (
        <div className={styles.container}>
            <h2>
                Operadores
            </h2>
            <p >
                Son símbolos especiales que realizan operaciones sobre operandos.
            </p>

            {/* assignment */}
            <section className={styles.assignment}>
                <h3>Asignación</h3>
                <p>
                    Guarda el valor de la derecha en la variable de la izquierda.
                </p>
                <ViewCode code={ejemploAsignacion} />
                <p>
                    <strong>Compuesta (+=, -=)</strong>: Opera y reasigna en un solo paso.
                </p>
                <ViewCode code={ejemploAsignacionCompuesta} />
            </section>

            {/* arithmetic */}
            <section className={styles.arithmetic}>
                <h3>Aritmética Básica</h3>
                <p >
                    Operaciones matemáticas estándar: Suma <code>+</code>, Resta <code>-</code>, Multiplicación <code>*</code>, División <code>/</code>.
                </p>
                <ViewCode code={ejemploAritmetica} />
            </section>

            {/* module */}
            <section className={styles.module}>

                <p>
                    <strong>Módulo (%)</strong>  Devuelve el <strong>resto</strong> de una división. Fundamental para lógica cíclica (par/impar, relojes, patrones).
                </p>
                <ViewCode code={ejemploModulo} />
            </section>

            {/* exponentiation */}
            <section className={styles.exponentiation}>
                <p><strong>Exponenciación (**)</strong> Eleva un número a la potencia de otro.</p>
                <ViewCode code={ejemploExponenciacion} />
            </section>

            {/* unaries */}
            <section className={styles.unaries}>
                <h3>Incremento y Decremento</h3>
                <p>
                    Operadores unarios que modifican el valor en <code>1</code>.
                </p>
                <ViewCode code={ejemploUnarios} />
            </section>

            {/* RELATIONAL */}
            <section className={styles.relational}>
                <h3>Relacionales (Comparación)</h3>
                <p>
                    Comparan dos valores y retornan un booleano (<code>true</code> / <code>false</code>).
                    <br />
                    Incluyen: Mayor que (<strong>&gt;</strong>), Menor que (<strong>&lt;</strong>),
                    Mayor o igual que (<strong>&gt;=</strong>) y Menor o igual que (<strong>&lt;=</strong>).
                </p>
                <ViewCode code={ejemploComparacion} />
            </section>

            {/* EQUALITY */}
            <section className={styles.equality}>
                <h3>Igualdad</h3>
                <p>
                    Distinción crítica: <strong>===</strong> compara valor y tipo (Estricto). <strong>==</strong> convierte tipos intentando igualar (Débil).
                </p>
                <ViewCode code={ejemploIgualdad} />
            </section>

            {/* boolean */}
            <section className={styles.boolean}>
                <h3>Lógicos (Booleanos)</h3>
                <p>
                    Conectan expresiones de verdad: Y <strong>(<code>&&</code>)</strong>, O <strong>(<code>||</code>)</strong>, NO <strong>(<code>!</code>)</strong>.
                </p>
                <ViewCode code={ejemploLogicos} />
            </section>

            {/* short_circuit */}
            <section className={styles.short_circuit}>
                <h3 className={styles.text_success}>Short-Circuit (&& / ||)</h3>
                <p>
                    Uso de operadores lógicos para control de flujo. <strong><code>&&</code></strong> ejecuta si es verdadero ("Guard"), <strong><code>||</code></strong> asigna si es falso ("Default").
                </p>
                <ViewCode code={ejemploShortCircuit} />
            </section>

            {/* ternary */}
            <section className={styles.ternary}>
                <h3>Operador Ternario</h3>
                <p>
                    El único condicional que es una <strong>expresión</strong> (retorna valor). Úsalo para asignaciones simples en una línea.
                </p>
                <ViewCode code={ejemploTernario} />
            </section>

        </div>
    );
};

export default Operators;
