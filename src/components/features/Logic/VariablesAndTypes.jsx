
import { useState } from "react";
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
} from "./data/variables";
import styles from "./style/Logic.module.css";

const types = {
    number: {
        title: "Number",
        description: "Representa valores numéricos, tanto enteros como de punto flotante. Soporta operaciones aritméticas estándar.",
        code: ejemploNumber,
    },
    string: {
        title: "String",
        description: "Secuencia inmutable de caracteres para representar texto. Se delimita con comillas simples ' ' o dobles",
        code: ejemploString,
    },
    boolean: {
        title: "Boolean",
        description: "Tipo lógico primitivo que representa uno de dos valores: true o false. Base del control de flujo.",
        code: ejemploBoolean,
    },
    undefined: {
        title: "undefined",
        description: "Valor primitivo asignado automáticamente a variables declaradas pero no inicializadas. Ausencia por omisión del sistema.",
        code: ejemploUndefined,
    },
    null: {
        title: "null",
        description: "Valor primitivo que representa la ausencia intencional de cualquier valor de objeto. 'Vacío' explícito del programador.",
        code: ejemploNull,
    },
}

const declarations = {
    var: {
        title: "var",
        description: "Declaración con alcance de función o global, susceptible a hoisting. Su uso se considera obsoleto en favor de la predictibilidad de let y const.",
        code: ejemploVar,
    },
    let: {
        title: "let",
        description: "Declara una variable local con alcance de bloque (block-scoped) que permite reasignación de valores. Es la elección correcta para estados mutables.",
        code: ejemploLet,
    },
    const: {
        title: "const",
        description: " Declara una referencia de solo lectura dentro del bloque. Impide la reasignación del identificador. Debe ser la opción por defecto.",
        code: ejemploConst,
    },

}



const VariablesAndTypes = () => {
    const [variableDeclaration, setVariableDeclaration] = useState('var');
    const [dataType, setDataType] = useState('number');


    const currentData = declarations[variableDeclaration];
    const currentType = types[dataType];



    return (
        <div className={styles.container}>
            <div className={styles.variables}>

                <div className={styles.variables_header}>
                    <div className={styles.variables_info}>

                        <h2>Declaración de Variables</h2>
                        <p>
                            Para persistir un valor en el tiempo de ejecución, se requiere un espacio en memoria. Declarar es la instrucción explícita al motor para reservar dicho espacio.
                        </p>
                    </div>

                    <div className={styles.variables_buttons}>
                        <button onClick={() => setVariableDeclaration('var')}>Var</button>
                        <button onClick={() => setVariableDeclaration('let')}>Let</button>
                        <button onClick={() => setVariableDeclaration('const')}>Cont</button>
                    </div>
                </div>
                <h3>{currentData.title}</h3>
                <p>{currentData.description}</p>
                <ViewCode code={currentData.code} />
                <div className={styles.data_types}>


                    <div className={styles.types_info}>
                        <h2>Tipos de Datos</h2>
                        <p>
                            Un tipo de dato define el conjunto de valores que una variable puede almacenar y las operaciones válidas que se pueden realizar sobre ella.
                        </p>
                    </div>
                    {/* Types */}
                    <div className={styles.types_buttons}>
                        <button onClick={() => setDataType('number')}>Number</button>
                        <button onClick={() => setDataType('string')}>String</button>
                        <button onClick={() => setDataType('boolean')}>Boolean</button>
                        <button onClick={() => setDataType('undefined')}>Undefined</button>
                        <button onClick={() => setDataType('null')}>Null</button>
                    </div>
                </div>

                <h3>{currentType.title}</h3>
                <p>{currentType.description}</p>
                <ViewCode code={currentType.code} />

            </div>
        </div>
    );
};

export default VariablesAndTypes;
