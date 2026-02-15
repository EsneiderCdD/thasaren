import ViewCode from "../components/reusables/ViewCode/ViewCode";
import { ejemploDeclaracion, ejemploExpresion, ejemploParametros, ejemploScope, ejemploComparativa, ejemploModulos } from "../data/codes/action";

const ActionPage = () => {
    return (
        <div className="container" style={{ padding: '2rem 1rem' }}>
            <h1>La Acción: Funciones</h1>

            <p>Una función encapsula una tarea específica en un bloque de código reutilizable. Es el mecanismo fundamental para modularizar la lógica: recibe información (entrada), la procesa y devuelve un resultado (salida).</p>

            <section style={{ marginTop: '3rem' }}>
                <h2>Declaración y Comportamiento</h2>
                <ViewCode code={ejemploDeclaracion} />
                <p>La forma clásica define una acción con nombre. Las funciones pueden ser invocadas desde cualquier punto posterior a su declaración.</p>
            </section>

            <section style={{ marginTop: '3rem' }}>
                <h2>Expresión y Flecha (Arrow Functions)</h2>
                <ViewCode code={ejemploExpresion} />
                <p>Sintaxis moderna y concisa. Si la función consiste en una sola expresión, el <code>return</code> es implícito. Son ideales para callbacks y programación funcional.</p>
            </section>

            <section style={{ marginTop: '3rem' }}>
                <h2>Parámetros y Argumentos</h2>
                <ViewCode code={ejemploParametros} />
                <p>Las funciones aceptan datos a través de parámetros. Se pueden definir valores por defecto para manejar casos donde no se proveen argumentos.</p>
            </section>

            <section style={{ marginTop: '3rem' }}>
                <h2>Diferencia Estructural</h2>
                <ViewCode code={ejemploComparativa} />
                <p>Las <strong>Arrow Functions</strong> (<code>=&gt;</code>) no son solo "azúcar sintáctico".</p>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    <li><strong>Sintaxis:</strong> Más compacta, retorno implícito posible.</li>
                    <li><strong>Contexto (this):</strong> Heredan el <code>this</code> del padre léxico (no crean su propio contexto), ideal para callbacks y clases.</li>
                    <li><strong>Declaracion:</strong> Crean su propio contexto <code>this</code> (objeto global) y pueden ser invocadas antes de definirse (Hoisting).</li>
                </ul>
            </section>

            <section style={{ marginTop: '3rem' }}>
                <h2>Scope (Alcance)</h2>
                <ViewCode code={ejemploScope} />
                <p>Las variables definidas dentro de una función son privadas (locales) y no existen fuera de ella. Esto protege los datos y evita colisiones de nombres.</p>
            </section>

            <section style={{ marginTop: '3rem' }}>
                <h2>Modularidad (Import/Export)</h2>
                <ViewCode code={ejemploModulos} />
                <p>El código moderno se organiza en módulos. <code>export</code> expone funciones o variables para que otros archivos puedan usarlas mediante <code>import</code>, facilitando la arquitectura de aplicaciones grandes.</p>
            </section>
        </div>
    );
};

export default ActionPage;
