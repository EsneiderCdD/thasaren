import React from 'react';
import VariablesAndTypes from '../components/features/Logic/VariablesAndTypes';
import DataStructures from '../components/features/Logic/DataStructures';
import { Link } from 'react-router-dom';

const VariablesAndTypesPage = () => {
    return (
        <div className="container" style={{ padding: '1rem 0.5rem' }}>
            <span>Chapter One:</span>
            <h1>Variables y Tipos de Datos</h1>

            <VariablesAndTypes />
            
            <DataStructures />

            {/*Exercises */}
            <Link to="/logic/exercises/1">
                <button>Ejercicios</button>
            </Link>
        </div>
    );
};

export default VariablesAndTypesPage;
