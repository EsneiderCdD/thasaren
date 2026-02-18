import ViewCode from "../../../components/reusables/ViewCode/ViewCode";
import {
    declaracionObjeto,
    accesoPunto,
    anadirPropiedad,
    anadirPropiedadCorchetes,
    corchetesSituacion,
    corchetesError,
    corchetesSolucion,
    corchetesEspacios,
    metodoObjeto,
    referenciaObjeto,
    destructuringObjeto,
    spreadObjeto,
    herenciaToString
} from "../../../data/codes/structures";
import styles from "./style/Structures.module.css";

const Objects = () => {
    return (
        <section className={styles.objects}>
            <h2>Objetos (Entidad)</h2>
            <p>Colección de propiedades {`{ clave: valor }`} que representa una entidad del mundo real. </p>
            <p>La forma más común y directa de crear objetos es: <strong>Declaración Literal</strong> </p>

            <div className={styles.block}>
                <ViewCode code={declaracionObjeto} />
            </div>
            <h3>Aceeso Propiedades</h3>

            <div className={styles.block}>
                <h4>1. Notación de Punto (Dot Notation)</h4>
                <p>
                    Es la forma más limpia y directa de acceder a una propiedad <strong>conocida</strong>.
                </p>
                <ViewCode code={accesoPunto} />
            </div>

            <h3>Añadir Propiedades</h3>
            <div className={styles.block}>
                <p>
                    Podemos añadir propiedades también usando Dot Notation.
                </p>
                <ViewCode code={anadirPropiedad} />
            </div>

            <div className={styles.block}>
                <h4>2. Notación de Corchetes (Bracket Notation)</h4>
                <p>
                    Obligatoria cuando necesitas usar una <strong>variable</strong> para decidir qué propiedad leer.
                    Los corchetes <code>[]</code> evalúan lo que tienen dentro antes de buscar.
                </p>

                <p>Situación: Tienes un objeto usuario, pero la propiedad que quieres leer está guardada en una variable externa.</p>
                <ViewCode code={corchetesSituacion} />

                <p>Si usamos la <strong>notación de punto</strong>, buscará literalmente una propiedad llamada "propiedadBuscada".</p>
                <ViewCode code={corchetesError} />

                <p>En cambio, si usamos la <strong>notación de corchetes</strong>, evaluará la variable y buscará la propiedad correspondiente.</p>
                <ViewCode code={corchetesSolucion} />
            </div>

            <h3>Añadir Propiedades </h3>
            <div className={styles.block}>
                <p>
                    Para agregar es:
                </p>
                <ViewCode code={anadirPropiedadCorchetes} />
            </div>

            <div className={styles.block}>
                <h3>Otras razones para usar Corchetes</h3>
                <p>
                    Además de variables dinámicas, son obligatorios cuando las claves tienen <strong>espacios</strong> o caracteres especiales (guiones, símbolos).
                </p>
                <ViewCode code={corchetesEspacios} />
            </div>

            <div className={styles.block}>
                <h3>Métodos de un Objeto</h3>
                <p>
                    Hasta ahora hemos guardado datos. ¿Pero qué pasa si guardamos una <strong>función</strong> dentro de una propiedad? Obtenemos un método: una acción que el objeto puede realizar.
                </p>
                <ViewCode code={metodoObjeto} />
                <p className={styles.text_muted}>
                    Nota: Si vienes de otros lenguajes, esto es la base de la Programación Orientada a Objetos (Clases), aunque aquí lo hacemos directamente sobre el objeto.
                </p>





                <h3>Métodos Heredados (Object Prototype)</h3>
                <p>
                    Todos los objetos en JavaScript "heredan" funcionalidades de un padre común llamado <code>Object.prototype</code>.
                    Esto significa que tu objeto ya trae herramientas de fábrica que tú no escribiste.
                </p>

                <p>Un ejemplo clásico es <code>.toString()</code>:</p>
                <ul>
                    <li>Es el método que JS usa internamente cuando necesita convertir tu objeto a texto.</li>
                    <li>Por defecto devuelve <code>[object Object]</code>.</li>
                    <li>Podemos <strong>sobreescribirlo</strong> para que devuelva algo útil (como una autoreferencia personalizada).</li>
                </ul>
                <ViewCode code={herenciaToString} />
            </div>


            <div className={styles.block}>
                <h3>Inmutabilidad y Referencia</h3>
                <p>
                    Aquí está la trampa #1. Cuando usas variables normales (<code>let a = 5</code>), el valor es independiente.
                    Pero en objetos, la variable no guarda el objeto, sino su <strong>dirección en memoria</strong>.
                </p>
                <p className={styles.text_muted}>
                    ¡Cuidado! Si asignas un objeto a otra variable, ambas apuntarán al mismo sitio. Si cambias uno, cambias el otro.
                </p>
                <ViewCode code={referenciaObjeto} />
            </div>

            <div className={styles.block}>
                <h3>Destructuring (Extracción)</h3>
                <p>
                    Ya sabemos acceder con punto y corchetes, pero ¿qué si queremos sacar múltiples propiedades a la vez?
                </p>
                <p>
                    La <strong>desestructuración</strong> es la sintaxis moderna para "desempaquetar" valores directamente a variables limpias.
                </p>
                <ViewCode code={destructuringObjeto} />
            </div>

            <div className={styles.block}>
                <h3>Spread Operator (...)</h3>
                <p>
                    Si la asignación (<code>=</code>) solo copia la referencia (el problema que vimos arriba), ¿cómo creamos una copia real e independiente?
                </p>
                <p>
                    El operador Spread (<code>...</code>) "esparce" las propiedades en un nuevo objeto, creando una <strong>Shallow Copy</strong> (Copia Superficial) segura.
                </p>
                <ViewCode code={spreadObjeto} />
            </div>

        </section>
    );
};

export default Objects;
