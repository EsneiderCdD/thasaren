
import ViewCode from "../../../components/reusables/ViewCode/ViewCode";
import {
    definicionBucle,
    bucleWhile,
    bucleDoWhile,
    bucleFor,
    bucleForIn,
    bucleForOf,
    breakContinue
} from "./data/cycles";
import styles from "./style/Cycles.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const Cycles = () => {
    const [currentCycle, setCurrentCycle] = useState("Anatomia");
    return (
        <section className={styles.cycles}>
            <h2>El Ciclo (Bucles e Iteraciones)</h2>
            <p>
                La automatización en el código nace de la capacidad de <strong>repetir</strong> instrucciones.
                Un bucle es un fragmento de lógica que se ejecuta una y otra vez hasta que una condición decide que es momento de parar.
            </p>

            <div className={styles.buttons}>
                <button onClick={() => setCurrentCycle("Anatomia")}>Anatomia</button>
                <button onClick={() => setCurrentCycle("ConditionalLoops")}>Bucles Condicionales</button>
                <button onClick={() => setCurrentCycle("DefiniteLoops")}>Bucles Definidos</button>
                <button onClick={() => setCurrentCycle("SmartIteration")}>Iteración Inteligente</button>
                <button onClick={() => setCurrentCycle("BreakContinue")}>Break y Continue</button>
            </div>




            {currentCycle === "Anatomia" && (
                <div className={styles.block}>
                    <h3>1. La Anatomía del Motor</h3>
                    <p>
                    Para evitar un "bucle infinito" que bloquee el sistema, todo ciclo necesita tres piezas fundamentales que actúan como su motor:
                </p>
                <ul>
                    <li><strong>Inicio:</strong> El estado inicial o combustible (ej. <code>let i = 0</code>).</li>
                    <li><strong>Condición:</strong> El rumbo. Mientras sea <code>true</code>, el motor sigue encendido.</li>
                    <li><strong>Actualización:</strong> El freno gradual. Cambia el estado en cada vuelta para acercarnos al final (ej. <code>i++</code>).</li>
                </ul>
                <ViewCode code={definicionBucle} />
            </div>
            )}


            {currentCycle === "ConditionalLoops" && (
                <div className={styles.block}>
                    <h3>2. Bucles Condicionales: Cuando el final es incierto</h3>
                    <p>
                        Usamos la familia <code>While</code> cuando no sabemos exactamente cuántas vueltas daremos, sino que dependemos de que algo externo cambie.
                </p>

                <h4>While (Evaluar antes de actuar)</h4>
                <p>
                    Es el bucle precavido. Primero pregunta si la condición se cumple; si no es así, ni siquiera entra a ejecutar el código.
                </p>
                <ViewCode code={bucleWhile} />

                <h4>Do...While (Actuar antes de evaluar)</h4>
                <p>
                    Es el bucle decidido. Ejecuta el código <strong>al menos una vez</strong> y solo después de la primera vuelta pregunta si debe continuar.
                </p>
                <ViewCode code={bucleDoWhile} />
            </div>
            )}

            {currentCycle === "DefiniteLoops" && (
                <div className={styles.block}>
                    <h3>3. Bucles de Conteo: El mapa definido</h3>
                    <p>
                        Cuando sí sabemos cuántas veces queremos repetir (o podemos calcularlo fácilmente), el <code>for</code> clásico es la herramienta de precisión. Centraliza el inicio, la condición y la actualización en una sola línea, reduciendo el error humano.
                </p>
                <ViewCode code={bucleFor} />
            </div>
            )}

            {currentCycle === "SmartIteration" && (
                <div className={styles.block}>
                    <h3>4. Iteración Inteligente: Cruce con Objetos y Arrays</h3>
                    <p>
                    Con las estructuras de datos (Objetos y Arreglos) que vimos anteriormente, JavaScript ofrece "llaves maestras" especializadas que recorren el contenido de forma semántica, sin necesidad de índices manuales.
                </p>

                <h4>For...in (Especialista en Objetos)</h4>
                <p>
                    Diseñado específicamente para viajar a través de las <strong>propiedades (claves)</strong> de un objeto.
                </p>
                <ViewCode code={bucleForIn} />

                <h4>For...of (Especialista en Colecciones)</h4>
                <p>
                    La forma más limpia de obtener los <strong>valores</strong> de una lista (Array) o incluso caracteres de un texto (String).
                </p>
                <ViewCode code={bucleForOf} />
            </div>
            )}

            {currentCycle === "BreakContinue" && (
                <div className={styles.block}>
                    <h3>5. El Freno de Emergencia y el Salto</h3>
                    <p>
                    Incluso dentro de la repetición, necesitamos controlar excepciones. Estas palabras clave permiten alterar el flujo natural del ciclo en tiempo de ejecución:
                </p>
                <ul>
                    <li><strong>Continue:</strong> "Ignora esta vuelta específica y salta inmediatamente a la siguiente".</li>
                    <li><strong>Break:</strong> "Abandona el bucle por completo ahora mismo".</li>
                </ul>
                <ViewCode code={breakContinue} />
            </div>
            )}
            <div>
                <Link to="cycles/exercises/1">
                <button>Ejercicios</button>
                </Link>

            </div>

        </section>
    );
};


export default Cycles;
