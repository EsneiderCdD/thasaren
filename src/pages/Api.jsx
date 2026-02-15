import ViewCode from "../components/reusables/ViewCode/ViewCode";
import { ejemploFetchGet, ejemploFetchPost, ejemploManejoErrores } from "../data/codes/api";

const ApiPage = () => {
    return (
        <div className="container" style={{ padding: '2rem 1rem' }}>
            <h1>La API: Conexión Externa</h1>

            <p>El mundo no termina en tu código. Las APIs (Interfaces de Programación de Aplicaciones) permiten interactuar con sistemas externos, trayendo y enviando información a través de la red usando el protocolo HTTP y el formato JSON.</p>

            <section style={{ marginTop: '3rem' }}>
                <h2>Lectura de Datos (GET)</h2>
                <ViewCode code={ejemploFetchGet} />
                <p>El método predeterminado. <code>fetch()</code> realiza una solicitud a una URL y devuelve una Promesa. `json()` extrae y parsea el cuerpo de la respuesta, convirtiéndolo en un objeto JS utilizable.</p>
            </section>

            <section style={{ marginTop: '3rem' }}>
                <h2>Envío de Datos (POST)</h2>
                <ViewCode code={ejemploFetchPost} />
                <p>Para enviar información, debemos configurar el segundo argumento de `fetch`. Especificamos el <code>method</code> y convertimos nuestro objeto a string JSON en el <code>body</code>.</p>
            </section>

            <section style={{ marginTop: '3rem' }}>
                <h2>Manejo de Errores (Red y Estado)</h2>
                <ViewCode code={ejemploManejoErrores} />
                <p>La red es impredecible. Debemos capturar tanto fallos de conexión (`catch`) como respuestas HTTP erróneas (`!ok`). El bloque <code>try/catch</code> es esencial para aplicaciones robustas.</p>
            </section>
        </div>
    );
};

export default ApiPage;
