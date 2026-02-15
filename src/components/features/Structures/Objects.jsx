
import ViewCode from "../../../components/reusables/ViewCode/ViewCode";
import {
    declaracionObjeto,
    accesoPropiedades,
    referenciaObjeto,
    destructuringObjeto,
    spreadObjeto
} from "../../../data/codes/structures";
import styles from "./style/Structures.module.css";

const Objects = () => {
    return (
        <section className={styles.objects}>
            <h2>Objetos (Entidad)</h2>
            <p>
                Colección de propiedades {`{ clave: valor }`} que representa una entidad del mundo real.
            </p>

            <div className={styles.block}>
                <h3>Declaración Literal</h3>
                <p>
                    La forma más común y directa de crear objetos.
                </p>
                <ViewCode code={declaracionObjeto} />
            </div>

            <div className={styles.block}>
                <h3>Acceso a Propiedades</h3>
                <p>
                    Punto (<code>.</code>) para estático, Corchetes (<code>[]</code>) para dinámico.
                </p>
                <ViewCode code={accesoPropiedades} />
            </div>

            <div className={styles.block}>
                <h3>Inmutabilidad y Referencia</h3>
                <p className={styles.text_muted}>
                    ¡Cuidado! Asignar objetos copia la <strong>referencia en memoria</strong>, no el contenido.
                </p>
                <ViewCode code={referenciaObjeto} />
            </div>

            <div className={styles.block}>
                <h3>Destructuring (Extracción)</h3>
                <p>
                    Sintaxis moderna para extraer valores directamente a variables.
                </p>
                <ViewCode code={destructuringObjeto} />
            </div>

            <div className={styles.block}>
                <h3>Spread Operator (...)</h3>
                <p>
                    Para copiar o combinar objetos sin modificar la referencia original (Shallow Copy).
                </p>
                <ViewCode code={spreadObjeto} />
            </div>

        </section>
    );
};

export default Objects;
