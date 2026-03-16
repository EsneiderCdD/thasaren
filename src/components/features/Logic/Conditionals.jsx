import { useState } from "react";
import ViewCode from "../../../components/reusables/ViewCode/ViewCode";
import {
    ejemploIf,
    ejemploElseIf,
    ejemploElse,
    ejemploSwitch,
    ejemploGuardClauseProblema,
    ejemploGuardClauseSolucion
} from "../../../data/codes/conditionals";
import styles from "./style/Logic.module.css";

const conditionalGroups = {
    if: {
        title: 'If',
        description: 'Evalúa una expresión lógica. Si el resultado es verdadero (true), ejecuta el bloque de código encerrado en llaves.',
        code: ejemploIf,
    },
    else_if: {
        title: 'Else If',
        description: 'Permite evaluar una nueva condición si el "if" anterior resultó falso. Puedes encadenar tantos como necesites.',
        code: ejemploElseIf,
    },
    else: {
        title: 'Else',
        description: 'Es el bloque de "último recurso". Se ejecuta únicamente si ninguna de las condiciones anteriores (if / else if) fue verdadera.',
        code: ejemploElse,
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
            <div className={styles.conditionals_header}>
                <div className={styles.conditionals_info}>
                    <h2>Estructuras de Control</h2>
                    <p>Son mecanismos para bifurcar el código y tomar decisiones basadas en el estado de los datos.</p>
                </div>
                <div className={styles.conditionals_buttons}>
                    <button onClick={() => setConditionalToggle('if')}>If</button>
                    <button onClick={() => setConditionalToggle('else_if')}>Else If</button>
                    <button onClick={() => setConditionalToggle('else')}>Else</button>
                    <button onClick={() => setConditionalToggle('switch')}>Switch</button>
                </div>
            </div>
            <h3>{currentConditional.title}</h3>
            <p>{currentConditional.description}</p>
            <ViewCode code={currentConditional.code} />

            {conditionalToggle == 'if' && (

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
