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

const operatorGroups = [
    {
        category: 'Asignación',
        symbol: '=',
        description: 'Son símbolos especiales que realizan operaciones sobre operandos.',
        code: ejemploAsignacion

    },
    {
        category: 'Asignación(?) Compuesta',
        symbol: '+= -=',
        description: 'Opera y reasigna en un solo paso.',
        code: ejemploAsignacionCompuesta

    },
    {
        category: 'Aritmética',
        symbol: '+ - * /',
        description: 'Operaciones matemáticas estándar: Suma +, Resta -, Multiplicación *, División /.',
        code: ejemploAritmetica
    },
    {
        category: 'Modulo',
        symbol: '%',
        description: 'Devuelve el resto de una división. Fundamental para lógica cíclica (par/impar, relojes, patrones',
        code: ejemploModulo
    },
    {
        category: 'Exponenciación',
        symbol: '**',
        description: 'Eleva un número a la potencia de otro.',
        code: ejemploExponenciacion
    },
    {
        category: 'Unarios',
        symbol: '++ --',
        description: 'Incrementa o decrementa el valor en 1.',
        code: ejemploUnarios
    },
    {
        category: 'Relacionales',
        symbol: '> < >= <=',
        description: 'Comparan dos valores y retornan un booleano (true / false).',
        code: ejemploComparacion
    },
    {
        category: 'Igualdad',
        symbol: '== ===',
        description: 'Compara dos valores y retorna un booleano (true / false).',
        code: ejemploIgualdad
    },
    {
        category: 'Lógicos',
        symbol: '&& || !',
        description: 'Conectan expresiones de verdad: Y (&&), O (||), NO (!).',
        code: ejemploLogicos
    }

]

const Operators = () => {
    return (
        <div className={styles.container}>
            <h2>
                Operadores
            </h2>

            <section >
                <table>
                    <thead>
                        <tr>
                            <th>Categoría</th>
                            <th>Símbolo</th>
                            <th>Descripción</th>
                            <th>Código</th>
                        </tr>
                    </thead>
                    <tbody>

                        {operatorGroups.map((operator) => (
                            <tr key={operator.category}>
                                <td>{operator.category}</td>
                                <td>{operator.symbol}</td>
                                <td>{operator.description}</td>
                                <td><ViewCode code={operator.code} /></td>
                            </tr>
                        ))}
                    </tbody>
                </table>

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
