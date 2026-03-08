import React from 'react';
import ViewCode from '../components/reusables/ViewCode/ViewCode';
import { arraysLessonCode } from '../data/codes/arrays_lesson';

const ArraysExercisesPage = () => {
    return (
        <div className="container" style={{ padding: '2rem 1rem' }}>
            <h1>Ejercicios: Masterizando Arrays y Objetos</h1>
            <p>Este es el código que estuvimos trabajando hoy para entender map, filter, find y el acceso a estructuras profundas.</p>
            
            <section style={{ marginTop: '2rem' }}>
                <ViewCode code={arraysLessonCode} />
            </section>
        </div>
    );
};

export default ArraysExercisesPage;
