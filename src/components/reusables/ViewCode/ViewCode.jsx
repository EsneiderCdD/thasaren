import './styles/ViewCode.css'
import {tokenizeLine } from './utils/Tokenizer'

const ViewCode = ({ code = "" }) => {
    const lines = code.split('\n');
    return (
        <div className=''>
            <div className="code-editor-container">
                <div className="line-number">
                    {lines.map((_, index) => (
                        <div key={index}>{index + 1}</div>
                    ))}
                </div>
                <div className="code-content">
                    {lines.map((line, index) => (
                        <div key={index}> {line ? tokenizeLine(line) : '\u00A0'}
                        </div>
                    ))}</div>
            </div>
        </div>
    );
};
export default ViewCode    