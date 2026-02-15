import React from 'react';
import Conditionals from '../components/features/Logic/Conditionals';
import Operators from '../components/features/Logic/Operators';

const LogicPage = () => {
    return (
        <div className="container" style={{ padding: '2rem 1rem' }}>
            <h1>Lógica</h1>

            <p className="intro-text" style={{ fontSize: '1.2rem', lineHeight: '1.6', marginBottom: '3rem' }}>
                El código no es lineal; está lleno de bifurcaciones. El control de flujo permite al programa tomar decisiones,
                ejecutando diferentes bloques de código según el estado de los datos.
            </p>

            {/* 1. Operadores: La base del cálculo y la lógica */}
            <Operators />

            {/* 2. Condicionales: Toma de decisiones basada en operadores */}
            <Conditionals />
        </div>
    );
};

export default LogicPage;
