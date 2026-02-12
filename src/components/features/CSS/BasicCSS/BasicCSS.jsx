import './styles/BasicCSS.css';
function InitCSS() {
    return (
        <div className="InitCSS-container">
            <h2 className="InitCSS-title">InitCSS</h2>
            <h3 className="InitCSS-text"> Reset CSS </h3>
            <p className="InitCSS-text">Despues de limpiar empezamos con margin = 0, padding = 0, box-sizing = border-box</p>
            <p className="InitCSS-text">*Podemos profundizar sobre un reset mas limpio y generalizado*.
                <h3 className="InitCSS-title">Variables/pre config basica</h3>
                <p className="InitCSS-text">(Opcional)</p>
            </p>
            <h3 className="InitCSS-title">Tipografia</h3>
            <p className="InitCSS-text">Podemos profundizar sobre tipografia y estilos de texto importantes</p>
            <h3 className="InitCSS-title">Colores</h3>
            <p>Podemos profundizar estrategia System UI Colors </p>
        </div>
    );
}

export default InitCSS;