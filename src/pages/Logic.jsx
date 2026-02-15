import ViewCode from "../components/reusables/ViewCode/ViewCode";
import { ejemploIf, ejemploTernario, ejemploSwitch, ejemploShortCircuit } from "../data/codes/logic";

const LogicPage = () => {
    return (
        <div className="container" style={{ padding: '2rem 1rem' }}>
            <h1>Lógica: Control de Flujo</h1>

            <p>El código no es lineal; está lleno de bifurcaciones. El control de flujo permite al programa tomar decisiones, ejecutando diferentes bloques de código según el estado de los datos.</p>

            <section style={{ marginTop: '3rem' }}>
                <h2>Sentencia Condicional (If/Else)</h2>
                <ViewCode code={ejemploIf} />
                <p>Evalúa una expresión booleana. Si es verdadera, ejecuta el primer bloque; si es falsa, salta al `else if` o `else`. Es la estructura de decisión fundamental.</p>
            </section>

            <section style={{ marginTop: '3rem' }}>
                <h2>Operador Ternario</h2>
                <ViewCode code={ejemploTernario} />
                <p>La única estructura condicional que es una <strong>expresión</strong> (retorna un valor). Ideal para asignaciones simples o renderizado condicional. Sintaxis: <code>condición ? valor_true : valor_false</code>.</p>
            </section>

            <section style={{ marginTop: '3rem' }}>
                <h2>Selección Múltiple (Switch)</h2>
                <ViewCode code={ejemploSwitch} />
                <p>Evalúa una expresión y compara su valor con múltiples casos (`case`) usando igualdad estricta. El `break` evita que la ejecución "caiga" a los siguientes casos. `default` cubre cualquier valor no coincidente.</p>
            </section>

            <section style={{ marginTop: '3rem' }}>
                <h2>Evaluación de Cortocircuito</h2>
                <ViewCode code={ejemploShortCircuit} />
                <p>Uso idiomático de operadores lógicos `&&` y `||` para control de flujo.</p>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    <li><strong>Guard (&&)</strong>: "Si esto existe, entonces haz esto". Si el primer operando es falso, el segundo nunca se evalúa.</li>
                    <li><strong>Default (||)</strong>: "Usa esto, o si no hay nada, usa este valor por defecto". Si el primero es verdadero, el segundo se ignora.</li>
                </ul>
            </section>
        </div>
    );
};

export default LogicPage;
