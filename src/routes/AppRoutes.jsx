
import { useRoutes } from 'react-router-dom';
import Layout from '../components/reusables/Layout/Layout';
import Home from '../pages/Home';

import ViewCodePage from '../pages/ViewCodePage';

import Logic from '../pages/Logic';
import Structures from '../pages/Structures';
import RouterPage from '../pages/Router';
import Cycle from '../pages/Cycle';
import Action from '../pages/Action';
import Dom from '../pages/Dom';
import Async from '../pages/Async';
import Api from '../pages/Api';
import ClassPage from '../pages/Class';
import Memory from '../pages/Memory';
import StateToggle from '../pages/StateToggle';
import LogicExercises from '../components/features/Logic/Exercises/LogicExercises';
import StructureExercises from '../components/features/Structures/Exercises/StructureExercises';
import CycleExercises from '../components/features/Cycles/Exercises/CyclesExercises';

const AppRoutes = () => {
    const element = useRoutes([
        {
            path: '/',
            element: <Layout />,
            children: [
                { index: true, element: <Home /> },

                { path: 'idecss', element: <ViewCodePage /> },

                { path: 'logic', element: <Logic /> },
                { path: 'logic/exercises/:id', element: <LogicExercises /> },
                { path: 'structures', element: <Structures /> },
                { path: 'structures/exercises/:id', element: <StructureExercises /> },
                { path: 'cycle', element: <Cycle /> },
                { path: 'cycle/exercise/:id', element: <CycleExercises /> },
                { path: 'router', element: <RouterPage /> },
                { path: 'action', element: <Action /> },
                { path: 'dom', element: <Dom /> },
                { path: 'async', element: <Async /> },
                { path: 'api', element: <Api /> },
                { path: 'class', element: <ClassPage /> },
                { path: 'memory', element: <Memory /> },
                { path: 'state-toggle', element: <StateToggle /> },
            ],
        },
    ]);

    return element;
};

export default AppRoutes;
