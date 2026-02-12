# Tablas Ténicas: Arquitectura del Punto y la Entidad (Módulo 1)

Este documento despliega el temario técnico exhaustivo para el primer módulo de desarrollo. Sin narrativas, solo la estructura del conocimiento a explorar.

---

## 1. El Registro de la Memoria (Variables y Scope)

| Tema | Subtemas Técnicos | Conceptos Clave |
| :--- | :--- | :--- |
| **Declaración** | `let`, `const`, `var` | Reasignación vs Mutabilidad |
| **Ciclo de Vida** | Hoisting, Temporal Dead Zone (TDZ) | Creación vs Inicialización |
| **Alcance (Scope)** | Global, Function, Block Scope | Léxico, Clausuras (básico) |
| **Identificadores** | Naming conventions, Reserved words | Case sensitivity, CamelCase |

---

## 2. Las Esencias (Tipos de Datos y Valores)

| Categoría | Tipos | Propiedades / Métodos Básicos |
| :--- | :--- | :--- |
| **Primitivos** | `Number`, `String`, `Boolean` | `isNaN`, `length`, `toUpperCase` |
| **Especiales** | `Null`, `Undefined` | Diferencia semántica y técnica |
| **Nuevos/Avanzados** | `Symbol`, `BigInt` | Identificadores únicos, precisión |
| **Inferencia** | Operador `typeof` | Retorno de tipos, casos especiales |

---

## 3. La Entidad (Objetos y Estructura)

| Tema | Subtemas Técnicos | Operaciones |
| :--- | :--- | :--- |
| **Definición** | Object Literals `{}` | Creación de pares clave-valor |
| **Acceso** | Dot notation (`.`), Bracket notation (`[]`) | Acceso dinámico a propiedades |
| **Manipulación** | Add, Update, Delete properties | Operador `delete` |
| **Referencia** | Paso por referencia vs valor | Mutación de objetos, Spread operator (básico) |
| **Métodos Globales** | `Object.keys()`, `Object.values()`, `Object.entries()` | Iteración sobre estructuras |

---

## 4. El Colectivo (Arrays y su Gestión)

| Tema | Subtemas / Métodos | Descripción de Acción |
| :--- | :--- | :--- |
| **Estructura** | Indexing, `length` | Acceso posicional |
| **Mutación (Final)** | `.push()`, `.pop()` | Gestión de la pila (LIFO) |
| **Mutación (Inicio)** | `.shift()`, `.unshift()` | Gestión de colas (FIFO) |
| **Búsqueda** | `.indexOf()`, `.includes()`, `.findIndex()` | Localización de elementos |
| **Transformación 1** | `.join()`, `.split()`, `.reverse()` | Reorganización y conversión |
| **Extracción** | `.slice()`, `.splice()` | Copia vs Modificación de tramos |

---

## 5. Lógica de Decisión (Operadores y Control)

| Categoría | Operadores | Estructuras de Control |
| :--- | :--- | :--- |
| **Aritmética** | `+`, `-`, `*`, `/`, `%`, `**` | Operaciones matemáticas |
| **Comparación** | `==`, `===`, `!=`, `!==`, `<`, `>`, `<=`, `>=` | Igualdad profunda vs superficial |
| **Lógica** | `&&` (AND), `||` (OR), `!` (NOT) | Tablas de verdad, Short-circuiting |
| **Condicionales** | `if`, `else if`, `else`, `switch` | Ramificación del flujo |
| **Ternarios** | `condicion ? true : false` | Asignación condicional compacta |

---

## 6. El Devenir (Ciclos e Iteración)

| Tipo de Ciclo | Uso Técnico | Control de Flujo |
| :--- | :--- | :--- |
| **Incrementales** | `for (let i = 0; ...)` | Control exacto por índice |
| **Condicionales** | `while`, `do...while` | Ejecución basada en estado dinámico |
| **Estructurados** | `for...of` | Iteración sobre valores (Arrays/Strings) |
| **Propiedades** | `for...in` | Iteración sobre claves (Objetos) |
| **Modificadores** | `break`, `continue` | Salto y ruptura de secuencias |

---

> **Planificación de Práctica:** Crear un sistema de validación de entradas y un gestor de inventario (objetos dentro de arrays) para poner a prueba todas las tablas anteriores.
