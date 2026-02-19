import React from 'react';
import Objects from '../components/features/Structures/Objects';
import Arrays from '../components/features/Structures/Arrays';
import styles from '../components/features/Structures/style/Structures.module.css';
import { useState } from 'react';
const Structures = () => {
    const [activeTab, setActiveTab] = useState('object');
    return (
        <div className={styles.container} style={{ padding: '1rem 0.5rem' }}>
            <span>Chapter Three:</span><h1>Estructuras de Datos y Colecciones</h1>

            <div className={styles.buttons}>
                <button onClick={() => setActiveTab('object')}>Objetos</button>
                <button onClick={() => setActiveTab('array')}>Arreglos</button>
            </div>
            {activeTab === 'object' && <Objects />}
            {activeTab === 'array' && <Arrays />}


        </div>
    );
};

export default Structures;
