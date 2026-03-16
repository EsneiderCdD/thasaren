import {
    ejemploLet, ejemploConst, ejemploVar,
    ejemploNumber, ejemploString, ejemploBoolean,
    ejemploUndefined, ejemploNull,
} from "../../Logic/data/variables";

import {
    arregloHeterogeneo, arrayDeObjetos, matriz,
    objetosAnidados, arbol, entidadDiccionario,
    diccionarioArrays
} from "../../Logic/data/structures";

export const dataBase = {
    declarations: {
        var: { title: "var", description: "Declaración con alcance de función o global, susceptible a hoisting. Su uso se considera obsoleto en favor de la predictibilidad de let y const.", code: ejemploVar, categoryLabel: "Declaraciones" },
        let: { title: "let", description: "Declara una variable local con alcance de bloque (block-scoped) que permite reasignación de valores. Es la elección correcta para estados mutables.", code: ejemploLet, categoryLabel: "Declaraciones" },
        const: { title: "const", description: "Declara una referencia de solo lectura dentro del bloque. Impide la reasignación del identificador. Debe ser la opción por defecto.", code: ejemploConst, categoryLabel: "Declaraciones" },
    },
    types: {
        number: { title: "Number", description: "Representa valores numéricos, tanto enteros como de punto flotante. Soporta operaciones aritméticas estándar.", code: ejemploNumber, categoryLabel: "Tipos de Datos" },
        string: { title: "String", description: "Secuencia inmutable de caracteres para representar texto. Se delimita con comillas simples ' ' o dobles", code: ejemploString, categoryLabel: "Tipos de Datos" },
        boolean: { title: "Boolean", description: "Tipo lógico primitivo que representa uno de dos valores: true o false. Base del control de flujo.", code: ejemploBoolean, categoryLabel: "Tipos de Datos" },
        undefined: { title: "undefined", description: "Valor primitivo asignado automáticamente a variables declaradas pero no inicializadas. Ausencia por omisión del sistema.", code: ejemploUndefined, categoryLabel: "Tipos de Datos" },
        null: { title: "null", description: "Valor primitivo que representa la ausencia intencional de cualquier valor de objeto. 'Vacío' explícito del programador.", code: ejemploNull, categoryLabel: "Tipos de Datos" },
    },
    structures: {
        matriz: { title: "Matriz", description: "Un arreglo bidimensional (un arreglo que contiene otros arreglos). Sus elementos se organizan típicamente en filas y columnas. Frecuentemente utilizados para representaciones gráficas o numéricas.", code: matriz, categoryLabel: "Estructuras" },
        arrayDeObjetos: { title: "Array de Objetos", description: "Una de las estructuras más comunes. Es una lista donde cada elemento es un objeto, típicamente usado para representar colecciones de registros o entidades similares de bases de datos o APIs.", code: arrayDeObjetos, categoryLabel: "Estructuras" },
        arregloHeterogeneo: { title: "Arreglo Heterogéneo", description: "Un arreglo que contiene una mezcla de diferentes tipos de datos (números, strings, booleanos, objetos, funciones, sub-arreglos).", code: arregloHeterogeneo, categoryLabel: "Estructuras" },
        objetosAnidados: { title: "Objetos Anidados", description: "Objetos que contienen otros objetos como propiedades, lo que permite estructurar la información de formas más jerárquicas y detalladas, modelando entidades reales con sub-propiedades.", code: objetosAnidados, categoryLabel: "Estructuras" },
        arbol: { title: "Árbol", description: "Estructura jerárquica no lineal donde, a partir de una raíz, cada nodo puede tener múltiples nodos 'hijos'. Ideal para estructurar componentes visuales, directivos y menús complejos.", code: arbol, categoryLabel: "Estructuras" },
        entidadDiccionario: { title: "Entidad / Diccionario", description: "Un objeto utilizado como diccionario donde sus propiedades (keys) actúan como identificadores únicos, permitiendo el acceso directo a una entidad de tiempo O(1), muy eficiente respecto a las búsquedas lineales en Arrays.", code: entidadDiccionario, categoryLabel: "Estructuras" },
        diccionarioArrays: { title: "Diccionario de Arrays", description: "Una variante potente del diccionario donde los valores asociados a cada clave son arreglos. Muy útil para agrupar múltiples elementos bajo grandes categorías que pueden iterarse.", code: diccionarioArrays, categoryLabel: "Estructuras" }
    }
};
