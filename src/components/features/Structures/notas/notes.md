## 🔍 Notas de Aprendizaje: Objetos en JavaScript

| Herramienta | Uso | Descripción |
| :--- | :--- | :--- |
| `hasOwnProperty` | `obj.hasOwnProperty('prop')` | Método de instancia que devuelve `true` si el objeto tiene la propiedad especificada como propiedad propia (no heredada). Es muy seguro. |
| Operador `in` | `'prop' in obj` | Operador que devuelve `true` si la propiedad existe en el objeto o en su cadena de prototipos. Más corto de escribir. |
| Optional Chaining | `obj?.prop` | Permite leer el valor de una propiedad sin preocuparse si el objeto es `null` o `undefined`. Si no existe, devuelve `undefined` en lugar de romper el código. |
| Alias (Destructuring) | `const { nombre: n } = obj` | Permite extraer una propiedad pero guardarla con un nombre diferente (`n`). |
