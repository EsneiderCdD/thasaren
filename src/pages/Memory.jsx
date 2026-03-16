import ViewCode from "../components/reusables/ViewCode/ViewCode";
import { ejemploLocalStorage, ejemploComplejo, ejemploBorrado, ejemploSessionStorage } from "../data/codes/memory";

const MemoryPage = () => {
    return (
        <div className="container" style={{ padding: '2rem 1rem' }}>
            <h1>Memoria: Persistencia de Datos</h1>

            <p>Las variables (`/origin`) y objetos (`/entity`) son efímeros; desaparecen al recargar la página. La Web Storage API permite guardar información en el navegador del usuario de forma persistente, crucial para recordar preferencias o sesiones.</p>

            <section style={{ marginTop: '3rem' }}>
                <h2>Local Storage (Memoria Permanente)</h2>
                <ViewCode code={ejemploLocalStorage} />
                <p>Almacena cadenas de texto (Strings). Los datos sobreviven al cierre del navegador y reinicios del sistema. La API es simple: `setItem` para guardar y `getItem` para leer.</p>
            </section>

            <section style={{ marginTop: '3rem' }}>
                <h2>Serialización (Objetos a Strings)</h2>
                <ViewCode code={ejemploComplejo} />
                <p>El Storage solo entiende texto. Para guardar Objetos o Arrays, debemos convertirlos a String con <code>JSON.stringify()</code> y reconstruirlos al leer con <code>JSON.parse()</code>.</p>
            </section>

            <section style={{ marginTop: '3rem' }}>
                <h2>Gestión y Limpieza</h2>
                <ViewCode code={ejemploBorrado} />
                <p>Es importante saber olvidar. Podemos eliminar claves específicas con <code>removeItem</code> o vaciar todo el almacén con <code>clear</code> para reiniciar el estado de la aplicación.</p>
            </section>

            <section style={{ marginTop: '3rem' }}>
                <h2>Session Storage (Memoria Volátil)</h2>
                <ViewCode code={ejemploSessionStorage} />
                <p>Similar a Local Storage, pero su vida está ligada a la pestaña actual. Si el usuario cierra la pestaña, los datos se pierden. Ideal para información sensible o temporal.</p>
            </section>
        </div>
    );
};

export default MemoryPage;
