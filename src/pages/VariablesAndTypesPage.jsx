import React from 'react';
import VariablesAndTypes from '../components/features/Logic/VariablesAndTypes';
import { Link } from 'react-router-dom';

const VariablesAndTypesPage = () => {
    return (
        <div className="container" style={{ padding: '1rem 0.5rem' }}>
            <span>Chapter One:</span>
            <h1>Variables y Tipos de Datos</h1>

            <VariablesAndTypes />

            {/*Exercises */}
            <Link to="/logic/exercises/1">
                <button>Ejercicios</button>
            </Link>
        </div>
    );
};

export default VariablesAndTypesPage;
