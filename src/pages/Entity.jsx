import ViewCode from "../components/reusables/ViewCode/ViewCode";
import { ejemploObjeto, ejemploAcceso, ejemploReferencia, ejemploDesestructuracion, ejemploManipulacionObjeto } from "../data/codes/entity";

const EntityPage = () => {
    return (
        <div className="container" style={{ padding: '2rem 1rem' }}>
            <h1>La Entidad: Objetos</h1>

            <p>Si las funciones son las acciones, los objetos son los "sustantivos" de JavaScript. Un objeto es una estructura fundamental que agrupa datos y funcionalidades relacionadas en colecciones de pares clave-valor, permitiéndonos modelar entidades complejas del mundo real.</p>

            <section style={{ marginTop: '3rem' }}>
                <h2>Literal de Objeto</h2>
                <ViewCode code={ejemploObjeto} />
                <p>La forma más directa de crear una entidad es mediante el literal <code>&#123; &#125;</code>. Aquí, definimos propiedades que describen al objeto, donde cada clave es un identificador único que apunta a un valor específico.</p>
            </section>

            <section style={{ marginTop: '3rem' }}>
                <h2>Mecanismos de Acceso</h2>
                <ViewCode code={ejemploAcceso} />
                <p>Una vez creada la entidad, necesitamos interactuar con sus datos. JavaScript nos ofrece dos caminos: la <strong>notación de punto</strong> para un acceso rápido y limpio, y la <strong>notación de corchetes</strong> para cuando necesitamos dinamismo o usar variables para encontrar una clave.</p>
            </section>

            {/* ... sections about reference and destructuring could go here ... */}

            <section style={{ marginTop: '3rem' }}>
                <h2>Manipulación y Mutabilidad</h2>
                <ViewCode code={ejemploManipulacionObjeto} />
                <p>Nuestras entidades rara vez son estáticas. Los objetos son mutables por naturaleza, lo que nos permite evolucionar su estructura en tiempo de ejecución: agregando nuevas características, actualizando valores existentes o eliminando lo que ya no es necesario mediante <code>delete</code>.</p>
            </section>
        </div>
    );
};

export default EntityPage;
