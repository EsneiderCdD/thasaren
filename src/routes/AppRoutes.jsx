import { useRoutes } from 'react-router-dom';
import Layout from '../components/reusables/Layout/Layout';
import Home from '../pages/Home';
import Estructura from '../pages/Estructura';
import Tabla from '../pages/Tabla';

import ViewCodePage from '../pages/ViewCodePage';
import Origin from '../pages/Origin';
import Entity from '../pages/Entity';
import List from '../pages/List';
import Logic from '../pages/Logic';
import Cycle from '../pages/Cycle';
import Action from '../pages/Action';
import Dom from '../pages/Dom';
import Async from '../pages/Async';
import Api from '../pages/Api';
import ClassPage from '../pages/Class';
import Memory from '../pages/Memory';

const AppRoutes = () => {
    const element = useRoutes([
        {
            path: '/',
            element: <Layout />,
            children: [
                { index: true, element: <Home /> },
                { path: 'estructura', element: <Estructura /> },
                { path: 'tabla', element: <Tabla /> },

                { path: 'idecss', element: <ViewCodePage /> },
                { path: 'origin', element: <Origin /> },
                { path: 'entity', element: <Entity /> },
                { path: 'list', element: <List /> },
                { path: 'logic', element: <Logic /> },
                { path: 'cycle', element: <Cycle /> },
                { path: 'action', element: <Action /> },
                { path: 'dom', element: <Dom /> },
                { path: 'async', element: <Async /> },
                { path: 'api', element: <Api /> },
                { path: 'class', element: <ClassPage /> },
                { path: 'memory', element: <Memory /> },
            ],
        },
    ]);

    return element;
};

export default AppRoutes;
