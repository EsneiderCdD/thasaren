export const codeConfigObject = `// 1. Objeto de Configuración (Fuera del componente)
// Define los datos estáticos que no cambian.
// Actúa como nuestra "Base de Datos" local.

const viewData = {
    optionA: {
        title: "Vista A",
        content: "Contenido para la opción A...",
        color: "blue"
    },
    optionB: {
        title: "Vista B",
        content: "Contenido para la opción B...",
        color: "green"
    },
    optionC: {
        title: "Vista C",
        content: "Contenido para la opción C...",
        color: "red"
    }
};`;

export const codeHookSetup = `// 2. Hook y Estado Base (Dentro del componente)
// 'activeKey' almacena la clave de la opción seleccionada.
// Iniciamos con una opción por defecto ('optionA').

import { useState } from 'react';

const MyComponent = () => {
    const [activeKey, setActiveKey] = useState('optionA');
    
    // ...
};`;

export const codeDataDerivation = `// 3. Derivar Datos
// Recuperamos el objeto completo correspondiente a la clave activa.
// No usamos if/else ni switch, solo acceso directo por clave.

const currentView = viewData[activeKey]; 

// currentView ahora es: { title: "Vista A", content: "...", ... }`;

export const codeRenderParams = `// 4. Renderizado y Control
// Usamos 'setActiveKey' en los botones para cambiar el estado.
// Renderizamos los datos de 'currentView' dinámicamente.

return (
    <div>
        {/* Controles */}
        <div className="controls">
            <button onClick={() => setActiveKey('optionA')}>Opción A</button>
            <button onClick={() => setActiveKey('optionB')}>Opción B</button>
            <button onClick={() => setActiveKey('optionC')}>Opción C</button>
        </div>

        {/* Vista Dinámica */}
        <div className="dynamic-content" style={{ borderColor: currentView.color }}>
            <h2>{currentView.title}</h2>
            <p>{currentView.content}</p>
        </div>
    </div>
);`;
