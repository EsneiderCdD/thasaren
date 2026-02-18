import { useState } from "react";
import ViewCode from "../../../components/reusables/ViewCode/ViewCode";
import {
    ejemploIf,
    ejemploSwitch,
    ejemploGuardClauseProblema,
    ejemploGuardClauseSolucion
} from "../../../data/codes/conditionals";
import styles from "./style/Logic.module.css";

const conditionalGroups = {
    if: {
        title: 'If / Else If / Else',
        description: 'Mecanismos para bifurcar el código y tomar decisiones basadas en el estado de los datos.',
        code: ejemploIf,
    },
    else_if: {
        title: 'If / Else If / Else',
        description: 'Mecanismos para bifurcar el código y tomar decisiones basadas en el estado de los datos.',
        code: ejemploIf,
    },
    else: {
        title: 'If / Else If / Else',
        description: 'Mecanismos para bifurcar el código y tomar decisiones basadas en el estado de los datos.',
        code: ejemploIf,
    },

    switch: {
        title: 'Switch',
        description: 'Ideal para comparar una misma variable contra múltiples valores posibles. Usa igualdad estricta === .',
        code: ejemploSwitch
    },
}

const Conditionals = () => {
    const [conditionalToggle, setConditionalToggle] = useState('if');

    const currentConditional = conditionalGroups[conditionalToggle];

    return (
        <div className={styles.container}>
            <h2>Estructuras de Control</h2>

            <button onClick={() => setConditionalToggle('if')}>If</button>
            <button onClick={() => setConditionalToggle('else_if')}>Else If</button>
            <button onClick={() => setConditionalToggle('else')}>Else</button>
            <button onClick={() => setConditionalToggle('switch')}>Switch</button>

            <section className={styles.if_else}>
                <h3>{currentConditional.title}</h3>
                <p>{currentConditional.description}</p>
                <ViewCode code={currentConditional.code} />
            </section>

            {conditionalToggle !== 'switch' && (

                <section className={styles.guard_pattern}>


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
                        En lugar de anidar múltiples if, verifica los errores primero y sal de la función.
                    </p>
                    <ViewCode code={ejemploGuardClauseSolucion} />
                </section>
            )}

        </div >
    );
};

export default Conditionals;
