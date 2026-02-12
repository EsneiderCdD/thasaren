# La Hermenéutica de JavaScript

## Introducción

Hablar de hermenéutica es hablar de interpretación.

-   ¿Cómo se interpreta un lenguaje?
-   ¿Cómo produce sentido?
-   ¿Qué relación existe entre símbolo, intención y ejecución?

Preguntarnos por la hermenéutica de JavaScript es preguntarnos:

> ¿Cómo adquiere significado una instrucción en JavaScript?

------------------------------------------------------------------------

## 1. JavaScript no significa... hasta que se ejecuta

En el lenguaje natural, una palabra tiene significado antes de
pronunciarse. En JavaScript, una instrucción no tiene sentido pleno
hasta que el motor la evalúa.

``` javascript
let x = 5;
```

Eso no "es" 5. Es una declaración de intención que el motor interpreta y
convierte en estado.

La hermenéutica aquí es interpretativa y operativa. El significado no es
conceptual. Es ejecutable.

------------------------------------------------------------------------

## 2. JavaScript es un lenguaje orientado al estado

El sentido en JS no está en palabras aisladas, sino en:

-   El estado actual de la memoria.
-   El contexto de ejecución (scope).
-   El momento en el tiempo.

Ejemplo:

``` javascript
let count = 0;

function increment() {
  count++;
}
```

La función no significa nada por sí sola. Su significado emerge cuando
se ejecuta en un contexto donde `count` existe.

El significado depende del contexto.

------------------------------------------------------------------------

## 3. JavaScript es un lenguaje de eventos y temporalidad

JavaScript vive en el tiempo.

``` javascript
button.addEventListener("click", () => {
  console.log("Hola");
});
```

El significado no está solo en la línea escrita. Está en la promesa de
que, en el futuro, algo ocurrirá.

JavaScript interpreta el mundo como:

-   Estado actual
-   Posibles eventos
-   Reacción futura

Es un lenguaje fenomenológico: espera el acontecimiento.

------------------------------------------------------------------------

## 4. JavaScript es relacional, no sustancial

En filosofía clásica, una cosa "es" algo por su esencia.

En JavaScript, una cosa "es" según su comportamiento.

``` javascript
const obj = {
  saludar() {
    console.log("Hola");
  }
};
```

Un objeto no se define por esencia. Se define por sus métodos y
relaciones.

Es acto y potencia en ejecución.

------------------------------------------------------------------------

## 5. La unidad hermenéutica mínima: la expresión evaluable

La unidad mínima de sentido en JS no es la palabra ni la variable. Es la
expresión evaluable.

``` javascript
2 + 2
```

Produce un valor. El motor la interpreta y devuelve significado
numérico.

En JavaScript, el significado está ligado a:

evaluación → resultado → nuevo estado

------------------------------------------------------------------------

## Definición Hermenéutica

Podemos definir la hermenéutica de JavaScript así:

> JavaScript es un lenguaje cuyo significado emerge de la evaluación
> contextual de expresiones que transforman estado a través del tiempo.

No es solo sintaxis. Es:

-   Memoria
-   Contexto
-   Evento
-   Tiempo
-   Evaluación

------------------------------------------------------------------------

## Pregunta Abierta

Si el significado en JavaScript depende del estado y del tiempo...

¿El "ser" en JavaScript es estático o está siempre en devenir?
