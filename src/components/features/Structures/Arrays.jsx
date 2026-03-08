
import ViewCode from "../../../components/reusables/ViewCode/ViewCode";
import {
    declaracionArray,
    accesoArray,
    modificarArray,
    metodoPush,
    metodoPop,
    metodoUnshift,
    metodoShift,
    metodoMap,
    metodoFilter,
    metodoFind,
    destructuringArray,
    spreadArray
} from "../../../data/codes/structures";
import styles from "./style/Structures.module.css";
import { useState } from "react";

const Arrays = () => {

    const arrayStructure = {
        mutables: {
            label: "Métodos Mutables",
            description: (
                <>
                    JavaScript ofrece herramientas para gestionar el array como una pila o cola. Estos métodos <strong>alteran</strong> el array original.
                </>
            ),
            code: modificarArray,
            methods: {
                push: {
                    label: "Push",
                    description: <>Añade uno o más elementos al final del array. No es una operación inmutable.</>,
                    code: metodoPush
                },
                pop: {
                    label: "Pop",
                    description: <>Elimina el último elemento y lo devuelve. Altera el array original.</>,
                    code: metodoPop
                },
                unshift: {
                    label: "Unshift",
                    description: <>Añade elementos al principio. Desplaza todos los índices previos.</>,
                    code: metodoUnshift
                },
                shift: {
                    label: "Shift",
                    description: <>Elimina el primer elemento y lo devuelve. Re-indexa todo el array.</>,
                    code: metodoShift
                }
            }
        },
        inmutables: {
            label: "Métodos Inmutables",
            description: (
                <>
                    Estos métodos recorren el array y nos devuelven <strong>uno nuevo</strong>, dejando el original intacto.
                </>
            ),
            methods: {
                map: {
                    label: "Map",
                    description: <>Crea un array nuevo con el resultado de transformar cada elemento.</>,
                    code: metodoMap
                },
                filter: {
                    label: "Filter",
                    description: <>Crea un array nuevo con los elementos que cumplen una condición.</>,
                    code: metodoFilter
                },
                find: {
                    label: "Find",
                    description: <>Devuelve el primer elemento que coincida con la búsqueda.</>,
                    code: metodoFind
                },
            }
        }
    }

    const [currentPropty, setCurrentPropty] = useState(null)
    const [method, setMethod] = useState(null)

    return (
        <section className={styles.arrays}>
            <h2>Arrays (Listas)</h2>
            <p>
                Colecciones ordenadas de elementos, donde cada posición tiene un <strong>índice numérico</strong> (comenzando en 0).
            </p>
            <div className={styles.block}>
                <h3>Declaración y Acceso</h3>
                <p>
                    Se crean con corchetes <code>[]</code>. Para leer un valor, usamos su posición numérica.
                </p>
                <ViewCode code={`${declaracionArray}\n\n${accesoArray}`} />
            </div>

            <button onClick={() => { setCurrentPropty("mutables"); setMethod(null); }}>
                Mutables
            </button>
            <button onClick={() => { setCurrentPropty("inmutables"); setMethod(null); }}>
                Inmutables
            </button>

            {currentPropty && (
                <div className={styles.block}>
                    <h3>{arrayStructure[currentPropty].label}</h3>
                    <p>{arrayStructure[currentPropty].description}</p>

                    {/* Botones simples para navegar métodos (como el usuario sugirió) */}
                    <div>
                        {Object.keys(arrayStructure[currentPropty].methods).map(mKey => (
                            <button key={mKey} onClick={() => setMethod(mKey)} style={{ margin: '5px' }}>
                                {arrayStructure[currentPropty].methods[mKey].label}
                            </button>
                        ))}
                    </div>

                    {method && (
                        <div className={styles.block}>
                            <h4>{arrayStructure[currentPropty].methods[method].label}</h4>
                            <p>{arrayStructure[currentPropty].methods[method].description}</p>
                            <ViewCode code={arrayStructure[currentPropty].methods[method].code} />
                        </div>
                    )}
                </div>
            )}

            <div className={styles.block}>
                <h3>Destructuring (Extracción Posicional)</h3>
                <p>
                    A diferencia de los Objetos, en los Arrays importa la <strong>posición</strong>.
                </p>
                <ViewCode code={destructuringArray} />
            </div>

            <div className={styles.block}>
                <h3>Spread Operator (...)</h3>
                <p>
                    Herramienta clave para la inmutabilidad y la copia de listas.
                </p>
                <ViewCode code={spreadArray} />
            </div>

        </section>
    );
};

export default Arrays;
