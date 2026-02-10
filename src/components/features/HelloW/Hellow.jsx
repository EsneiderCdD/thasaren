import './styles/HelloW.css';
import { IMAGEN_DEFAULT } from '../../constants';
import createvitelatest from '../../../assets/images/preamble/createvitelatest.png';

function HelloW() {
    return (
        <div className='hello-w'>
            <div className='hello-w-container'>

                {/* Paso 1 */}
                <div className="block">
                    <div className="block-up">
                        <img src={createvitelatest} alt="Vite Init" />
                    </div>
                    <div className="block-down">
                        <div>
                            <h3>Inicializar Vite con React</h3>
                        </div>
                        <div>
                            <p className='step'>npm create vite@latest</p>
                            <p className='description'>En consola puedo escribir uno de los dos comandos para crear un proyecto con Vite.</p>
                        </div>
                    </div>
                </div>

                {/* Paso 2 */}
                <div className="block">
                    <div className="block-up">
                        <img src={IMAGEN_DEFAULT} alt="NPM Commands" />
                    </div>
                    <div className="block-down">
                        <div>
                            <h3>Levantar el proyecto en local</h3>
                        </div>
                        <div>
                            <p className='step'>npm install - npm run dev</p>
                            <p className='description'>entro a la carpeta del proyecto (cd mi-proyecto), instalo las dependencias y levanto el servidor</p>
                        </div>
                    </div>
                </div>

                {/* Paso 3 */}
                <div className="block">
                    <div className="block-up">
                        
                    </div>
                    <div className="block-down">
                        <div>
                            <h3>Limpieza e inicialización</h3>
                        </div>
                        <div>
                            <p className='step'>Limpieza e inicialización</p>
                            <p className='description'>Con el proyecto ya corriendo en el navegador, elimino archivos de ejemplo como logos, estilos y componentes innecesarios.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default HelloW;