import ViewCode from "../components/reusables/ViewCode/ViewCode";
import { ejemploFor, ejemploWhile, ejemploForOf, ejemploBreakContinue } from "../data/codes/cycle";

const CyclePage = () => {
    return (
        <div className="container" style={{ padding: '2rem 1rem' }}>
            <h1>El Ciclo: Bucles e Iteración</h1>

            <p>La capacidad de repetir instrucciones es fundamental para la automatización. Los bucles permiten ejecutar un bloque de código múltiples veces, ya sea un número determinado de veces o mientras se cumpla una condición.</p>

            <section style={{ marginTop: '3rem' }}>
                <h2>Bucle Controlado (For)</h2>
                <ViewCode code={ejemploFor} />
                <p>La estructura clásica. Ideal cuando se conoce de antemano el número exacto de iteraciones. Se compone de tres partes: inicialización, condición de parada y actualización.</p>
            </section>

            <section style={{ marginTop: '3rem' }}>
                <h2>Bucle Condicional (While)</h2>
                <ViewCode code={ejemploWhile} />
                <p>Ejecuta el bloque mientras la condición sea verdadera. Es útil cuando el número de iteraciones no es fijo, sino que depende del estado del programa.</p>
            </section>

            <section style={{ marginTop: '3rem' }}>
                <h2>Iteración de Colecciones (For...of)</h2>
                <ViewCode code={ejemploForOf} />
                <p>Sintaxis moderna y elegante para recorrer elementos iterables (como Arrays o Strings). Abstrae la gestión de índices y se enfoca directamente en los valores.</p>
            </section>

            <section style={{ marginTop: '3rem' }}>
                <h2>Control de Flujo en Bucles</h2>
                <ViewCode code={ejemploBreakContinue} />
                <p>Instrucciones especiales para alterar la ejecución normal:</p>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    <li><strong>break</strong>: Terminación abrupta. Sale del bucle inmediatamente.</li>
                    <li><strong>continue</strong>: Salta la iteración actual y pasa a la siguiente.</li>
                </ul>
            </section>
        </div>
    );
};

export default CyclePage;
