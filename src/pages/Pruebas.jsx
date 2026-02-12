import ViewCode from '../components/ViewCode/ViewCode';

const Pruebas = () => {

    // EJEMPLO 1: JavaScript Complejo (Lógica, Async, Clases)
    const jsExample = [
        { content: <><span className="token keyword">class</span> <span className="token class">Consciencia</span> <span className="token punctuation">{'{'}</span></> },
        { content: <>    <span className="token keyword">constructor</span>(<span className="token param">origen</span>) <span className="token punctuation">{'{'}</span></> },
        { content: <>        <span className="token keyword">this</span>.<span className="token property">origen</span> <span className="token operator">=</span> <span className="token param">origen</span>;</> },
        { content: <>        <span className="token keyword">this</span>.<span className="token property">datos</span> <span className="token operator">=</span> [];</> },
        { content: <>    <span className="token punctuation">{'}'}</span></> },
        { content: "" },
        { content: <>    <span className="token keyword">async</span> <span className="token function">procesar</span>() <span className="token punctuation">{'{'}</span></> },
        { content: <>        <span className="token keyword">try</span> <span className="token punctuation">{'{'}</span></> },
        { content: <>            <span className="token keyword">const</span> <span className="token param">resultado</span> <span className="token operator">=</span> <span className="token keyword">await</span> <span className="token function">fetch</span>(<span className="token string">"/api/verdad"</span>);</> },
        { content: <>            <span className="token control">if</span> (!<span className="token param">resultado</span>.<span className="token property">ok</span>) <span className="token keyword">throw</span> <span className="token keyword">new</span> <span className="token class">Error</span>(<span className="token string">"Fallo"</span>);</> },
        { content: "" },
        { content: <>            <span className="token keyword">return</span> <span className="token boolean">true</span>;</> },
        { content: <>        <span className="token punctuation">{'}'}</span> <span className="token keyword">catch</span> (<span className="token param">e</span>) <span className="token punctuation">{'{'}</span></> },
        { content: <>            <span className="token custom">console</span>.<span className="token function">error</span>(<span className="token param">e</span>);</> },
        { content: <>            <span className="token keyword">return</span> <span className="token boolean">false</span>;</> },
        { content: <>        <span className="token punctuation">{'}'}</span></> },
        { content: <>    <span className="token punctuation">{'}'}</span></> },
        { content: <><span className="token punctuation">{'}'}</span></> }
    ];

    // EJEMPLO 2: JSON (Anidamiento Profundo)
    const jsonExample = [
        { content: <><span className="token punctuation">{'{'}</span></> },
        { content: <>    <span className="token property">"proyecto"</span>: <span className="token string">"Thasaren"</span>,</> },
        { content: <>    <span className="token property">"config"</span>: <span className="token punctuation">{'{'}</span></> },
        { content: <>        <span className="token property">"tema"</span>: <span className="token string">"dark"</span>,</> },
        { content: <>        <span className="token property">"modulos"</span>: [</> },
        { content: <>            <span className="token punctuation">{'{'}</span> <span className="token property">"id"</span>: <span className="token number">1</span>, <span className="token property">"nombre"</span>: <span className="token string">"Memoria"</span> <span className="token punctuation">{'}'}</span>,</> },
        { content: <>            <span className="token punctuation">{'{'}</span> <span className="token property">"id"</span>: <span className="token number">2</span>, <span className="token property">"nombre"</span>: <span className="token string">"Esencia"</span> <span className="token punctuation">{'}'}</span></> },
        { content: <>        ]</> },
        { content: <>    <span className="token punctuation">{'}'}</span></> },
        { content: <><span className="token punctuation">{'}'}</span></> }
    ];

    // EJEMPLO 3: CSS (Selectores y Unidades)
    const cssExample = [
        { content: <><span className="token selector">.contenedor-principal</span> <span className="token punctuation">{'{'}</span></> },
        { content: <>    <span className="token property">display</span>: <span className="token string">grid</span>;</> },
        { content: <>    <span className="token property">grid-template-columns</span>: <span className="token number">1</span><span className="token unit">fr</span> <span className="token number">300</span><span className="token unit">px</span>;</> },
        { content: <>    <span className="token property">gap</span>: <span className="token number">20</span><span className="token unit">px</span>;</> },
        { content: <>    <span className="token property">background</span>: <span className="token function">rgba</span>(<span className="token number">0</span>,<span className="token number">0</span>,<span className="token number">0</span>,<span className="token number">0.5</span>);</> },
        { content: <><span className="token punctuation">{'}'}</span></> }
    ];

    return (
        <div className="container" style={{ padding: '2rem 1rem' }}>
            <h1>Pruebas de Robustez: View Code</h1>
            <p>Validación de indentación, estructura y coloreado en múltiples lenguajes.</p>

            <ViewCode
                codeTitle="Lógica Compleja (Clases + Async)"
                language="JavaScript"
                rawCode={jsExample}
            />

            <ViewCode
                codeTitle="Datos Estructurados (Anidamiento)"
                language="JSON"
                rawCode={jsonExample}
            />

            <ViewCode
                codeTitle="Estilos Visuales (Unidades y Propiedades)"
                language="CSS"
                rawCode={cssExample}
            />
        </div>
    )
}

export default Pruebas;
