import ViewCode from "../../../components/reusables/ViewCode/ViewCode";
import {
    ejemploIf,
    ejemploSwitch,
    ejemploGuardClauseProblema,
    ejemploGuardClauseSolucion
} from "../../../data/codes/conditionals";
import styles from "./style/Operators.module.css";

const Conditionals = () => {
    return (
        <div className={styles.container}>
            <h2>Estructuras de Control</h2>
            <p>
                Mecanismos para bifurcar el código y tomar decisiones basadas en el estado de los datos.
            </p>

            {/* if_else */}
            <section className={styles.if_else}>
                <h3>If / Else If / Else</h3>
                <p>
                    La estructura base. Evalúa una condición booleana para decidir qué bloque ejecutar.
                </p>
                <ViewCode code={ejemploIf} />
            </section>

            {/* guard_pattern */}
            <section className={styles.guard_pattern}>
                <h3>Patrón: Guard Clauses</h3>
                <p>
                    Técnica "Early Return". En lugar de anidar múltiples <code>if</code>, verifica los errores primero y sal de la función.
                </p>

                <h4 className={styles.text_danger}>
                    El Problema: Arrow Code (Código Flecha)
                </h4>
                <p>
                    Si usas if anidados, el código se vuelve difícil de leer y mantener.
                </p>
                <ViewCode code={ejemploGuardClauseProblema} />

                <h4 className={styles.text_success}>
                    La Solución: Guard Clauses
                </h4>
                <p>
                    Verificamos lo malo primero y salimos. El código principal queda limpio.
                </p>
                <ViewCode code={ejemploGuardClauseSolucion} />
            </section>

            {/* switch_case */}
            <section className={styles.switch_case}>
                <h3>Switch</h3>
                <p>
                    Ideal para comparar una misma variable contra múltiples valores posibles. Usa igualdad estricta <strong>(<code>===</code>)</strong>.
                </p>
                <ViewCode code={ejemploSwitch} />
            </section>

        </div>
    );
};

export default Conditionals;
