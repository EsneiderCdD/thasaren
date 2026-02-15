
import React from 'react';
import Operators from '../components/features/Logic/Operators';
import Conditionals from '../components/features/Logic/Conditionals';
import VariablesAndTypes from '../components/features/Logic/VariablesAndTypes';

const Logic = () => {
    return (
        <div className="container" style={{ padding: '1rem 0.5rem' }}>
            <span>Chapter One:</span><h1>Variables, Tipos, Operadores y Estructuras de Control</h1>

            {/* 1. FUNDAMENTOS: Variables, Tipos */}
            <VariablesAndTypes />

            {/* 2. HERRAMIENTAS: Operadores */}
            <Operators />

            {/* 3. ESTRUCTURAS DE CONTROL: If, Switch, etc. */}
            <Conditionals />
        </div>
    );
};

export default Logic;
