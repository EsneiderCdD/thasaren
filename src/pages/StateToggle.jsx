import ViewCode from "../components/reusables/ViewCode/ViewCode";
import {
    codeConfigObject,
    codeHookSetup,
    codeDataDerivation,
    codeRenderParams
} from "../data/codes/stateToggle";

const StateToggle = () => {
    return (
        <div className="container" style={{ padding: '2rem 1rem' }}>
            <h1>State Toggle Pattern</h1>
            <p>Arquitectura para alternar vistas basada en objetos de configuración y estado único.</p>

            <section style={{ marginTop: '3rem' }}>
                <h2>1. Objeto de Configuración</h2>
                <p>Estructura de datos estática definida fuera del componente para optimizar rendimiento y limpieza.</p>
                <ViewCode code={codeConfigObject} />
            </section>

            <section style={{ marginTop: '3rem' }}>
                <h2>2. Hook de Estado</h2>
                <p>Implementación de `useState` para almacenar la clave de referencia actual.</p>
                <ViewCode code={codeHookSetup} />
            </section>

            <section style={{ marginTop: '3rem' }}>
                <h2>3. Derivación de Datos</h2>
                <p>Extracción de la información relevante usando la clave del estado como índice.</p>
                <ViewCode code={codeDataDerivation} />
            </section>

            <section style={{ marginTop: '3rem' }}>
                <h2>4. Renderizado Dinámico</h2>
                <p>Interfaz de control y visualización de datos derivados.</p>
                <ViewCode code={codeRenderParams} />
            </section>
        </div>
    );
};

export default StateToggle;
