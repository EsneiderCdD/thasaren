import './styles/Init.css';

const Init = () => {
    return (
        <div className="init-container">
            <h2 className="init-title">Initialize</h2>
            <h3 className="init-text">npm create vite@latest</h3>
            <h4 className="init-text">thasaren --template react --javascript --yes</h4>
            <h3 className="init-text">npm install</h3>
            <h3 className="init-text">npm run dev</h3>
            <p className="init-text">Inicializamos el proyecto con Vite y React</p>
        </div>
    );
};

export default Init;