import React from 'react';
import Conditionals from '../components/features/Logic/Conditionals';
import Operators from '../components/features/Logic/Operators';

const LogicPage = () => {
    return (
        <div className="container" style={{ padding: '1rem 0.5rem' }}>
            <span>Chapter One:</span><h1>Lógica</h1>
            {/* Operadores */}
            <Operators />
            {/* Condicionales */}
            <Conditionals />
        </div>
    );
};

export default LogicPage;
