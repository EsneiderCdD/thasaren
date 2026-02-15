
import ViewCode from "../../../components/reusables/ViewCode/ViewCode";
import {
    ejemploLet,
    ejemploConst,
    ejemploVar,
    ejemploNumber,
    ejemploString,
    ejemploBoolean,
    ejemploUndefined,
    ejemploNull,
    ejemploDiferencias
} from "../../../data/codes/variables";
import styles from "./style/Logic.module.css";

const VariablesAndTypes = () => {
    return (
        <div className={styles.container}>
            <h2>Declaración de Variables</h2>
            <p>
                Para persistir un valor en el tiempo de ejecución, se requiere un espacio en memoria. Declarar es la instrucción explícita al motor para reservar dicho espacio.
            </p>
            {/* Variables */}
            <section className={styles.variables}>
                <div style={{ marginBottom: '2rem' }}>
                    <h3>let</h3>
                    <p>
                        Declara una variable local con alcance de bloque (block-scoped) que permite reasignación de valores. Es la elección correcta para estados mutables.
                    </p>
                    <ViewCode code={ejemploLet} />
                </div>

                <div style={{ marginBottom: '2rem' }}>
                    <h3>const</h3>
                    <p>
                        Declara una referencia de solo lectura dentro del bloque. Impide la reasignación del identificador. Debe ser la opción por defecto.
                    </p>
                    <ViewCode code={ejemploConst} />
                </div>

                <div style={{ marginBottom: '2rem' }}>
                    <h3>var</h3>
                    <p>
                        Declaración con alcance de función o global, susceptible a hoisting. Su uso se considera obsoleto en favor de la predictibilidad de let y const.
                    </p>
                    <ViewCode code={ejemploVar} />
                </div>
            </section>

            <h2>Tipos de Datos</h2>
            <p>
                Un tipo de dato define el conjunto de valores que una variable puede almacenar y las operaciones válidas que se pueden realizar sobre ella.
            </p>
            {/* Types */}
            <section className={styles.data_types}>
                <div style={{ marginBottom: '2rem' }}>
                    <h3>Number</h3>
                    <p>
                        Representa valores numéricos, tanto enteros como de punto flotante. Soporta operaciones aritméticas estándar.
                    </p>
                    <ViewCode code={ejemploNumber} />
                </div>

                <div style={{ marginBottom: '2rem' }}>
                    <h3>String</h3>
                    <p>
                        Secuencia inmutable de caracteres para representar texto. Se delimita con comillas simples (<code>' '</code>) o dobles (<code>" "</code>).
                    </p>
                    <ViewCode code={ejemploString} />
                </div>

                <div style={{ marginBottom: '2rem' }}>
                    <h3>Boolean</h3>
                    <p>
                        Tipo lógico primitivo que representa uno de dos valores: <code>true</code> o <code>false</code>. Base del control de flujo.
                    </p>
                    <ViewCode code={ejemploBoolean} />
                </div>
            </section>

            <h2>Ausencia de Valor</h2>
            <p>
                JavaScript distingue dos estados primitivos para representar la "no existencia" de un valor significativo.
            </p>
            {/* Absence */}
            <section className={styles.value_absence}>
                <div style={{ marginBottom: '2rem' }}>
                    <h3>undefined</h3>
                    <p>
                        Valor primitivo asignado automáticamente a variables declaradas pero no inicializadas. Ausencia por omisión del sistema.
                    </p>
                    <ViewCode code={ejemploUndefined} />
                </div>

                <div style={{ marginBottom: '2rem' }}>
                    <h3>null</h3>
                    <p>
                        Valor primitivo que representa la ausencia intencional de cualquier valor de objeto. "Vacío" explícito del programador.
                    </p>
                    <ViewCode code={ejemploNull} />
                </div>

                <div style={{ marginBottom: '2rem' }}>
                    <h3>Diferencias Técnicas</h3>
                    <p>
                        Aunque ambos son falsy, son semánticamente distintos. <code>undefined</code> es un estado del motor; <code>null</code> es un estado del programador.
                    </p>
                    <ViewCode code={ejemploDiferencias} />
                </div>
            </section>

        </div>
    );
};

export default VariablesAndTypes;
