import './styles/HelloWorld.css';
import Origin from './Origin/Origin';
function HelloWorld() {
    return (
        <div>
            <div className="HelloWorld-container">
                <h2 className="HelloWorld-title">HelloWorld</h2>
                <h3 className="HelloWorld-title">Metodo Mayeutico como origen del conocimiento</h3>
                <h3>hermenéutica de JavaScript</h3>
                <p>frase cursi tipo "todo comienza con un hoja en blanco" </p>
                <h3>JavaScript es</h3>
                <br />
                <p>Un lenguaje de programación diseñado para darle instrucciones a páginas web y hacerlas interactivas.</p>
                <br />
                <i>Soy un punto o puedo ser una forma</i>
                <br />
                <p>Cuando ese punto toma forma,</p> <i>cuando ese algo una intencion</i> <p>necesitamos saber como darle una instruccion</p>
            
            </div>
                <Origin />
        </div>
        
    );
}

export default HelloWorld;