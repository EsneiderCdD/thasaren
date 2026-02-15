import React from 'react';
import Objects from '../components/features/Structures/Objects';
import Arrays from '../components/features/Structures/Arrays';
import styles from '../components/features/Structures/style/Structures.module.css';

const Structures = () => {
    return (
        <div className={styles.container} style={{ padding: '1rem 0.5rem' }}>
            <span>Chapter Three:</span><h1>Estructuras de Datos y Colecciones</h1>

            {/* 1. OBJETOS (Entidad) */}
            <Objects />

            {/* 2. ARRAYS (Colecciones) */}
            <Arrays />
        </div>
    );
};

export default Structures;
