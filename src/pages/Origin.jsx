import ViewCode from "../components/reusables/ViewCode/ViewCode";
import { ejemploLet, ejemploConst, ejemploVar, ejemploNumber, ejemploString, ejemploBoolean, ejemploUndefined, ejemploNull, ejemploDiferencias, ejemploComparacion, ejemploIgualdad, ejemploLogicos } from "../data/codes/origin";

const OriginPage = () => {
    return (
        <div className="container" style={{ padding: '2rem 1rem' }}>
            <h1>Declaración de Variables</h1>

            <p>Para persistir un valor en el tiempo de ejecución, se requiere un espacio en memoria asociado a un identificador. Declarar es la instrucción explícita al motor para reservar dicho espacio. JavaScript dispone de tres sentencias para este propósito.</p>

            <section style={{ marginTop: '3rem' }}>
                <h2>let</h2>
                <ViewCode code={ejemploLet} />
                <p>Declara una variable local con alcance de bloque (block-scoped) que permite reasignación de valores. Es la elección correcta para estados mutables.</p>
            </section>

            <section style={{ marginTop: '3rem' }}>
                <h2>const</h2>
                <ViewCode code={ejemploConst} />
                <p>Declara una referencia de solo lectura dentro del bloque. Impide la reasignación del identificador, aunque no garantiza la inmutabilidad profunda de objetos o arreglos. Debe ser la opción por defecto.</p>
            </section>

            <section style={{ marginTop: '3rem' }}>
                <h2>var</h2>
                <ViewCode code={ejemploVar} />
                <p>Declaración con alcance de función o global, susceptible a hoisting sin zona muerta temporal. Su uso se considera obsoleto en favor de la predictibilidad de let y const.</p>
            </section>



            <h1 style={{ marginTop: '5rem' }}>Tipos de Datos</h1>

            <p>Un tipo de dato define el conjunto de valores que una variable puede almacenar y las operaciones válidas que se pueden realizar sobre ella.</p>

            <section style={{ marginTop: '3rem' }}>
                <h2>Number</h2>
                <ViewCode code={ejemploNumber} />
                <p>Representa valores numéricos, tanto enteros como de punto flotante. Soporta operaciones aritméticas estándar. JavaScript utiliza el formato IEEE 754 de doble precisión para todos los números, sin distinción de tipo para enteros.</p>
            </section>

            <section style={{ marginTop: '3rem' }}>
                <h2>String</h2>
                <ViewCode code={ejemploString} />
                <p>Secuencia inmutable de caracteres utilizada para representar texto. Se delimita indistintamente con comillas simples (<code>' '</code>) o dobles (<code>" "</code>). Una cadena vacía (<code>""</code>) es una instancia válida de longitud cero.</p>
            </section>

            <section style={{ marginTop: '3rem' }}>
                <h2>Boolean</h2>
                <ViewCode code={ejemploBoolean} />
                <p>Tipo lógico primitivo que representa uno de dos valores: <code>true</code> o <code>false</code>. Es la base de las estructuras de control de flujo y operaciones lógicas.</p>
            </section>




            <h1 style={{ marginTop: '5rem' }}>Ausencia de Valor</h1>

            <p>JavaScript distingue dos estados primitivos para representar la "no existencia" de un valor significativo. Ambos son tipos únicos con un solo valor posible.</p>

            <section style={{ marginTop: '3rem' }}>
                <h2>undefined</h2>
                <ViewCode code={ejemploUndefined} />
                <p>Valor primitivo asignado automáticamente a variables declaradas pero no inicializadas. Representa la ausencia de valor por omisión del sistema.</p>
            </section>

            <section style={{ marginTop: '3rem' }}>
                <h2>null</h2>
                <ViewCode code={ejemploNull} />
                <p>Valor primitivo que representa la ausencia intencional de cualquier valor de objeto. Se utiliza para indicar explícitamente "vacío" o "desconocido".</p>
            </section>

            <section style={{ marginTop: '3rem' }}>
                <h2>Distinción Técnica</h2>
                <ViewCode code={ejemploDiferencias} />
                <p>Aunque ambos evalúan a <code>false</code> en contextos booleanos, son semánticamente distintos. <code>undefined</code> es un estado del motor; <code>null</code> es un estado del programador.</p>
            </section>


            <h1 style={{ marginTop: '5rem' }}>Operadores y Expresiones</h1>

            <p>Los operadores son símbolos que transforman uno o más operandos en un resultado. Permiten la manipulación de datos y la toma de decisiones lógicas.</p>

            <section style={{ marginTop: '3rem' }}>
                <h2>Comparación Estricta vs Abstracta</h2>
                <ViewCode code={ejemploComparacion} />
                <p>La igualdad estricta (<code>===</code>) compara valor y tipo sin coerción. La igualdad abstracta (<code>==</code>) intenta convertir los tipos antes de comparar. Por seguridad y predictibilidad, siempre se prefiere la igualdad estricta.</p>
            </section>
            {/* ||| Entender mejor NO BORRAR DEJAR PARA MEJOR COMPRENSION LUEGO. |||

|
            <section style={{ marginTop: '3rem' }}>
                <h2>Coerción en Práctica</h2>
                <ViewCode code={ejemploIgualdad} />
                <p>El uso de operadores abstractos puede llevar a resultados inesperados debido a reglas complejas de conversión de tipos implícita.</p>
            </section> */}

            <section style={{ marginTop: '3rem' }}>
                <h2>Lógica Booleana</h2>
                <ViewCode code={ejemploLogicos} />
                <p>Permiten combinar condiciones:</p>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    <li><code>&&</code> (AND): Retorna true si ambos operandos son verdaderos.</li>
                    <li><code>||</code> (OR): Retorna true si al menos un operando es verdadero.</li>
                    <li><code>!</code> (NOT): Invierte el valor de verdad del operando.</li>
                </ul>
            </section>


        </div>
    );
};

export default OriginPage;
