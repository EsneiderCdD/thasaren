
import ViewCode from "../../../components/reusables/ViewCode/ViewCode";
import {
    ejemploBrowser,
    ejemploRoutes,
    ejemploOutlet,
    ejemploLink,
    ejemploRoutesComponent
} from "../../../data/codes/router";
import styles from "./style/Router.module.css";

const RouterDocs = () => {
    return (
        <div className={styles.container}>
            <h2>Enrutamiento (React Router DOM)</h2>
            <p>
                Gestión de rutas del lado cliente (SPA) para navegación sin recarga.
            </p>

            {/* BROWSER ROUTER */}
            <section className={styles.section}>
                <h3>1. BrowserRouter</h3>
                <p>
                    El componente raíz que envuelve la aplicación y provee el contexto de navegación.
                </p>
                <ViewCode code={ejemploBrowser} />
            </section>

            {/* ROUTES (HOOK) */}
            <section className={styles.section}>
                <h3>2. Configuración con Hooks (<code>useRoutes</code>)</h3>
                <p>
                    Definición declarativa de la estructura de rutas anidadas mediante objetos. Es la forma moderna y la que usamos en este proyecto.
                </p>
                <ViewCode code={ejemploRoutes} />
            </section>

            {/* OUTLET */}
            <section className={styles.section}>
                <h3>3. Layout y Outlet</h3>
                <p>
                    El componente <code>Outlet</code> sirve como marcador de posición donde se renderizarán las rutas hijas dentro del layout padre.
                </p>
                <ViewCode code={ejemploOutlet} />
            </section>

            {/* LINK */}
            <section className={styles.section}>
                <h3>4. Navegación (Link)</h3>
                <p>
                    Componente declarativo para transiciones de URL sin recarga completa del DOM.
                </p>
                <ViewCode code={ejemploLink} />
            </section>

            {/* ROUTES (COMPONENT) */}
            <section className={styles.section}>
                <h3>5. Routes & Route (Componentes JSX)</h3>
                <p>
                    La forma tradicional de definir rutas usando componentes JSX. Útil si prefieres una sintaxis visual en lugar de objetos.
                </p>
                <ViewCode code={ejemploRoutesComponent} />
            </section>

        </div>
    );
};

export default RouterDocs;
