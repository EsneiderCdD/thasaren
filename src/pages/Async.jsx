import ViewCode from "../components/reusables/ViewCode/ViewCode";
import { ejemploSetTimeout, ejemploPromesa, ejemploAsyncAwait } from "../data/codes/async";

const AsyncPage = () => {
    return (
        <div className="container" style={{ padding: '2rem 1rem' }}>
            <h1>Asincronía: El Tiempo en JS</h1>

            <p>En el mundo real, no todo sucede de inmediato. JavaScript maneja tareas que toman tiempo (como pedir datos a un servidor o esperar un temporizador) sin congelar la pantalla del usuario. Esta capacidad de "hacer varias cosas a la vez" es lo que llamamos asincronía.</p>

            <section style={{ marginTop: '3rem' }}>
                <h2>Temporizadores y Callbacks</h2>
                <ViewCode code={ejemploSetTimeout} />
                <p>La forma más básica de asincronía es agendar una tarea para el futuro. Al usar <code>setTimeout</code>, le decimos al programa: "continúa con lo tuyo, y cuando pase este tiempo, ejecuta esta acción". El código no se detiene a esperar; fluye libremente.</p>
            </section>

            <section style={{ marginTop: '3rem' }}>
                <h2>La Promesa (Promise)</h2>
                <ViewCode code={ejemploPromesa} />
                <p>Pero agendar tareas no es suficiente cuando dependemos del resultado. Una <strong>Promesa</strong> es un objeto que representa una promesa de valor: un dato que puede llegar con éxito (resuelto) o fallar (rechazado). Es el puente que conecta el presente con el resultado futuro.</p>
            </section>

            <section style={{ marginTop: '3rem' }}>
                <h2>Async / Await</h2>
                <ViewCode code={ejemploAsyncAwait} />
                <p>Finalmente, para que el código asíncrono sea tan fácil de leer como una lista de tareas síncronas, usamos <code>async</code> y <code>await</code>. Esta sintaxis moderna nos permite "esperar" a que una promesa se cumpla de forma elegante, manteniendo nuestro código limpio y predecible.</p>
            </section>

            <section style={{ marginTop: '3rem', opacity: 0.7 }}>
                <h2>Próximamente: Conexión Externa</h2>
                <p>Ahora que entendemos el tiempo y las promesas, el siguiente paso lógico es usar estas herramientas para traer datos de servidores reales usando <code>fetch</code>.</p>
            </section>
        </div>
    );
};

export default AsyncPage;
