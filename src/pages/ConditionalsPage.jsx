import React from 'react';
import Conditionals from '../components/features/Logic/Conditionals';
import { Link } from 'react-router-dom';

const ConditionalsPage = () => {
    return (
        <div className="container" style={{ padding: '1rem 0.5rem' }}>
            <span>Chapter Three:</span>
            <h1>Estructuras de Control</h1>

            <Conditionals />

            {/*Exercises */}
            <Link to="/conditionals/exercises/1">
                <button>Ejercicios</button>
            </Link>
        </div>
    );
};

export default ConditionalsPage;
