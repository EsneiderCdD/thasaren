import ViewCode from "../components/reusables/ViewCode/ViewCode";
import { ejemploArray, ejemploAccesoArray, ejemploMutacionPila, ejemploMutacionCola } from "../data/codes/list";

const ListPage = () => {
    return (
        <div className="container" style={{ padding: '2rem 1rem' }}>
            <h1>El Colectivo: Arrays</h1>

            <p>Un array es una estructura de datos ordenada que almacena una colección secuencial de elementos. A diferencia de los objetos, los datos no se acceden por nombre, sino por su posición numérica (índice).</p>

            <section style={{ marginTop: '3rem' }}>
                <h2>Definición y Estructura</h2>
                <ViewCode code={ejemploArray} />
                <p>Se declaran usando corchetes <code>[]</code>. Pueden contener elementos de cualquier tipo, mezclados, e incluso otros arrays u objetos. La propiedad <code>length</code> refleja el número total de elementos.</p>
            </section>

            <section style={{ marginTop: '3rem' }}>
                <h2>Acceso Posicional</h2>
                <ViewCode code={ejemploAccesoArray} />
                <p>El acceso es base-cero: el primer elemento está en el índice <code>0</code>. Acceder a un índice inexistente no lanza error, sino que retorna <code>undefined</code>.</p>
            </section>

            <section style={{ marginTop: '3rem' }}>
                <h2>Mutación de Pila (Stack)</h2>
                <ViewCode code={ejemploMutacionPila} />
                <p>Operaciones que ocurren al <strong>final</strong> del array. Es el método más eficiente de modificación.</p>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    <li><strong>push()</strong>: Agrega uno o más elementos al final. Retorna la nueva longitud.</li>
                    <li><strong>pop()</strong>: Elimina y retorna el último elemento. Reduce la longitud.</li>
                </ul>
            </section>

            <section style={{ marginTop: '3rem' }}>
                <h2>Mutación de Cola (Queue)</h2>
                <ViewCode code={ejemploMutacionCola} />
                <p>Operaciones que ocurren al <strong>inicio</strong> del array. Son computacionalmente más costosas pues requieren reindexar todos los elementos restantes.</p>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    <li><strong>unshift()</strong>: Agrega elementos al inicio.</li>
                    <li><strong>shift()</strong>: Elimina y retorna el primer elemento.</li>
                </ul>
            </section>
        </div>
    );
};

export default ListPage;
