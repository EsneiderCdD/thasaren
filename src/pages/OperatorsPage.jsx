import React from 'react';
import Operators from '../components/features/Operators/Operators';
import { Link } from 'react-router-dom';

const OperatorsPage = () => {
    return (
        <div className="container" style={{ padding: '1rem 0.5rem' }}>
            <span>Chapter Two:</span>
            <h1>Operadores</h1>

            <Operators />

            {/*Exercises */}
            <Link to="/operators/exercises/1">
                <button>Ejercicios</button>
            </Link>
        </div>
    );
};

export default OperatorsPage;
