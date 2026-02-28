import ViewCode from "../components/reusables/ViewCode/ViewCode";
import { ejemploArray, ejemploAccesoArray, ejemploMutacionPila, ejemploMutacionCola } from "../data/codes/list";

const ListPage = () => {
    return (
        <div className="container" style={{ padding: '2rem 1rem' }}>
            <h1>El Colectivo: Arrays</h1>

            <p>A diferencia de los objetos donde buscamos por nombre, en los <strong>Arreglos (Arrays)</strong> nos organizamos mediante el orden. Son colecciones secuenciales de elementos que nos permiten manejar grupos de datos como una sola unidad lógica, facilitando el procesamiento masivo.</p>

            <section style={{ marginTop: '3rem' }}>
                <h2>Definición y Estructura</h2>
                <ViewCode code={ejemploArray} />
                <p>Un array es una lista entre corchetes <code>[]</code>. Su versatilidad les permite contener cualquier tipo de dato —números, strings, objetos e incluso otros arrays— y su tamaño es dinámico, adaptándose a nuestras necesidades mediante la propiedad <code>length</code>.</p>
            </section>

            <section style={{ marginTop: '3rem' }}>
                <h2>Acceso Posicional</h2>
                <ViewCode code={ejemploAccesoArray} />
                <p>Para recuperar un dato, usamos su dirección numérica o "índice". Recuerda que en programación empezamos a contar desde <code>0</code>. Si intentas buscar una posición que no existe, JavaScript te devolverá <code>undefined</code>, protegiendo el flujo de ejecución.</p>
            </section>

            <section style={{ marginTop: '3rem' }}>
                <h2>Manipulación: La Pila (Stack)</h2>
                <ViewCode code={ejemploMutacionPila} />
                <p>Los arrays facilitan la modificación rápida. Cuando trabajamos al <strong>final</strong> de la lista, como si fuera una pila de platos, usamos <code>push</code> para añadir y <code>pop</code> para quitar. Es la forma más eficiente de gestionar datos en movimiento.</p>
            </section>

            <section style={{ marginTop: '3rem' }}>
                <h2>Manipulación: La Cola (Queue)</h2>
                <ViewCode code={ejemploMutacionCola} />
                <p>A veces necesitamos trabajar al <strong>principio</strong> del grupo. Aunque requiere más esfuerzo interno del lenguaje (reindexar), herramientas como <code>unshift</code> y <code>shift</code> nos permiten tratar al array como una fila o cola de espera.</p>
            </section>
        </div>
    );
};

export default ListPage;
