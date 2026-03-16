import React from 'react';
import Objects from '../components/features/Structures/Objects';
import { Link } from 'react-router-dom';

const ObjectsPage = () => {
    return (
        <div className="container" style={{ padding: '1rem 0.5rem' }}>
            <span>Chapter Four:</span>
            <h1>Objetos</h1>

            <Objects />

            {/*Exercises */}
            <Link to="/objects/1">
                <button>Ejercicios</button>
            </Link>
        </div>
    );
};

export default ObjectsPage;
