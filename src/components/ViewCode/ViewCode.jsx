import './ViewCode.css';

const ViewCode = ({ codeTitle, language, rawCode }) => {
    return (
        <div className="code-block-wrapper" style={{ marginBottom: '3rem' }}>
            {codeTitle && <h3 style={{ marginBottom: '0.5rem', color: '#ccc', fontFamily: 'sans-serif' }}>{codeTitle} ({language})</h3>}
            <div className="code-editor-container">
                {/* Columna de Números */}
                <div className="line-numbers">
                    {rawCode.map((_, index) => (
                        <div key={index}>{index + 1}</div>
                    ))}
                </div>

                {/* Columna de Código */}
                <div className="code-content">
                    {rawCode.map((row, index) => (
                        <div key={index}>
                            {row.content || '\u00A0'}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ViewCode;
