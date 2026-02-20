
import React from 'react';
import Operators from '../components/features/Logic/Operators';
import Conditionals from '../components/features/Logic/Conditionals';
import VariablesAndTypes from '../components/features/Logic/VariablesAndTypes';
import { Link } from 'react-router-dom';

const Logic = () => {
    return (
        <div className="container" style={{ padding: '1rem 0.5rem' }}>
            <span>Chapter One:</span><h1>Variables, Tipos, Operadores y Estructuras de Control</h1>

            <VariablesAndTypes />
            <Operators />
            <Conditionals />

            {/*Exercises */}
            <Link to="/logic/exercises/1">
                <button>Ejercicios</button>
            </Link>


        </div>
    );
};

export default Logic;
