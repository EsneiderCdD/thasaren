import React from 'react';
import ViewCode from '../../reusables/ViewCode/ViewCode';

import styles from './styles/SidePanel.module.css';

const SidePanel = ({ data, categoryLabel, onClose }) => {
    if (!data) return null;

    return (
        <div className={styles.panel}>
            <div className={styles.header}>
                <span className={styles.categoryLabel}>{categoryLabel}</span>
                <button 
                    className={styles.closeButton}
                    onClick={onClose}
                >
                    Cerrar
                </button>
            </div>
            
            <div className={styles.content}>
                <h1 className={styles.title}>{data.title}</h1>
                <p className={styles.description}>{data.description}</p>
                
                <h4 className={styles.codeLabel}>Ejemplo en código:</h4>
                <div className={styles.codeContainer}>
                    <ViewCode code={data.code} />
                </div>
            </div>
        </div>
    );
};

export default SidePanel;
