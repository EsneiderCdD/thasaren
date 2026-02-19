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
import { useState } from "react";

const Objects = () => {
    const [accessType, setAccessType] = useState('dotnotation');



    return (
        <section className={styles.objects}>
            <div className={styles.header}>
                <div className={styles.viewcode}>
                    <ViewCode code={declaracionObjeto} />
                </div>
                <div className={styles.header_text}>
                    <h2>Objetos</h2>
                    <p>Colección de propiedades {`{ clave: valor }`} que representa una entidad del mundo real. La forma más común y directa de crear objetos es: <strong>Declaración Literal</strong> </p>

                </div>
            </div>




            <h3>Aceeso Propiedades</h3>
            <div className={styles.access_buttons}>
                <button onClick={() => setAccessType('dotnotation')}>Dot Notation</button>
                <button onClick={() => setAccessType('bracketnotation')}>Bracket Notation</button>
            </div>


            {accessType === 'dotnotation' && (
                <div>
                    <div className={styles.access_dotnotation}>
                        <div className={styles.dotnotation_text}>
                            <h4>Notación de Punto (Dot Notation)</h4>
                            <p>
                                Es la forma más limpia y directa de acceder a una propiedad <strong>conocida</strong>.
                            </p>
                        </div>
                        <div className={styles.dotnotation_code}>
                            <ViewCode code={accesoPunto} />
                        </div>
                    </div>
                    <div className={styles.add_properties}>

                        <div className={styles.properties_text}>
                            <h4>Añadir Propiedades</h4>
                            <p>
                                Podemos añadir propiedades también usando Dot Notation.
                            </p>
                        </div>
                        <div className={styles.properties_code}>
                            <ViewCode code={anadirPropiedad} />
                        </div>
                    </div>


                </div>

            )}

            {accessType === 'bracketnotation' && (
                <div>
                    {/* 1. situation */}
                    <div className={styles.bracket_situation}>
                        <div className={styles.bracket_situation_text}>
                            <h4>Notación de Corchetes</h4>
                            <p>
                                Obligatoria cuando necesitas usar una <strong>variable</strong> para decidir qué propiedad leer.
                                Los corchetes <code>[]</code> evalúan lo que tienen dentro antes de buscar.
                            </p>
                            <p className={styles.text_muted}>
                                Situación: Tienes un objeto usuario, pero la propiedad que quieres leer está guardada en una variable externa ("email").
                            </p>
                        </div>
                        <div className={styles.bracket_situation_code}>
                            <ViewCode code={corchetesSituacion} />
                        </div>
                    </div>

                    {/* 2. error vs solution */}
                    <div className={styles.bracket_comparison}>
                        <div className={styles.bracket_comparison_text}>
                            <p>Si usamos <strong>punto</strong>, JS busca literalmente una propiedad llamada "propiedadBuscada".//undefined</p>
                            <p>En cambio, con <strong>corchetes</strong>, JS evalúa la variable y encuentra el valor "email".//"ana@email.com"</p>
                        </div>
                        <div className={styles.bracket_comparison_code}>
                            <ViewCode code={corchetesError} />
                            <ViewCode code={corchetesSolucion} />
                        </div>
                    </div>

                    {/* 3. add properties */}
                    <div className={styles.bracket_add}>
                        <div className={styles.bracket_add_text}>
                            <h4>Añadir con Corchetes</h4>
                            <p>
                                Sigue la misma lógica. Útil para claves dinámicas.
                            </p>
                        </div>
                        <div className={styles.bracket_add_code}>
                            <ViewCode code={anadirPropiedadCorchetes} />
                        </div>
                    </div>

                    {/* 4. spaces */}
                    <div className={styles.bracket_spaces}>
                        <div className={styles.bracket_spaces_text}>
                            <h4>Espacios y Caracteres</h4>
                            <p>
                                La única forma de leer claves con espacios ("titulo libro") es usando strings dentro de corchetes.
                            </p>
                        </div>
                        <div className={styles.bracket_spaces_code}>
                            <ViewCode code={corchetesEspacios} />
                        </div>
                    </div>

                    {/* 5. methods */}
                    <div className={styles.methods_intro}>
                        <div className={styles.methods_intro_text}>
                            <h3>Métodos (Acciones)</h3>
                            <p>
                                Si una propiedad guarda una <strong>función</strong>, se convierte en un método.
                                Usamos <code>this</code> para acceder a los datos del propio objeto.
                            </p>
                        </div>
                        <div className={styles.methods_intro_code}>
                            <ViewCode code={metodoObjeto} />
                        </div>
                    </div>

                    {/* 6. prototype */}
                    <div className={styles.methods_prototype}>
                        <div className={styles.methods_prototype_text}>
                            <h3>Herencia (Prototype)</h3>
                            <p>
                                Todo objeto hereda de <code>Object.prototype</code>.
                            </p>
                            <p>
                                Ejemplo: <code>.toString()</code> existe aunque tú no lo crearas. Podemos sobreescribirlo (Shadowing) para personalizarlo.
                            </p>
                        </div>
                        <div className={styles.methods_prototype_code}>
                            <ViewCode code={herenciaToString} />
                        </div>
                    </div>

                </div>
            )}


            {/* 7. Inmutabilidad */}
            <div className={styles.immutability}>
                <div className={styles.immutability_code}>
                    <ViewCode code={referenciaObjeto} />
                </div>
                <div className={styles.immutability_text}>
                    <h3>Inmutabilidad y Referencia</h3>
                    <p>
                        Aquí está la trampa #1. Cuando usas variables normales (<code>let a = 5</code>), el valor es independiente.
                        Pero en objetos, la variable no guarda el objeto, sino su <strong>dirección en memoria</strong>.
                    </p>
                    <p className={styles.text_muted}>
                        ¡Cuidado! Si asignas un objeto a otra variable, ambas apuntarán al mismo sitio. Si cambias uno, cambias el otro.
                    </p>
                </div>
            </div>

            {/* 8. Destructuring */}
            <div className={styles.destructuring}>
                <div className={styles.destructuring_code}>
                    <ViewCode code={destructuringObjeto} />
                </div>
                <div className={styles.destructuring_text}>
                    <h3>Destructuring (Extracción)</h3>
                    <p>
                        Ya sabemos acceder con punto y corchetes, pero ¿qué si queremos sacar múltiples propiedades a la vez?
                    </p>
                    <p>
                        La <strong>desestructuración</strong> es la sintaxis moderna para "desempaquetar" valores directamente a variables limpias.
                    </p>
                </div>
            </div>

            {/* 9. Spread Operator */}
            <div className={styles.spread}>
                <div className={styles.spread_code}>
                    <ViewCode code={spreadObjeto} />
                </div>
                <div className={styles.spread_text}>
                    <h3>Spread Operator (...)</h3>
                    <p>
                        Si la asignación (<code>=</code>) solo copia la referencia (el problema que vimos arriba), ¿cómo creamos una copia real e independiente?
                    </p>
                    <p>
                        El operador Spread (<code>...</code>) "esparce" las propiedades en un nuevo objeto, creando una <strong>Shallow Copy</strong> (Copia Superficial) segura.
                    </p>
                </div>
            </div>

        </section>
    );
};

export default Objects;
