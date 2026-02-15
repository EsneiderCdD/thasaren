import ViewCode from "../components/reusables/ViewCode/ViewCode";
import { ejemploClase, ejemploMetodos, ejemploHerencia } from "../data/codes/class";

const ClassPage = () => {
    return (
        <div className="container" style={{ padding: '2rem 1rem' }}>
            <h1>La Clase: El Molde (POO)</h1>

            <p>Si los <strong>Objetos</strong> (`/entity`) son la instancia concreta (la casa), la <strong>Clase</strong> es el plano arquitectónico. Permite definir la estructura y comportamiento que tendrán múltiples objetos creados a partir de ella, facilitando la organización en sistemas complejos.</p>

            <section style={{ marginTop: '3rem' }}>
                <h2>Definición e Instanciación</h2>
                <ViewCode code={ejemploClase} />
                <p>Se utiliza la palabra reservada <code>class</code>. El método especial <code>constructor</code> se ejecuta automáticamente al crear una nueva instancia con <code>new</code>, inicializando las propiedades del objeto.</p>
            </section>

            <section style={{ marginTop: '3rem' }}>
                <h2>Métodos (Comportamiento)</h2>
                <ViewCode code={ejemploMetodos} />
                <p>Las funciones definidas dentro de una clase se llaman métodos. Operan sobre los datos de la instancia actual utilizando <code>this</code>.</p>
            </section>

            <section style={{ marginTop: '3rem' }}>
                <h2>Herencia (Extends)</h2>
                <ViewCode code={ejemploHerencia} />
                <p>El poder de la POO. Una clase puede heredar propiedades y métodos de otra mediante <code>extends</code>. `super()` invoca al constructor de la clase padre, permitiendo reutilizar y especializar código jerárquicamente.</p>
            </section>
        </div>
    );
};

export default ClassPage;
