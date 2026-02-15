export const ejemploBasico = `const universo = "infinito";
let conciencia = true;

function despertar() {
    return "Conciencia despertada";
}`;

export const ejemploLet = `let edad;
let nombre = "Esneider";
let contador = 0;`;

export const ejemploConst = `const PI = 3.14;`;

export const ejemploVar = `var legado = "antiguo";`;

export const ejemploNumber = `let edad = 25;
let temperatura = -10;
let precio = 99.99;`;

export const ejemploString = `let nombre = "Juan";
let mensaje = 'Hola mundo';
let vacio = "";`;

export const ejemploBoolean = `let activo = true;
let completado = false;`;

/* =========================
   LA AUSENCIA
========================= */

export const ejemploUndefined = `let usuario;

console.log(usuario); 
// undefined`;

export const ejemploNull = `let respuesta = null;

console.log(respuesta); 
// null`;

export const ejemploDiferencias = `let a;
let b = null;

console.log(a);       
// undefined

console.log(b);       
// null

console.log(a === b); 
// false`;

/* =========================
   OPERADORES
========================= */

export const ejemploComparacion = `console.log(5 == "5");  
// true (convierte el string a número)

console.log(5 === "5"); 
// false (valor igual, tipo diferente)

console.log(10 != "10");  
// false

console.log(10 !== "10"); 
// true`;

export const ejemploIgualdad = `let numero = 0;

console.log(numero == false);  
// true

console.log(numero === false); 
// false

console.log(typeof numero);    
// "number"`;


export const ejemploLogicos = `let edad = 20;
let tieneLicencia = true;

console.log(edad >= 18 && tieneLicencia); 
// true

console.log(edad < 18 || tieneLicencia);  
// true

console.log(!tieneLicencia);              
// false`;

/* =========================
   VIEW CODE COMPONENT
========================= */

export const ejemploEsqueleto = `import './ViewCode.css';

const ViewCode = () => {
  return (
    <div className="code-editor-container">
       <div className="line-numbers">1</div>
       <div className="code-content">Esperando código...</div>
    </div>
  );
};

export default ViewCode;`;

export const ejemploInyeccion = `const ViewCode = ({ code = "" }) => {
    const lines = code.split('\\n');
    
    return (
        <div className="code-editor-container">
            <div className="line-number">
                {lines.map((_, index) => (
                    <div key={index}>{index + 1}</div>
                ))}
            </div>
            <div className="code-content">
                {lines.map((line, index) => (
                    <div key={index}>{line || '\\u00A0'}</div>
                ))}
            </div>
        </div>
    );
};`;

export const ejemploTokenizer = `export const tokenizeLine = (line, language = 'javascript') => {
    if (language !== 'javascript') {
        return line;
    }

    const patterns = [
        { regex: /(["'\`])(.*?)\\1/g, className: 'string' },
        { 
            regex: /\\b(const|let|var|function|return|if|else|class)\\b/g, 
            className: 'keyword' 
        },
        { regex: /\\b(true|false|null|undefined)\\b/g, className: 'boolean' },
        { regex: /\\b(\\d+)\\b/g, className: 'number' },
    ];

    let segments = [{ text: line, type: 'plain' }];

    patterns.forEach(({ regex, className }) => {
        let newSegments = [];
        segments.forEach(segment => {
            if (segment.type !== 'plain') {
                newSegments.push(segment);
                return;
            }
            let lastIndex = 0;
            let match;
            while ((match = regex.exec(segment.text)) !== null) {
                if (match.index > lastIndex) {
                    newSegments.push({
                        text: segment.text.slice(lastIndex, match.index),
                        type: 'plain'
                    });
                }
                newSegments.push({
                    text: match[0],
                    type: className
                });
                lastIndex = match.index + match[0].length;
            }
            if (lastIndex < segment.text.length) {
                newSegments.push({
                    text: segment.text.slice(lastIndex),
                    type: 'plain'
                });
            }
        });
        segments = newSegments;
    });

    return segments.map((segment, index) => {
        if (segment.type === 'plain') {
            return segment.text;
        }
        return <span key={index} className={\`token \${segment.type}\`}>{segment.text}</span>;
    });
};`;

export const ejemploCSS = `.code-editor-container {
    display: flex;
    background-color: #1e1e1e;
    color: #d4d4d4;
    font-family: monospace;
    border-radius: 8px;
    overflow: hidden;
}

.line-number {
    padding: 1rem;
    text-align: right;
    border-right: 1px solid #333;
    color: #858585;
    user-select: none;
}

.code-content {
    flex-grow: 1;
    padding: 1rem;
    white-space: pre;
    overflow-x: auto;
}

.token.keyword { color: #569cd6; }
.token.string { color: #ce9178; }
.token.boolean { color: #569cd6; }
.token.number { color: #b5cea8; }`;
