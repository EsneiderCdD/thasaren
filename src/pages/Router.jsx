
import React from 'react';
import RouterDocs from '../components/features/Router/RouterDocs';

const RouterPage = () => {
    return (
        <div className="container" style={{ padding: '1rem 0.5rem' }}>
            <span>Chapter Two:</span><h1>Enrutamiento</h1>

            {/* Documentación de Router DOM */}
            <RouterDocs />
        </div>
    );
};

export default RouterPage;
