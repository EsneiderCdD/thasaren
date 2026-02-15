import ViewCode from "../components/reusables/ViewCode/ViewCode";
import { ejemploObjeto, ejemploAcceso, ejemploReferencia, ejemploDesestructuracion, ejemploManipulacionObjeto } from "../data/codes/entity";

const EntityPage = () => {
    return (
        <div className="container" style={{ padding: '2rem 1rem' }}>
            <h1>La Entidad: Objetos</h1>

            <p>Un objeto es una estructura de datos fundamental que almacena colecciones de pares clave-valor. Representa entidades complejas agrupando datos y funcionalidades relacionadas.</p>

            <section style={{ marginTop: '3rem' }}>
                <h2>Literal de Objeto</h2>
                <ViewCode code={ejemploObjeto} />
                <p>La sintaxis literal <code>&#123; &#125;</code> es la forma más común de crear objetos. Las claves (propiedades) son cadenas o símbolos únicos; los valores pueden ser de cualquier tipo.</p>
            </section>

            <section style={{ marginTop: '3rem' }}>
                <h2>Mecanismos de Acceso</h2>
                <ViewCode code={ejemploAcceso} />
                <p>Existen dos sintaxis para acceder a las propiedades:</p>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    <li><strong>Notación de punto (<code>.</code>)</strong>: Requiere que la clave sea un identificador válido y conocido en tiempo de escritura. Concisa y preferida.</li>
                    <li><strong>Notación de corchetes (<code>[]</code>)</strong>: Permite el uso de expresiones y strings arbitrarios como claves. Esencial para acceso dinámico.</li>
                </ul>
            </section>

            {/* 
            <section style={{ marginTop: '3rem' }}>
                <h2>Referencia y Mutabilidad</h2>
                <ViewCode code={ejemploReferencia} />
                <p>Las variables que contienen objetos no almacenan el objeto en sí, sino una referencia a su ubicación en memoria. La asignación copia la referencia, no el valor.</p>
                <p>Modificar el objeto a través de una referencia refleja el cambio en todas las demás referencias al mismo.</p>
            </section>

            <section style={{ marginTop: '3rem' }}>
                <h2>Desestructuración</h2>
                <ViewCode code={ejemploDesestructuracion} />
                <p>Sintaxis que permite extraer valores de objetos y asignarlos a variables con el mismo nombre de la clave. Estandariza el acceso a propiedades y mejora la legibilidad del código moderno.</p>
            </section> 
            */}

            <section style={{ marginTop: '3rem' }}>
                <h2>Manipulación Básica</h2>
                <ViewCode code={ejemploManipulacionObjeto} />
                <p>Los objetos son mutables por defecto. Se pueden agregar nuevas propiedades asignando un valor a una clave inexistente, modificar valores existentes, o eliminar propiedades completamente usando el operador <code>delete</code>.</p>
            </section>
        </div>
    );
};

export default EntityPage;
