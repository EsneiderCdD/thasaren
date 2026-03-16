import ViewCode from "../components/reusables/ViewCode/ViewCode";
import {
    ejemploDeclaracion,
    ejemploExpresion,
    ejemploParametros,
    ejemploScope,
    ejemploComparativa,
    ejemploModulos,
    ejemploHoistingOk,
    ejemploHoistingError,
    ejemploRest,
    ejemploSpread,
    ejemploCallback
} from "../data/codes/action";

const ActionPage = () => {
    return (
        <div className="container" style={{ padding: '2rem 1rem' }}>
            <h1>La Acción: Funciones</h1>

            <p>Las funciones son el corazón de JavaScript. No son solo bloques de código, sino "unidades de acción" que permiten transformar datos, automatizar tareas y construir la arquitectura de cualquier aplicación moderna: reciben información (entrada), la procesan y devuelven un resultado (salida).</p>

            <section style={{ marginTop: '3rem' }}>
                <h2>Declaración y Comportamiento</h2>
                <ViewCode code={ejemploDeclaracion} />
                <p>La forma clásica define una acción con nombre explícito. Estas funciones disfrutan de <strong>Hoisting</strong>, lo que significa que pueden ser invocadas incluso antes de su línea de definición en el código.</p>
            </section>

            <section style={{ marginTop: '3rem' }}>
                <h2>Parámetros y Argumentos</h2>
                <ViewCode code={ejemploParametros} />
                <p>Independientemente de su sintaxis, la verdadera potencia de una función reside en su capacidad de recibir datos dinámicos. Podemos definir valores por defecto para asegurar que la "acción" no se rompa si falta información.</p>
            </section>

            <section style={{ marginTop: '3rem' }}>
                <h2>Flexibilidad: Parámetros Rest y Spread</h2>
                <ViewCode code={ejemploRest} />
                <p>A veces no sabemos cuántos datos vamos a recibir. Los <strong>Parámetros Rest</strong> (<code>...</code>) nos permiten capturar un número indefinido de argumentos como un array manejable dentro de la función.</p>
                <ViewCode code={ejemploSpread} style={{ marginTop: '1rem' }} />
                <p>Por otro lado, el <strong>Spread Operator</strong> nos permite "esparcir" los elementos de un array para que funcionen como argumentos individuales para una función, facilitando el trabajo con colecciones de datos.</p>
            </section>

            <section style={{ marginTop: '3rem' }}>
                <h2>¿function o const? (El fenómeno Hoisting)</h2>
                <h3>✅ Función Clásica</h3>
                <ViewCode code={ejemploHoistingOk} />
                <p>Las declaraciones de función son procesadas antes de ejecutar el resto del código. El intérprete "sabe" que la función existe independientemente de dónde la invoques.</p>
                <h3 style={{ marginTop: '2rem' }}>❌ Expresión (const)</h3>
                <ViewCode code={ejemploHoistingError} />
                <p>Las funciones guardadas en una variable no se elevan. Si intentas usarlas antes de su definición, obtendrás un error de referencia (ReferenceError), lo que previene un flujo de ejecución confuso.</p>
            </section>

            <section style={{ marginTop: '3rem' }}>
                <h2>Sintaxis Moderna: Arrow Functions</h2>
                <ViewCode code={ejemploExpresion} />
                <p>En el desarrollo moderno, a menudo tratamos a las funciones como valores. Las <strong>Arrow Functions</strong> ofrecen una sintaxis concisa donde el <code>return</code> es implícito en expresiones de una sola línea, ideales para una lectura más ágil.</p>
                <ViewCode code={ejemploComparativa} style={{ marginTop: '1rem' }} />
                <p>Además de la estética, las funciones de flecha no crean su propio contexto <code>this</code>, sino que lo heredan de su entorno, lo que las hace ideales para el manejo de componentes y callbacks.</p>
            </section>

            <section style={{ marginTop: '3rem' }}>
                <h2>Funciones de Orden Superior: Callbacks</h2>
                <ViewCode code={ejemploCallback} />
                <p>Para que una función sea verdaderamente versátil, esta debe poder recibir otra función como argumento (un callback). Esto delega la decisión de qué hacer con los datos procesados, permitiendo una lógica más modular y reactiva.</p>
            </section>

            <section style={{ marginTop: '3rem' }}>
                <h2>Scope (Alcance)</h2>
                <ViewCode code={ejemploScope} />
                <p>Esta relación con el entorno nos lleva a la "privacidad". Cada función crea su propio mini-mundo (scope local) donde protege sus variables internas de interferencias externas, garantizando que los datos solo vivan donde se necesitan.</p>
            </section>

            <section style={{ marginTop: '3rem' }}>
                <h2>Modularidad (Import/Export)</h2>
                <ViewCode code={ejemploModulos} />
                <p>Finalmente, una vez dominada la "acción individual", el siguiente paso lógico es aprender a compartir estas herramientas. Mediante <code>export</code> e <code>import</code>, convertimos nuestras funciones en piezas de un rompecabezas mayor.</p>
            </section>
        </div>
    );
};

export default ActionPage;
