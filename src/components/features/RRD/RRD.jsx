import './styles/RRD.css';
import { IMAGEN_DEFAULT } from '../../constants'

function RRD() {
    return (
        <div className='container'>
            <div className='paso-uno'>
                <h1 className="hola">¡React Router Dom!</h1>
                <h2>Guía esencial para la navegación en React</h2>
                <p>Paso 1:</p> <h3>BrowserRouter</h3>
                <p>Descripción: El primer paso fundamental es envolver toda nuestra aplicación con el componente `BrowserRouter`. Este componente actúa como el proveedor principal de contexto para el enrutamiento, permitiendo que React Router detecte cambios en la URL y gestione la navegación de forma dinámica sin recargar el navegador.</p>
                <img src={IMAGEN_DEFAULT} alt="BrowserRouter Setup" />
            </div>
            <div className='paso-dos'>
                <p>Paso 2:</p> <h3>Routes y Route</h3>
                <p>Descripción: Utilizamos `Routes` como un contenedor inteligente que agrupa todas las rutas posibles de la aplicación. Dentro de él, cada `Route` define una relación única entre una dirección URL (path) y el componente visual (element) que debe mostrarse al usuario.</p>
                <img src={IMAGEN_DEFAULT} alt="Routes Configuration" />
            </div>
            <div className='paso-tres'>
                <p>Paso 3:</p> <h3>Crear Componentes de Vista</h3>
                <p>Descripción: Cada página de nuestra web debe ser un componente funcional independiente (.jsx). Estos componentes se importan y se asignan a sus respectivas rutas, permitiendo una arquitectura modular donde cada vista tiene su propia lógica y diseño bien definidos.</p>
                <img src={IMAGEN_DEFAULT} alt="JSX Components" />
            </div>
            <div className='paso-cuatro'>
                <p>Paso 4:</p> <h3>Link (Navegación Interna)</h3>
                <p>Descripción: Para permitir que el usuario navegue entre secciones sin recargar la página, usamos el componente `Link` con el atributo `to`. Esto garantiza una experiencia fluida, manteniendo el estado de React y transformando la navegación en una transición instantánea.</p>
                <img src={IMAGEN_DEFAULT} alt="Link Navigation" />
            </div>

        </div>
    );
}

export default RRD;