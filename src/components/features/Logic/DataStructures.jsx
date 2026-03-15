import { useState } from "react";
import ViewCode from "../../../components/reusables/ViewCode/ViewCode";
import {
    arregloHeterogeneo,
    arrayDeObjetos,
    matriz,
    objetosAnidados,
    arbol,
    entidadDiccionario,
    diccionarioArrays
} from "./data/structures";
import styles from "./style/Logic.module.css";

const structures = {
    matriz: {
        title: "Matriz",
        description: "Un arreglo bidimensional (un arreglo que contiene otros arreglos). Sus elementos se organizan típicamente en filas y columnas. Frecuentemente utilizados para representaciones gráficas o numéricas.",
        code: matriz,
    },
    arrayDeObjetos: {
        title: "Array de Objetos",
        description: "Una de las estructuras más comunes. Es una lista donde cada elemento es un objeto, típicamente usado para representar colecciones de registros o entidades similares de bases de datos o APIs.",
        code: arrayDeObjetos,
    },
    arregloHeterogeneo: {
        title: "Arreglo Heterogéneo",
        description: "Un arreglo que contiene una mezcla de diferentes tipos de datos (números, strings, booleanos, objetos, funciones, sub-arreglos).",
        code: arregloHeterogeneo,
    },
    objetosAnidados: {
        title: "Objetos Anidados",
        description: "Objetos que contienen otros objetos como propiedades, lo que permite estructurar la información de formas más jerárquicas y detalladas, modelando entidades reales con sub-propiedades.",
        code: objetosAnidados,
    },
    arbol: {
        title: "Árbol",
        description: "Estructura jerárquica no lineal donde, a partir de una raíz, cada nodo puede tener múltiples nodos 'hijos'. Ideal para estructurar componentes visuales, directivos y menús complejos.",
        code: arbol,
    },
    entidadDiccionario: {
        title: "Entidad / Diccionario",
        description: "Un objeto utilizado como diccionario donde sus propiedades (keys) actúan como identificadores únicos, permitiendo el acceso directo a una entidad de tiempo (O)1, muy eficiente respecto a las búsquedas lineales en Arrays.",
        code: entidadDiccionario,
    },
    diccionarioArrays: {
        title: "Diccionario de Arrays",
        description: "Una variante potente del diccionario donde los valores asociados a cada clave son arreglos. Muy útil para agrupar múltiples elementos bajo grandes categorías que pueden iterarse.",
        code: diccionarioArrays,
    }
};

const DataStructures = () => {
    const [estructura, setEstructura] = useState('matriz');

    const currentStructure = structures[estructura];

    return (
        <div className={styles.container}>
            <div className={styles.variables}>

                <div className={styles.variables_header} style={{ flexWrap: 'wrap' }}>
                    <div className={styles.variables_info} style={{ width: '100%' }}>
                        <h2>Estructura de Datos</h2>
                        <p>
                            Más allá de los tipos primitivos existen las estructuras de datos, que nos permiten organizar, almacenar y gestionar colecciones de información para acceder a ellas y modificarlas eficientemente. A continuación exploramos las principales formas de estructurarlos con objetos y arreglos.
                        </p>
                    </div>

                    <div className={styles.variables_buttons} style={{ marginTop: '1rem', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
                        <button onClick={() => setEstructura('matriz')}>Matriz</button>
                        <button onClick={() => setEstructura('arrayDeObjetos')}>Array de Objetos</button>
                        <button onClick={() => setEstructura('arregloHeterogeneo')}>Arreglo Heterogéneo</button>
                        <button onClick={() => setEstructura('objetosAnidados')}>Objetos Anidados</button>
                        <button onClick={() => setEstructura('arbol')}>Árbol</button>
                        <button onClick={() => setEstructura('entidadDiccionario')}>Entidad/Diccionario</button>
                        <button onClick={() => setEstructura('diccionarioArrays')}>Diccionario Arrays</button>
                    </div>
                </div>

                <h3>{currentStructure.title}</h3>
                <p>{currentStructure.description}</p>
                <ViewCode code={currentStructure.code} />

            </div>
        </div>
    );
};

export default DataStructures;
