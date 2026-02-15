import ViewCode from "../components/reusables/ViewCode/ViewCode";
import { ejemploSetTimeout, ejemploPromesa, ejemploAsyncAwait } from "../data/codes/async";

const AsyncPage = () => {
    return (
        <div className="container" style={{ padding: '2rem 1rem' }}>
            <h1>Asincronía: El Tiempo en JS</h1>

            <p>No todo sucede "ya". JavaScript es capaz de manejar operaciones que toman tiempo (como temporizadores o lecturas de archivos) sin bloquear la ejecución del resto del programa.</p>

            <section style={{ marginTop: '3rem' }}>
                <h2>Temporizadores y Callbacks</h2>
                <ViewCode code={ejemploSetTimeout} />
                <p>La asincronía más básica. <code>setTimeout</code> agenda una función para ejecutarse en el futuro. Observa cómo el código no se detiene a esperar; sigue ejecutándose (No Bloqueante).</p>
            </section>

            <section style={{ marginTop: '3rem' }}>
                <h2>La Promesa (Promise)</h2>
                <ViewCode code={ejemploPromesa} />
                <p>Un objeto que representa la eventual finalización (o falla) de una operación asíncrona. Tiene tres estados: Pendiente, Fulfilled (Resuelta) o Rejected (Rechazada).</p>
            </section>

            <section style={{ marginTop: '3rem' }}>
                <h2>Async / Await</h2>
                <ViewCode code={ejemploAsyncAwait} />
                <p>Sintaxis moderna que hace que el código asíncrono se lea y comporte como síncrono. <code>await</code> pausa la ejecución de la función hasta que la promesa se resuelve.</p>
            </section>

            <section style={{ marginTop: '3rem', opacity: 0.7 }}>
                <h2>Próximamente: Conexión Externa</h2>
                <p>Ahora que entendemos el tiempo y las promesas, el siguiente paso lógico es usar estas herramientas para traer datos de servidores reales usando <code>fetch</code>.</p>
            </section>
        </div>
    );
};

export default AsyncPage;
