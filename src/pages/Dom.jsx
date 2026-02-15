import ViewCode from "../components/reusables/ViewCode/ViewCode";
import { ejemploSeleccion, ejemploManipulacion, ejemploEventos, ejemploCreacion } from "../data/codes/dom";

const DomPage = () => {
    return (
        <div className="container" style={{ padding: '2rem 1rem' }}>
            <h1>El DOM: Document Object Model</h1>

            <p>El puente entre JavaScript y la página web. El DOM representa todo el contenido HTML como una estructura de árbol modificable por JS en tiempo real.</p>

            <section style={{ marginTop: '3rem' }}>
                <h2>Selección de Elementos</h2>
                <ViewCode code={ejemploSeleccion} />
                <p>Para manipular, primero debemos encontrar. <code>querySelector</code> (y <code>all</code>) nos permite acceder a cualquier elemento usando la sintaxis estándar de selectores CSS.</p>
            </section>

            <section style={{ marginTop: '3rem' }}>
                <h2>Manipulación de Contenido y Estilos</h2>
                <ViewCode code={ejemploManipulacion} />
                <p>Una vez capturado, un elemento puede ser transformado: cambiar su texto, modificar sus atributos <code>style</code> o gestionar sus clases CSS con <code>classList</code> (la práctica recomendada).</p>
            </section>

            <section style={{ marginTop: '3rem' }}>
                <h2>Interacción (Eventos)</h2>
                <ViewCode code={ejemploEventos} />
                <p>La web no es estática; escucha al usuario. <code>addEventListener</code> permite asociar funciones (handlers) a acciones específicas como clics, entradas de texto o pulsaciones de teclado.</p>
            </section>

            <section style={{ marginTop: '3rem' }}>
                <h2>Creación Dinámica</h2>
                <ViewCode code={ejemploCreacion} />
                <p>Más allá de modificar lo existente, JS puede crear nuevos elementos HTML desde cero e insertarlos en el documento, expandiendo la estructura de la página.</p>
            </section>
        </div>
    );
};

export default DomPage;
