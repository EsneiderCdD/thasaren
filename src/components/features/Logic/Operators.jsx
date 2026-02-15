import React from 'react';
import ViewCode from "../../../components/reusables/ViewCode/ViewCode";
import {
    ejemploAsignacion,
    ejemploAritmetica,
    ejemploModulo,
    ejemploUnarios,
    ejemploExponenciacion,
    ejemploComparacion,
    ejemploIgualdad,
    ejemploLogicos
} from "../../../data/codes/operators";

const Operators = () => {
    return (
        <div className="logic-operators">

            <h2 style={{ marginBottom: '1.5rem', borderBottom: '2px solid #eee', paddingBottom: '0.5rem' }}>
                Operadores
            </h2>
            <p style={{ marginBottom: '2.5rem', fontSize: '1.05rem', color: '#555' }}>
                Son símbolos especiales que realizan operaciones sobre operandos.
            </p>

            {/* ASIGNACIÓN */}
            <section style={{ marginBottom: '3rem' }}>
                <h3>Asignación</h3>
                <p style={{ marginBottom: '0.5rem' }}>
                    Guarda el valor de la derecha en la variable de la izquierda.
                </p>
                <ViewCode code={ejemploAsignacion} />
            </section>

            {/* ARITMÉTICA */}
            <section style={{ marginBottom: '3rem' }}>
                <h3>Aritmética Básica</h3>
                <p style={{ marginBottom: '0.5rem' }}>
                    Operaciones matemáticas estándar: Suma <code>+</code>, Resta <code>-</code>, Multiplicación <code>*</code>, División <code>/</code>.
                </p>
                <ViewCode code={ejemploAritmetica} />
            </section>

            {/* MÓDULO */}
            <section style={{ marginBottom: '3rem' }}>
                <h3>Módulo (%)</h3>
                <p style={{ marginBottom: '0.5rem' }}>
                    Devuelve el <strong>resto</strong> de una división. Fundamental para lógica cíclica (par/impar, relojes, patrones).
                </p>
                <ViewCode code={ejemploModulo} />
            </section>

            {/* EXPONENCIACIÓN */}
            <section style={{ marginBottom: '3rem' }}>
                <h3>Exponenciación (**)</h3>
                <ViewCode code={ejemploExponenciacion} />
            </section>

            {/* UNARIOS */}
            <section style={{ marginBottom: '3rem' }}>
                <h3>Incremento y Decremento</h3>
                <p style={{ marginBottom: '0.5rem' }}>
                    Operadores unarios que modifican el valor en <code>1</code>.
                </p>
                <ViewCode code={ejemploUnarios} />
            </section>

            {/* RELACIONALES */}
            <section style={{ marginBottom: '3rem' }}>
                <h3>Relacionales (Comparación)</h3>
                <p style={{ marginBottom: '0.5rem' }}>
                    Comparan dos valores y retornan un booleano (<code>true</code> / <code>false</code>).
                </p>
                <ViewCode code={ejemploComparacion} />
            </section>

            {/* IGUALDAD */}
            <section style={{ marginBottom: '3rem' }}>
                <h3>Igualdad</h3>
                <p style={{ marginBottom: '0.5rem' }}>
                    Distinción crítica: <code>===</code> compara valor y tipo (Estricto). <code>==</code> convierte tipos intentando igualar (Débil).
                </p>
                <ViewCode code={ejemploIgualdad} />
            </section>

            {/* LÓGICOS */}
            <section style={{ marginBottom: '3rem' }}>
                <h3>Lógicos (Booleanos)</h3>
                <p style={{ marginBottom: '0.5rem' }}>
                    Conectan expresiones de verdad: Y (<code>&&</code>), O (<code>||</code>), NO (<code>!</code>).
                </p>
                <ViewCode code={ejemploLogicos} />
            </section>

        </div>
    );
};

export default Operators;
