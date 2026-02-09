import './styles/HelloW.css';
import { IMAGEN_DEFAULT } from '../../constants'

function HelloW() {
    return (
        <div className='container'>
            <div className='paso-uno'>
                <h1 className="hola">¡Hola Mundo con Vite!</h1>
                <h2>Primeros pasos para crear tu aplicación</h2>
                <p>Paso 1:</p> <h3>Crear la base con Vite</h3>
                <p>Descripción: El primer paso es ejecutar el comando `npm create vite@latest` en la terminal. Esto nos permite utilizar Vite, una herramienta moderna que ofrece una experiencia de desarrollo extremadamente rápida y optimizada para proyectos de React.</p>
                <img src={IMAGEN_DEFAULT} alt="Vite Init" />
            </div>
            <div className='paso-dos'>
                <p>Paso 2:</p> <h3>Nombre y Configuración</h3>
                <p>Descripción: Debemos asignar un nombre a nuestra carpeta y seleccionar la plantilla de 'React'. Este proceso define la identidad de nuestro proyecto y prepara el entorno con los archivos base necesarios para empezar a trabajar.</p>
                <img src={IMAGEN_DEFAULT} alt="Project Setup" />
            </div>
            <div className='paso-tres'>
                <p>Paso 3:</p> <h3>Instalación de Dependencias</h3>
                <p>Descripción: Una vez dentro de la carpeta del proyecto, ejecutamos `npm install`. Este comando descarga todos los paquetes y librerías de React que están listados en nuestro archivo `package.json`, preparando el terreno para la ejecución.</p>
                <img src={IMAGEN_DEFAULT} alt="NPM Install" />
            </div>
            <div className='paso-cuatro'>
                <p>Paso 4:</p> <h3>Limpieza y Primer Arranque</h3>
                <p>Descripción: Es nuestro "primer momento": eliminamos el código de ejemplo innecesario para empezar desde cero y lanzamos el servidor con `npm run dev`. Ahora estamos listos para ver nuestra aplicación funcionando en el navegador.</p>
                <img src={IMAGEN_DEFAULT} alt="Project Dev" />
            </div>

        </div>
    );
}

export default HelloW;