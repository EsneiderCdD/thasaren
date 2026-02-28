import React from 'react';
import Operators from '../components/features/Logic/Operators';
import { Link } from 'react-router-dom';

const OperatorsPage = () => {
    return (
        <div className="container" style={{ padding: '1rem 0.5rem' }}>
            <span>Chapter Two:</span>
            <h1>Operadores</h1>

            <Operators />

            {/*Exercises */}
            <Link to="/logic/exercises/4">
                <button>Ejercicios</button>
            </Link>
        </div>
    );
};

export default OperatorsPage;
