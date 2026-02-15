import ViewCode from "../components/reusables/ViewCode/ViewCode";
import {
    ejemploBasico,
    ejemploEsqueleto,
    ejemploInyeccion,
    ejemploTokenizer,
    ejemploCSS
} from "../data/codes/viewcode";

const ViewCodePage = () => {
    return (
        <div className="container" style={{ padding: '2rem 1rem' }}>
            <h1>Code Viewer Component</h1>
            <p>Sistema de visualización de código con syntax highlighting construido paso a paso.</p>

            <section style={{ marginTop: '3rem' }}>
                <h2>Paso 1: El Esqueleto</h2>
                <p>Creamos la estructura HTML básica con dos columnas: números de línea y contenido de código.</p>
                <p>Un contenedor con dos divs independientes. Sin lógica, solo estructura visual.</p>
                <ViewCode code={ejemploEsqueleto} />
            </section>

            <section style={{ marginTop: '3rem' }}>
                <h2>Paso 2: La Estructura CSS</h2>
                <p>Aplicamos Flexbox para crear las columnas. La columna izquierda muestra números, la derecha el código.</p>
                <p>Usamos monospace para mantener la alineación y white-space: pre para respetar espacios e indentación.</p>
                <ViewCode code={ejemploCSS} />
            </section>

            <section style={{ marginTop: '3rem' }}>
                <h2>Paso 3: Inyección de Datos</h2>
                <p>El componente recibe código como prop y lo divide en líneas usando split.</p>
                <p>Cada línea se mapea dos veces: una para números, otra para contenido. El espacio irrompible mantiene la altura de líneas vacías.</p>
                <ViewCode code={ejemploInyeccion} />
            </section>

            <section style={{ marginTop: '3rem' }}>
                <h2>Paso 4: Tokenización</h2>
                <p>Convertimos texto plano en tokens con significado usando expresiones regulares.</p>
                <p>Cada patrón busca keywords, strings, números o booleanos y los envuelve en spans con clases CSS.</p>
                <ViewCode code={ejemploTokenizer} />
            </section>

            <section style={{ marginTop: '3rem' }}>
                <h2>Ejemplo Funcional</h2>
                <p>El resultado final: código con colores, números de línea y estructura clara.</p>
                <ViewCode code={ejemploBasico} />
            </section>
        </div>
    );
};

export default ViewCodePage;
