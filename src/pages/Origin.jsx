import ViewCode from "../components/reusables/ViewCode/ViewCode";
import { ejemploLet, ejemploConst, ejemploVar, ejemploNumber, ejemploString, ejemploBoolean, ejemploUndefined, ejemploNull, ejemploDiferencias, ejemploComparacion, ejemploIgualdad, ejemploLogicos } from "../components/reusables/ViewCode/code/data";

const OriginPage = () => {
    return (
        <div className="container" style={{ padding: '2rem 1rem' }}>
            <h1>El Primer Acto: Nombrar</h1>

            <p>Antes de que algo pueda transformarse, debe existir. Antes de que algo exista en el código, debe ser nombrado.</p>

            <p>Nombrar es el primer acto de creación en JavaScript. Declarar es cómo lo formalizamos.</p>

            <section style={{ marginTop: '3rem' }}>
                <h2>¿Qué es declarar?</h2>
                <p>Declarar es decirle al motor: "Reserva un espacio. Dale un nombre".</p>
                <p>JavaScript ofrece tres formas de declarar.</p>
            </section>

            <section style={{ marginTop: '3rem' }}>
                <h2>let</h2>
                <ViewCode code={ejemploLet} />
                <p>"Esto existe ahora, pero puede cambiar después".</p>
                <p>Usas <code>let</code> cuando el valor no es final.</p>
            </section>

            <section style={{ marginTop: '3rem' }}>
                <h2>const</h2>
                <ViewCode code={ejemploConst} />
                <p>"Esto es. Y seguirá siendo".</p>
                <p>Es la declaración de lo que no puede ser reasignado.</p>
                <p>Un objeto declarado con <code>const</code> puede mutar internamente. Pero la referencia permanece.</p>
                <p>Es la diferencia entre cambiar el contenido de una caja y cambiar la caja misma.</p>
            </section>

            <section style={{ marginTop: '3rem' }}>
                <h2>var</h2>
                <ViewCode code={ejemploVar} />
                <p>Antes de <code>let</code> y <code>const</code>, existía <code>var</code>.</p>
                <p>No respetaba los límites del contexto inmediato. Ignoraba los bloques.</p>
                <p>Hoy es un vestigio. No debe usarse.</p>
            </section>

            <section style={{ marginTop: '3rem' }}>
                <h2>La Pregunta</h2>
                <p>¿Cuándo usar <code>let</code>? ¿Cuándo usar <code>const</code>?</p>
                <p>Pregúntate: ¿Este valor va a ser reasignado?</p>
                <p>Si no, usa <code>const</code>. Si sí, usa <code>let</code>.</p>
                <p>No uses <code>var</code>.</p>
            </section>

            <h1 style={{ marginTop: '5rem' }}>Las Esencias: Tipos de Datos</h1>

            <p>Has nombrado. Has declarado un espacio. Pero ese espacio está vacío hasta que le das forma.</p>

            <p>En JavaScript, la forma se llama tipo. El tipo define qué ES ese valor.</p>

            <section style={{ marginTop: '3rem' }}>
                <h2>¿Qué es un tipo?</h2>
                <p>Un tipo es la naturaleza del valor. Es la respuesta a la pregunta: ¿Qué clase de cosa es esto?</p>
                <p>JavaScript reconoce formas básicas. Las llamamos tipos primitivos.</p>
            </section>

            <section style={{ marginTop: '3rem' }}>
                <h2>Number</h2>
                <ViewCode code={ejemploNumber} />
                <p>Number es la forma de la cantidad. De lo medible. De lo que puede ser contado, sumado, restado.</p>
                <p>Puede ser entero (<code>25</code>) o decimal (<code>99.99</code>). Puede ser positivo o negativo.</p>
                <p>JavaScript no distingue entre enteros y decimales. Todo número es un <code>Number</code>.</p>
                <p>Usas Number cuando necesitas representar magnitud, posición, o medida.</p>
            </section>

            <section style={{ marginTop: '3rem' }}>
                <h2>String</h2>
                <ViewCode code={ejemploString} />
                <p>String es la forma del texto. De lo que puede ser leído. De lo que tiene significado lingüístico.</p>
                <p>Se declara con comillas dobles (<code>"texto"</code>) o simples (<code>'texto'</code>). Ambas son equivalentes.</p>
                <p>Un String puede estar vacío (<code>""</code>). Existe, pero no contiene caracteres.</p>
                <p>Usas String cuando necesitas representar nombres, mensajes, o cualquier secuencia de caracteres.</p>
            </section>

            <section style={{ marginTop: '3rem' }}>
                <h2>Boolean</h2>
                <ViewCode code={ejemploBoolean} />
                <p>Boolean es la forma de la verdad. De lo binario. De lo que solo puede ser o no ser.</p>
                <p>Solo tiene dos valores posibles: <code>true</code> (verdadero) o <code>false</code> (falso).</p>
                <p>No hay grises. No hay "tal vez". Es la lógica pura.</p>
                <p>Usas Boolean cuando necesitas representar estados: activo/inactivo, completado/pendiente, visible/oculto.</p>
            </section>

            <section style={{ marginTop: '3rem' }}>
                <h2>La Pregunta</h2>
                <p>¿Cómo saber qué tipo usar?</p>
                <p>Pregúntate: ¿Qué naturaleza tiene este valor?</p>
                <p>Si es cantidad, usa <code>Number</code>. Si es texto, usa <code>String</code>. Si es verdad o falsedad, usa <code>Boolean</code>.</p>
            </section>


            <h1 style={{ marginTop: '5rem' }}>La Ausencia</h1>

            <p>Has nombrado. Has declarado. Has dado forma.</p>
            <p>Pero… ¿qué ocurre cuando algo existe, pero aún no tiene valor?</p>

            <section style={{ marginTop: '3rem' }}>
                <h2>Declarar no es asignar</h2>
                <ViewCode code={ejemploUndefined} />
                <p>Aquí el nombre existe.</p>
                <p>El espacio fue reservado.</p>
                <p>Pero no se le ha dado contenido.</p>
                <p>El motor responde con una palabra especial: <code>undefined</code>.</p>
                <p><code>undefined</code> significa: “Existe, pero aún no tiene valor asignado”.</p>
            </section>

            <section style={{ marginTop: '3rem' }}>
                <h2>null</h2>
                <ViewCode code={ejemploNull} />
                <p><code>null</code> también representa ausencia.</p>
                <p>Pero no es lo mismo.</p>
                <p><code>null</code> es una decisión consciente.</p>
                <p>Es decir: “Aquí no hay nada… y lo sé”.</p>
            </section>

            <section style={{ marginTop: '3rem' }}>
                <h2>La Diferencia</h2>
                <ViewCode code={ejemploDiferencias} />
                <p><code>undefined</code> es la ausencia por omisión.</p>
                <p><code>null</code> es la ausencia por intención.</p>
                <p>Uno es el silencio.</p>
                <p>El otro es la declaración de vacío.</p>
            </section>


            <h1 style={{ marginTop: '5rem' }}>Operadores</h1>

            <p>JavaScript utiliza símbolos para evaluar, comparar y decidir.</p>
            <p>No son palabras largas. Son signos.</p>
            <p>El lenguaje los interpreta para producir resultados.</p>

            <section style={{ marginTop: '3rem' }}>
                <h2>Comparación</h2>
                <ViewCode code={ejemploComparacion} />
                <p><code>==</code> compara valores (convierte tipos si es necesario).</p>
                <p><code>===</code> compara valor y tipo (comparación estricta).</p>
                <p><code>!=</code> diferente.</p>
                <p><code>!==</code> diferente estrictamente.</p>
            </section>

            <section style={{ marginTop: '3rem' }}>
                <h2>Igualdad en práctica</h2>
                <ViewCode code={ejemploIgualdad} />
                <p>Siempre que sea posible, usa <code>===</code>.</p>
                <p>Evita comparaciones ambiguas.</p>
            </section>

            <section style={{ marginTop: '3rem' }}>
                <h2>Operadores Lógicos</h2>
                <ViewCode code={ejemploLogicos} />
                <p><code>&&</code> AND → ambas condiciones deben cumplirse.</p>
                <p><code>||</code> OR → al menos una condición debe cumplirse.</p>
                <p><code>!</code> NOT → invierte el valor booleano.</p>
            </section>


        </div>
    );
};

export default OriginPage;
