import React from 'react';
import ViewCode from "../../../components/reusables/ViewCode/ViewCode";
import {
    ejemploIf,
    ejemploSwitch,
    ejemploTernario,
    ejemploShortCircuit,
    ejemploGuardClause
} from "../../../data/codes/conditionals";

const Conditionals = () => {
    return (
        <div className="logic-conditionals">
            <h2 style={{ marginBottom: '1.5rem', borderBottom: '2px solid #eee', paddingBottom: '0.5rem' }}>Estructuras de Control</h2>
            <p style={{ marginBottom: '2.5rem', fontSize: '1.05rem', color: '#555' }}>
                Mecanismos para bifurcar el código y tomar decisiones basadas en el estado de los datos.
            </p>

            {/* IF / ELSE */}
            <section style={{ marginBottom: '3rem' }}>
                <h3>If / Else If / Else</h3>
                <p style={{ marginBottom: '0.5rem' }}>
                    La estructura base. Evalúa una condición booleana para decidir qué bloque ejecutar.
                </p>
                <ViewCode code={ejemploIf} />
            </section>

            {/* SWITCH */}
            <section style={{ marginBottom: '3rem' }}>
                <h3>Switch</h3>
                <p style={{ marginBottom: '0.5rem' }}>
                    Ideal para comparar una misma variable contra múltiples valores posibles. Usa igualdad estricta (<code>===</code>).
                </p>
                <ViewCode code={ejemploSwitch} />
            </section>

            {/* TERNARIO */}
            <section style={{ marginBottom: '3rem' }}>
                <h3>Operador Ternario</h3>
                <p style={{ marginBottom: '0.5rem' }}>
                    El único condicional que es una <strong>expresión</strong> (retorna valor). Úsalo para asignaciones simples en una línea.
                </p>
                <ViewCode code={ejemploTernario} />
            </section>

            {/* SHORT CIRCUIT */}
            <section style={{ marginBottom: '3rem' }}>
                <h3>Short-Circuit (&& / ||)</h3>
                <p style={{ marginBottom: '0.5rem' }}>
                    Uso de operadores lógicos para control de flujo. <code>&&</code> ejecuta si es verdadero ("Guard"), <code>||</code> asigna si es falso ("Default").
                </p>
                <ViewCode code={ejemploShortCircuit} />
            </section>

            {/* PATRONES: GUARD CLAUSE */}
            <section style={{ marginBottom: '3rem' }}>
                <h3>Patrón: Guard Clauses</h3>
                <p style={{ marginBottom: '0.5rem' }}>
                    Técnica "Early Return". En lugar de anidar múltiples <code>if</code>, verifica los errores primero y sal de la función.
                </p>
                <ViewCode code={ejemploGuardClause} />
            </section>
        </div>
    );
};

export default Conditionals;
