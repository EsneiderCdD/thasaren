import React from 'react';
import Arrays from '../components/features/Structures/Arrays';
import { Link } from 'react-router-dom';

const ArraysPage = () => {
    return (
        <div className="container" style={{ padding: '1rem 0.5rem' }}>
            <span>Chapter Five:</span>
            <h1>Arreglos (Arrays)</h1>

            <Arrays />
            <Link to="/arrays/1">
                <button>Ejercicios</button>
            </Link>
        </div>
    );
};

export default ArraysPage;
