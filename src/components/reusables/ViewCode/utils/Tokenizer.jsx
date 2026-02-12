/*REFACTORIZAR COMPONENTE*/
/**
 @param {string} line
 @param {string} language
 @returns {JSX}
 */
export const tokenizeLine = (line, language = 'javascript') => {
    if (language !== 'javascript') {
        return line;
    }

    const patterns = [
        {
            regex: /(["'`])(.*?)\1/g,
            className: 'string'
        },
        {
            regex: /\b(const|let|var|function|return|if|else|class|async|await|try|catch|throw|new|this)\b/g,
            className: 'keyword'
        },
        {
            regex: /\b(true|false|null|undefined)\b/g,
            className: 'boolean'
        },
        {
            regex: /\b(\d+)\b/g,
            className: 'number'
        },
    ];

    // Creamos un array de "segmentos" (partes del texto)
    let segments = [{ text: line, type: 'plain' }];

    // Por cada patrón, dividimos los segmentos que aún son 'plain'
    patterns.forEach(({ regex, className }) => {
        let newSegments = [];
        
        segments.forEach(segment => {
            // Si ya tiene tipo (no es 'plain'), no lo tocamos
            if (segment.type !== 'plain') {
                newSegments.push(segment);
                return;
            }

            // Aplicamos el regex
            let lastIndex = 0;
            let match;
            
            while ((match = regex.exec(segment.text)) !== null) {
                // Texto antes del match
                if (match.index > lastIndex) {
                    newSegments.push({
                        text: segment.text.slice(lastIndex, match.index),
                        type: 'plain'
                    });
                }
                
                // El match en sí
                newSegments.push({
                    text: match[0],
                    type: className
                });
                
                lastIndex = match.index + match[0].length;
            }
            
            // Texto después del último match
            if (lastIndex < segment.text.length) {
                newSegments.push({
                    text: segment.text.slice(lastIndex),
                    type: 'plain'
                });
            }
        });
        
        segments = newSegments;
    });

    // Convertimos los segmentos a JSX
    return segments.map((segment, index) => {
        if (segment.type === 'plain') {
            return segment.text;
        }
        return <span key={index} className={`token ${segment.type}`}>{segment.text}</span>;
    });
};